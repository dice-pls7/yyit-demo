'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import type { BillingCycle, CheckoutSubmission, KvkSearchResult, Plan } from './pricing-types';

type PurchaseFormStepsProps = {
  plan: Plan;
  billingCycle: BillingCycle;
  onClose: () => void;
  onSubmit: (submission: CheckoutSubmission) => Promise<void>;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function getAnnualPrice(plan: Plan) {
  return plan.yearlyMonthlyPrice * 12;
}

function getAnnualSavings(plan: Plan) {
  return (plan.monthlyPrice * 12) - getAnnualPrice(plan);
}

function getCheckoutAmount(plan: Plan, billingCycle: BillingCycle) {
  if (billingCycle === 'monthly') return plan.monthlyPrice;
  return getAnnualPrice(plan);
}

export default function PurchaseFormSteps({ plan, billingCycle, onClose, onSubmit }: PurchaseFormStepsProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [quantityInput, setQuantityInput] = useState('1');
  const [companyQuery, setCompanyQuery] = useState('');
  const [searchingCompanies, setSearchingCompanies] = useState(false);
  const [companySearchError, setCompanySearchError] = useState('');
  const [companyResults, setCompanyResults] = useState<KvkSearchResult[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<KvkSearchResult | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const quantity = Math.max(1, parseInt(quantityInput, 10) || 0);
  const unitPrice = getCheckoutAmount(plan, billingCycle);
  const checkoutAmount = unitPrice * quantity;

  function handleQuantityChange(raw: string) {
    if (/^\d*$/.test(raw)) setQuantityInput(raw);
  }

  function handleQuantityBlur() {
    if (!quantityInput || parseInt(quantityInput, 10) < 1) setQuantityInput('1');
  }

  const canProceedStep1 = parseInt(quantityInput, 10) >= 1;
  const canSearchCompanies = companyQuery.trim().length >= 2;
  const canProceedStep2 = !!selectedCompany;

  async function handleCompanySearch(e: React.FormEvent) {
    e.preventDefault();
    if (!canSearchCompanies) return;

    setSearchingCompanies(true);
    setCompanySearchError('');
    setSelectedCompany(null);

    posthog.capture('kvk_search_submitted', {
      query_length: companyQuery.trim().length,
      plan: plan.name,
    });

    try {
      const res = await fetch('/api/kvk-lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: companyQuery.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (typeof data.error === 'string' && data.error.toLowerCase().includes('niet geconfigureerd')) {
          setCompanySearchError('KVK zoeken is nog niet actief. Voeg eerst de KVK API instellingen toe in Vercel en .env.local.');
        } else {
          setCompanySearchError(data.error ?? 'Zoeken naar bedrijven is mislukt. Probeer opnieuw.');
        }
        setCompanyResults([]);
        return;
      }

      const results = Array.isArray(data.results) ? data.results : [];
      setCompanyResults(results);

      posthog.capture('kvk_search_results_loaded', {
        query_length: companyQuery.trim().length,
        result_count: results.length,
      });
    } catch {
      setCompanySearchError('Er ging iets mis bij het ophalen van bedrijven. Probeer opnieuw.');
      setCompanyResults([]);
    } finally {
      setSearchingCompanies(false);
    }
  }

  function handleCompanySelect(company: KvkSearchResult) {
    setSelectedCompany(company);
    posthog.capture('kvk_company_selected', {
      kvk_number: company.kvkNumber,
      company_name: company.name,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedCompany) return;

    await onSubmit({
      quantity,
      customerName,
      customerEmail,
      company: selectedCompany,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          aria-label="Sluiten"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div
            className={`flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold border ${
              step === 1
                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Stap 1: Bestelling
          </div>
          <div
            className={`flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold border ${
              step === 2
                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Stap 2: KVK-gegevens
          </div>
          <div
            className={`flex-1 rounded-full px-3 py-2 text-center text-xs font-semibold border ${
              step === 3
                ? 'bg-cyan-500/20 text-cyan-200 border-cyan-500/50'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            Stap 3: Persoonlijke gegevens
          </div>
        </div>

        {step === 1 ? (
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Controleer je bestelling</h3>
            <p className="text-slate-400 text-sm mb-6">
              Dit ga je bestellen voordat je doorgaat naar betaling.
            </p>

            <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Pakket</span>
                <span className="text-white font-medium">{plan.name}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Aantal werkstations</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantityInput(q => String(Math.max(1, (parseInt(q, 10) || 1) - 1)))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors disabled:opacity-40"
                    disabled={quantity <= 1}
                    aria-label="Minder"
                  >
                    –
                  </button>
                  <input
                    type="number"
                    max={1665}
                    min={1}
                    inputMode="numeric"
                    value={quantityInput}
                    onChange={e => handleQuantityChange(e.target.value)}
                    onBlur={handleQuantityBlur}
                    className="w-14 text-center bg-slate-800 border border-slate-600 rounded-lg py-1 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantityInput(q => String((parseInt(q, 10) || 0) + 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
                    aria-label="Meer"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Betaaltermijn</span>
                <span className="text-white font-medium">
                  {billingCycle === 'monthly' ? 'Maandelijks' : 'Jaarlijks (jaarvoordeel)'}
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 border-t border-slate-700 pt-3">
                <span>{billingCycle === 'monthly' ? 'Prijs per werkstation / maand' : 'Prijs per werkstation / jaar'}</span>
                <span>EUR {formatPrice(unitPrice)}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-300">
                  {billingCycle === 'monthly' ? 'Totaal per maand' : 'Totaal per jaar'}
                </span>
                <span className="text-cyan-300 font-semibold">EUR {formatPrice(checkoutAmount)}</span>
              </div>
              {billingCycle === 'yearly' && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-300">U bespaart per jaar</span>
                  <span className="text-emerald-200 font-semibold">EUR {formatPrice(getAnnualSavings(plan) * quantity)}</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                if (canProceedStep1) {
                  posthog.capture('checkout_step_advanced', {
                    plan: plan.name,
                    billingCycle,
                    quantity,
                    from_step: 1,
                    to_step: 2,
                  });
                  setStep(2);
                }
              }}
              disabled={!canProceedStep1}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ga naar stap 2
            </button>
          </div>
        ) : step === 2 ? (
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Zoek je organisatie</h3>
            <p className="text-slate-400 text-sm mb-6">
              Vul je bedrijfsnaam in, klik op zoeken en selecteer daarna je organisatie.
            </p>

            <form onSubmit={handleCompanySearch} className="grid md:grid-cols-3 gap-4 items-end mb-5">
              <div className="md:col-span-2">
                <label htmlFor="company-query" className="block text-sm font-medium text-slate-300 mb-1">
                  Bedrijfsnaam
                </label>
                <input
                  id="company-query"
                  type="text"
                  value={companyQuery}
                  onChange={e => setCompanyQuery(e.target.value)}
                  placeholder="Bijv. Amyyon"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={!canSearchCompanies || searchingCompanies}
                className="h-[46px] px-4 rounded-xl font-semibold bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {searchingCompanies ? 'Zoeken...' : 'Zoek bedrijf'}
              </button>
            </form>

            {companySearchError && (
              <p className="text-sm text-red-400 mb-4">{companySearchError}</p>
            )}

            {companyResults.length > 0 ? (
              <div className="rounded-xl border border-slate-700 overflow-hidden mb-5">
                <div className="max-h-64 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-800/70 text-slate-300">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold">Bedrijfsnaam</th>
                        <th className="text-left px-4 py-3 font-semibold">KVK</th>
                        <th className="text-left px-4 py-3 font-semibold">Plaats</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companyResults.map(result => {
                        const isSelected = selectedCompany?.id === result.id;
                        return (
                          <tr
                            key={result.id}
                            onClick={() => handleCompanySelect(result)}
                            className={`cursor-pointer border-t border-slate-800 transition-colors ${
                              isSelected ? 'bg-cyan-500/10' : 'hover:bg-slate-800/50'
                            }`}
                          >
                            <td className="px-4 py-3 text-slate-200">{result.name}</td>
                            <td className="px-4 py-3 text-slate-300">{result.kvkNumber}</td>
                            <td className="px-4 py-3 text-slate-300">{result.city ?? '-'}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              !searchingCompanies && companyQuery.trim().length >= 2 && (
                <p className="text-sm text-slate-400 mb-5">Geen organisaties gevonden voor deze zoekopdracht.</p>
              )
            )}

            {selectedCompany && (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm mb-6">
                <p className="text-emerald-200 font-medium">Geselecteerde organisatie</p>
                <p className="text-slate-200 mt-1">{selectedCompany.name}</p>
                <p className="text-slate-300 mt-1">KVK: {selectedCompany.kvkNumber}</p>
                {(selectedCompany.street || selectedCompany.postalCode || selectedCompany.city) && (
                  <p className="text-slate-300 mt-1">
                    {[selectedCompany.street, selectedCompany.postalCode, selectedCompany.city].filter(Boolean).join(', ')}
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl font-medium text-slate-200 border border-slate-600 hover:border-slate-500 hover:text-white transition-colors"
              >
                Terug
              </button>
              <button
                type="button"
                onClick={() => {
                  if (canProceedStep2) {
                    posthog.capture('checkout_step_advanced', {
                      plan: plan.name,
                      billingCycle,
                      quantity,
                      from_step: 2,
                      to_step: 3,
                    });
                    setStep(3);
                  }
                }}
                disabled={!canProceedStep2}
                className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Ga naar stap 3
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Jouw gegevens</h3>
            <p className="text-slate-400 text-sm mb-6">
              Vul je gegevens in om de bestelling van <span className="text-cyan-400 font-medium">{plan.name}</span> af te ronden.
            </p>

            {selectedCompany && (
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 text-sm mb-5">
                <p className="text-slate-400 mb-1">Gekozen organisatie</p>
                <p className="text-white font-medium">{selectedCompany.name}</p>
                <p className="text-slate-300">KVK: {selectedCompany.kvkNumber}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="checkout-name" className="block text-sm font-medium text-slate-300 mb-1">
                  Naam
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  autoComplete="name"
                  name="fullname"
                  required
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  placeholder="Jan de Vries"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="checkout-email" className="block text-sm font-medium text-slate-300 mb-1">
                  E-mailadres
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  autoComplete="email"
                  name="email"
                  required
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                  placeholder="jouw@bedrijf.nl"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 rounded-xl font-medium text-slate-200 border border-slate-600 hover:border-slate-500 hover:text-white transition-colors"
                >
                  Terug
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300"
                >
                  Doorgaan naar betaling
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
