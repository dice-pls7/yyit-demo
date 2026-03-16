'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import type { BillingCycle, Plan } from './pricing-types';

type PurchaseFormStepsProps = {
  plan: Plan;
  billingCycle: BillingCycle;
  onClose: () => void;
  onSubmit: (quantity: number) => Promise<void>;
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
  const [step, setStep] = useState<1 | 2>(1);
  const [quantityInput, setQuantityInput] = useState('1');
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

  const canProceed = parseInt(quantityInput, 10) >= 1;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit(quantity);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-2xl">
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
            Stap 2: Gegevens
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
                    type="text"
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
                if (canProceed) {
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
              disabled={!canProceed}
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Ga naar stap 2
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Jouw gegevens</h3>
            <p className="text-slate-400 text-sm mb-6">
              Vul je gegevens in om de bestelling van <span className="text-cyan-400 font-medium">{plan.name}</span> af te ronden.
            </p>

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
                  onClick={() => setStep(1)}
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
