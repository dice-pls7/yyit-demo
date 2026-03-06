export default function SecurityRealitySection() {
  const risks = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Ransomware aanvallen',
      description: 'Criminelen blokkeren je systemen en eisen losgeld. Een dag downtime kost Nederlandse MKB-bedrijven gemiddeld €8.000.',
      impact: 'Financieel verlies'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
        </svg>
      ),
      title: 'Datalekken',
      description: 'Klantgegevens, IBAN-nummers en persoonlijke informatie vallen in verkeerde handen. GDPR-boetes kunnen oplopen tot €20 miljoen.',
      impact: 'Juridische gevolgen'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: 'Systeem uitval',
      description: 'Kritieke software faalt, servers crashen, medewerkers kunnen niet werken. Je bedrijf draait op volle toeren, totdat het niet meer draait.',
      impact: 'Productiviteitsverlies'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'Reputatieschade',
      description: 'In de media vanwege een datalek. Klanten verliezen vertrouwen. Concurrenten profiteren. Het herstel kan jaren duren.',
      impact: 'Verloren klanten'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Dataverlies zonder backup',
      description: 'Jaren aan klantdata, financiële administratie en bedrijfsdocumenten: in één keer weg. En geen manier om het terug te halen.',
      impact: 'Onherstelbaar verlies'
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Elements with Warning Tone */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Problem - Main Headline */}
        <div className="text-center space-y-6 mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full backdrop-blur-sm">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-red-300 text-sm font-medium">De realiteit van moderne cyberrisico&apos;s</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Datalekken, ransomware en{' '}
            <span className="text-red-400">bedrijfsstilstand</span>
            {' '}<br className="hidden md:block" />
            dit overkomt duizenden bedrijven elk jaar
          </h2>

          {/* Agitate - Make it Real */}
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Cyberaanvallen zijn geen theoretisch risico meer. Ook in Nederland worden dagelijks bedrijven getroffen door datalekken,
            ransomware en systeemuitval. Van ZZP&apos;ers tot grote organisaties; niemand is veilig zonder de juiste bescherming.
          </p>
        </div>

        {/* Agitate - The Consequences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {risks.map((risk, index) => (
            <div
              key={risk.title}
              className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-red-500/30 rounded-xl p-6 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle Warning Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none"></div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {risk.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {risk.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {risk.description}
                </p>

                {/* Impact Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-300 text-xs font-medium">{risk.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Transition - Bridge to Pricing */}
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          <div className="space-y-4 py-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Proactieve beveiliging voorkomt crises
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              Met continue monitoring, automatische updates, professionele back-ups en 24/7 ondersteuning
              zorg je ervoor dat jouw systemen <span className="text-cyan-400 font-semibold">veilig, stabiel en altijd beschikbaar</span> blijven.
              Voordat het mis gaat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
            >
              Bekijk onze beveiligingspakketten
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
