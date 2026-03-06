export default function About() {
  const stats = [
    { value: '500+', label: 'Tevreden klanten' },
    { value: '99.9%', label: 'Uptime garantie' },
    { value: '24/7', label: 'Beschikbaarheid' },
    { value: '15+', label: 'Jaar ervaring' },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Snelle respons',
      description: 'Binnen enkele minuten zijn we actief om jouw problemen op te lossen'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Betrouwbaar',
      description: 'ISO 27001 gecertificeerd en voldoet aan de hoogste beveiligingsnormen'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Persoonlijke aanpak',
      description: 'Elk bedrijf is uniek en verdient maatwerk oplossingen'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovatief',
      description: 'We blijven voorop lopen met de nieuwste technologieën en oplossingen'
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Over{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              YYIT
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Al meer dan 15 jaar dé betrouwbare partner voor professionele IT-beheeroplossingen. 
            Van ZZP'er tot grote organisaties, we zorgen ervoor dat jouw IT werkt, altijd.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center space-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeInUp">
            <h3 className="text-3xl font-bold text-white">
              Waarom kiezen bedrijven voor YYIT?
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Bij YYIT begrijpen we dat IT meer is dan alleen computers en servers. Het is de ruggengraat 
              van jouw bedrijf. Daarom bieden we niet alleen technische oplossingen, maar echte partnerships.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Ons team van gecertificeerde experts staat 24/7 klaar om ervoor te zorgen dat jouw systemen 
              veilig, snel en betrouwbaar blijven. We werken proactief, zodat problemen worden opgelost 
              voordat ze impact hebben op jouw business.
            </p>
            <div className="pt-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 group"
              >
                Maak kennis met ons team
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-cyan-400 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center space-y-6 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-white">Certificeringen & Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-slate-300 font-semibold">ISO 27001</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-slate-300 font-semibold">Microsoft Partner</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-slate-300 font-semibold">AWS Certified</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700">
              <span className="text-slate-300 font-semibold">CompTIA Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
