'use client';

import { useState } from 'react';

type Plan = { name: string; buttonname: string; price: string; badge: string; description: string; features: string[]; highlighted: boolean };

export default function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState('');

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  function openCheckoutForm(plan: Plan) {
    console.log('[Checkout] User initiated checkout for plan:', plan.name, '— €' + plan.price + '/maand');
    setSelectedPlan(plan);
    setCustomerName('');
    setCustomerEmail('');
    setError('');
  }

  function closeCheckoutForm() {
    setSelectedPlan(null);
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedPlan) return;

    // NOTE: Logging name and email to console as requested (replace with API call when available)
    console.log('[Checkout] Customer details collected:', { name: customerName, email: customerEmail, plan: selectedPlan.name });

    closeCheckoutForm();
    await handleCheckout(selectedPlan);
  }

  async function handleCheckout(plan: { name: string; price: string; description: string }) {
    setLoadingPlan(plan.name);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: `YYIT ${plan.name} pakket`,
          price: parseFloat(plan.price),
          reference: `YYIT-${plan.name.toUpperCase()}-${Date.now()}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.redirectUrl) {
        setError(data.error ?? 'Betaling starten mislukt. Probeer het opnieuw.');
      } else {
        window.location.href = data.redirectUrl;
      }
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setLoadingPlan(null);
    }
  }

  const plans = [
    {
      name: 'Starter',
      buttonname: 'Gemak',
      price: '12.50',
      badge: 'Beste keus voor ZZP\'ers',
      description: 'Perfect voor zelfstandigen die betrouwbare IT-ondersteuning nodig hebben',
      features: [
        'Basis monitoring van systemen',
        'Maandelijks patchbeheer',
        'Standaard antivirus bescherming',
        'Email helpdesk (binnen 24u)',
        'Remote assistance'
      ],
      highlighted: false,
    },
    {
      name: 'Compleet',
      buttonname: 'Rust',
      price: '49',
      badge: 'Meestgekozen',
      description: 'Ideaal voor kleine teams die complete IT-beveiliging willen',
      features: [
        'Proactieve 24/7 monitoring',
        'Automatisch patchbeheer',
        'Geavanceerde antivirus + firewall',
        'Prioriteit helpdesk ondersteuning',
        'Remote monitoring & management'
      ],
      highlighted: true,
    },
    {
      name: 'Premium',
      buttonname: 'Volledige Ontzorging',
      price: '99',
      badge: 'Geschikt voor grote organisaties',
      description: 'Enterprise-grade beveiliging voor groeiende bedrijven',
      features: [
        'Hoge prioriteit IT-support',
        'Problemen opgelost voordat je het merkt',
        'Wij regelen patchbeheer en updates voor je',
        'AI-Aangedreven EDR antivirus',
        'Toegewijde support manager'
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Transparante{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              prijzen
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Kies het pakket dat bij jouw behoeften past. Alle prijzen zijn per maand.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 animate-fadeInUp ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                  : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold text-white shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  {!plan.highlighted && (
                    <p className="text-sm text-cyan-400 mt-1">{plan.badge}</p>
                  )}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">€{plan.price}</span>
                  <span className="text-slate-400">/ maand</span>
                </div>

                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mt-8 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-cyan-400' : 'text-slate-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => openCheckoutForm(plan)}
                disabled={loadingPlan === plan.name}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {loadingPlan === plan.name ? 'Laden...' : `Selecteer ${plan.buttonname}`}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        {error && (
          <p className="text-center text-red-400 mt-6 text-sm">{error}</p>
        )}
        <p className="text-center text-slate-500 mt-4 text-sm">
          Alle prijzen zijn exclusief BTW. Geen verborgen kosten, geen verrassingen.
        </p>
      </div>

      {/* Checkout Details Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-2xl">
            <button
              onClick={closeCheckoutForm}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Sluiten"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Bijna klaar!</h3>
            <p className="text-slate-400 text-sm mb-6">
              Vul je gegevens in om door te gaan met het <span className="text-cyan-400 font-medium">{selectedPlan.name}</span> pakket (€{selectedPlan.price}/maand).
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="checkout-name" className="block text-sm font-medium text-slate-300 mb-1">
                  Naam
                </label>
                <input
                  id="checkout-name"
                  type="text"
                  autoComplete='name'
                  name='fullname'
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
                  autoComplete='email'
                  name='email'
                  required
                  value={customerEmail}
                  onChange={e => setCustomerEmail(e.target.value)}
                  placeholder="jouw@bedrijf.nl"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300"
              >
                Doorgaan naar betaling
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
