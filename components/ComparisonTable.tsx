export default function ComparisonTable() {
  const features = [
    { name: 'Monitoring', starter: true, compleet: true, premium: true },
    { name: 'Patchbeheer', starter: true, compleet: true, premium: true },
    { name: 'Antivirus', starter: true, compleet: true, premium: true },
    { name: 'Helpdesk ondersteuning', starter: 'Email', compleet: 'Prioriteit', premium: 'Dedicated' },
    { name: 'Remote monitoring', starter: true, compleet: true, premium: true },
    { name: 'Back-up opslag', starter: '1GB', compleet: '10GB', premium: '100GB' },
    { name: 'AI antivirus (EDR)', starter: false, compleet: false, premium: true },
    { name: 'Prioriteit support', starter: false, compleet: true, premium: true },
    { name: '24/7 Beschikbaarheid', starter: false, compleet: true, premium: true },
    { name: 'Security audits', starter: false, compleet: false, premium: true },
    { name: 'Compliance rapportage', starter: false, compleet: false, premium: true },
    { name: 'Custom integraties', starter: false, compleet: false, premium: true },
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <svg className="w-6 h-6 text-cyan-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }
    if (value === false) {
      return (
        <svg className="w-6 h-6 text-slate-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    }
    return <span className="text-cyan-400 text-sm font-medium">{value}</span>;
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Vergelijk alle{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              functies
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Bekijk in detail wat elk pakket te bieden heeft
          </p>
        </div>

        {/* Scrollable Container for Mobile */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-cyan-500/20 scrollbar-track-slate-800/50">
          <div className="min-w-[640px]">
            {/* Table */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-slate-800/50 border-b border-slate-700">
                <div className="text-slate-400 font-semibold text-sm">Functie</div>
                <div className="text-center">
                  <div className="text-white font-bold">Starter</div>
                  <div className="text-cyan-400 text-sm mt-1">€12,50/mnd</div>
                </div>
                <div className="text-center relative">
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold text-white whitespace-nowrap">
                    Meestgekozen
                  </div>
                  <div className="text-white font-bold">Compleet</div>
                  <div className="text-cyan-400 text-sm mt-1">€37/mnd</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold">Premium</div>
                  <div className="text-cyan-400 text-sm mt-1">€49/mnd</div>
                </div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-4 gap-4 p-6 items-center transition-colors hover:bg-slate-800/30 ${
                    index !== features.length - 1 ? 'border-b border-slate-800/50' : ''
                  }`}
                >
                  <div className="text-slate-300 text-sm font-medium">{feature.name}</div>
                  <div className="flex justify-center">{renderCell(feature.starter)}</div>
                  <div className="flex justify-center bg-cyan-500/5 -my-6 py-6">
                    {renderCell(feature.compleet)}
                  </div>
                  <div className="flex justify-center">{renderCell(feature.premium)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-slate-500 text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Scroll horizontaal om alle pakketten te zien</span>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Nog vragen over welk pakket bij jou past?</p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 hover:border-cyan-500/50"
          >
            Plan een gratis adviesgesprek
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
