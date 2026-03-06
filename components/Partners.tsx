export default function Partners() {
  const partners = [
    { name: 'Microsoft', category: 'Cloud & Productivity' },
    { name: 'AWS', category: 'Cloud Infrastructure' },
    { name: 'Cisco', category: 'Networking' },
    { name: 'VMware', category: 'Virtualization' },
    { name: 'Dell', category: 'Hardware' },
    { name: 'HP Enterprise', category: 'Enterprise Solutions' },
    { name: 'Fortinet', category: 'Security' },
    { name: 'Sophos', category: 'Endpoint Protection' },
  ];

  const testimonials = [
    {
      quote: "YYIT heeft onze volledige IT-infrastructuur getransformeerd. Hun proactieve aanpak heeft ons niet alleen geld bespaard, maar ook veel zorgen uit handen genomen.",
      author: "Jan Pietersen",
      role: "CEO",
      company: "TechStart BV"
    },
    {
      quote: "De 24/7 support is fantastisch. Elke keer dat we ze nodig hebben, staan ze binnen enkele minuten voor ons klaar. Echte professionals.",
      author: "Maria van der Berg",
      role: "IT Manager",
      company: "GroeiGroep Nederland"
    },
    {
      quote: "Als klein bedrijf hadden we geen intern IT-team nodig dankzij YYIT. Ze voelen als een verlengstuk van ons bedrijf.",
      author: "Ahmed Hassan",
      role: "Directeur",
      company: "Innovate Solutions"
    }
  ];

  return (
    <section id="partners" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Onze{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              partners
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Wij werken samen met de beste technologiepartners ter wereld
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/50 rounded-xl p-8 text-center transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {partner.name}
              </div>
              <div className="text-slate-500 text-xs font-medium">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wat onze klanten zeggen
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ontdek waarom honderden bedrijven vertrouwen op YYIT voor hun IT-beheer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-cyan-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 text-center animate-fadeInUp">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-left">
                <div className="text-white font-bold">99.9% Uptime</div>
                <div className="text-slate-400 text-sm">Gegarandeerd</div>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <div className="text-white font-bold">Binnen 5 minuten</div>
                <div className="text-slate-400 text-sm">Gemiddelde responstijd</div>
              </div>
            </div>
            <div className="hidden md:block h-12 w-px bg-slate-700"></div>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              <div className="text-left">
                <div className="text-white font-bold">98% Klanttevredenheid</div>
                <div className="text-slate-400 text-sm">Op basis van reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
