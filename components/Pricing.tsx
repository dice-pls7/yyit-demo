export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '12,45',
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
      price: '37,50',
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
      price: '50',
      badge: 'Geschikt voor grote organisaties',
      description: 'Enterprise-grade beveiliging voor groeiende bedrijven',
      features: [
        'High-priority 24/7 monitoring',
        'Real-time patchbeheer',
        'AI-powered EDR antivirus',
        'Dedicated support manager',
        'Uitgebreide remote services'
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
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                Selecteer {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-500 mt-12 text-sm">
          Alle prijzen zijn exclusief BTW. Geen verborgen kosten, geen verrassingen.
        </p>
      </div>
    </section>
  );
}
