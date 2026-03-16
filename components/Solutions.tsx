export default function Solutions() {
  const solutions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Cybersecurity Management',
      description: 'Bescherm je bedrijf tegen moderne cyberdreigingen met proactieve monitoring, endpoint protection en geavanceerde bedreigingsdetectie.',
      features: ['Real-time monitoring', 'Endpoint detection and response beveiliging', 'Houd hackers buiten de deur']
    },
    // {
    //   icon: (
    //     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    //     </svg>
    //   ),
    //   title: 'Cloud Infrastructure',
    //   description: 'Migreer naar de cloud met vertrouwen. We beheren je cloud-infrastructuur, zorgen voor optimale prestaties en kostenefficiëntie.',
    //   features: ['Cloud migratie', 'Infrastructure as Code', '24/7 monitoring']
    // },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: 'Data Back-up & Recovery',
      description: 'Verlies nooit meer kritische data. Wij zorgen voor automatische back-ups, snel herstel en naleving van internationale standaarden.',
      features: ['Automatische back-ups t/m 2TB', 'Herstel van systemen en bestanden', 'Geen zorgen over dataverlies']
    },
    // {
    //   icon: (
    //     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    //     </svg>
    //   ),
    //   title: 'IT Asset Management',
    //   description: 'Beheer al je IT-assets centraal. Van hardware tot software licenties, volledig inzicht en controle over je IT-middelen.',
    //   features: ['Asset tracking', 'License management', 'Lifecycle beheer']
    // },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Helpdesk Support',
      description: 'IT-probleem? Je krijgt een specialist die met je meekijkt en het snel oplost. Geen wachttijden, geen frustraties.',
      features: ['Hulp binnen handbereik', 'Sneller door bij onverwachte problemen', 'Vast contactpersoon voor al je IT-vragen',  ]
    },
    // {
    //   icon: (
    //     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    //     </svg>
    //   ),
    //   title: 'Performance Monitoring',
    //   description: 'Houd de prestaties van je systemen in de gaten. Proactieve alerting en gedetailleerde rapportages voor optimale uptime.',
    //   features: ['Real-time dashboards', 'Custom alerts', 'Performance analytics']
    // },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Jij de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Rust. {' '}
            </span>
             Wij de lasten.
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            IT-oplossingen die jouw zorgen wegnemen
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:bg-slate-800/50 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-6">
                {solution.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {solution.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-500 text-sm">
                    <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6 text-lg">
            Op zoek naar een custom oplossing voor jouw bedrijf?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
          >
            Bespreek je behoeften met ons
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
