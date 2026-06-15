import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'IT-beheer MKB | Professioneel IT-beheer voor het Midden- en Kleinbedrijf | YYIT',
  description:
    'Professioneel IT-beheer voor het MKB. YYIT beheert uw werkplekken, netwerk en beveiliging zodat u zich kunt focussen op uw bedrijf. Vaste maandprijzen vanaf €14,95.',
  keywords: ['IT-beheer MKB', 'IT beheer midden klein bedrijf', 'IT ondersteuning MKB', 'managed IT MKB'],
  alternates: { canonical: 'https://yyit.nl/it-beheer-mkb' },
  openGraph: {
    title: 'IT-beheer MKB | YYIT',
    description: 'Professioneel IT-beheer voor het MKB. Vaste maandprijzen, 24/7 ondersteuning.',
    url: 'https://yyit.nl/it-beheer-mkb',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat kost IT-beheer voor een MKB-bedrijf?',
    answer:
      'Bij YYIT betaalt u een vaste maandprijs per werkplek, vanaf €14,95 per maand. Zo weet u altijd precies wat u kwijt bent aan IT-beheer, zonder verrassingen achteraf.',
  },
  {
    question: 'Wat valt er onder IT-beheer voor het MKB?',
    answer:
      'IT-beheer voor het MKB omvat onder andere: beheer van werkplekken (laptops, pc\'s), netwerkbeheer, cybersecurity, updates en patch management, cloudopslag, back-up en herstel, en een helpdesk voor dagelijkse vragen.',
  },
  {
    question: 'Hoe snel reageert YYIT bij een IT-probleem?',
    answer:
      'YYIT hanteert gegarandeerde responstijden op basis van het gekozen pakket. Bij kritieke storingen reageren we binnen 1 uur. Voor reguliere vragen geldt een responstijd van maximaal 4 uur op werkdagen.',
  },
  {
    question: 'Moeten wij een eigen IT-medewerker in dienst houden?',
    answer:
      'Nee. Met een volledig beheercontract bij YYIT fungeert ons team als uw volledige IT-afdeling. U hoeft geen IT-medewerker in dienst te nemen of te houden.',
  },
  {
    question: 'Werkt YYIT ook voor kleine bedrijven met minder dan 10 werkplekken?',
    answer:
      'Absoluut. YYIT is speciaal opgezet voor het MKB, inclusief kleine bedrijven en ZZP\'ers. Onze pakketten schalen mee vanaf één werkplek.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'IT-beheer MKB', item: 'https://yyit.nl/it-beheer-mkb' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
    {
      '@type': 'Service',
      name: 'IT-beheer voor het MKB',
      provider: { '@type': 'Organization', name: 'YYIT', url: 'https://yyit.nl' },
      description: 'Professioneel IT-beheer voor het midden- en kleinbedrijf. Vaste maandprijzen, 24/7 monitoring.',
      areaServed: 'NL',
    },
  ],
};

export default function ITBeheerMKBPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">IT-beheer MKB</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            IT-beheer voor het{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MKB</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Laat YYIT uw IT-omgeving volledig beheren. Van werkplekken en updates tot beveiliging en back-ups —
            wij zorgen dat uw IT werkt, zodat u kunt ondernemen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              Bekijk onze pakketten
            </a>
            <a
              href="https://yyit.nl/#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl font-semibold text-lg transition-colors"
            >
              Gratis adviesgesprek
            </a>
          </div>
        </div>
      </section>

      {/* Wat is IT-beheer */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Wat is IT-beheer voor het MKB?</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                IT-beheer voor het MKB is het professioneel beheren van alle IT-middelen binnen uw bedrijf:
                computers, laptops, servers, netwerken en software. Een gespecialiseerde partij als YYIT neemt
                dit volledig van u over voor een vaste maandprijs.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Veel MKB-bedrijven missen de tijd, kennis of capaciteit voor een volwaardige IT-afdeling.
                Met professioneel IT-beheer krijgt u enterprise-kwaliteit IT-ondersteuning, betaalbaar voor
                bedrijven van elke omvang.
              </p>
              <p className="text-slate-400 leading-relaxed">
                YYIT werkt met vaste maandprijzen per werkplek, zodat u nooit voor verrassingen staat.
                Onze pakketten starten vanaf <strong className="text-white">€14,95 per werkplek per maand</strong>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🖥️', title: 'Werkplekbeheer', desc: 'Beheer van alle computers en laptops' },
                { icon: '🔒', title: 'Beveiliging', desc: 'Antivirus, firewall en monitoring' },
                { icon: '☁️', title: 'Cloudopslag', desc: 'Veilige opslag en back-ups' },
                { icon: '🛠️', title: 'Helpdesk', desc: 'Directe ondersteuning bij vragen' },
                { icon: '🔄', title: 'Updates', desc: 'Automatisch patch management' },
                { icon: '📡', title: 'Netwerk', desc: 'Beheer van uw netwerkomgeving' },
              ].map((item) => (
                <div key={item.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Waarom IT-beheer uitbesteden aan YYIT?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Meer dan 500 MKB-bedrijven vertrouwen op YYIT voor hun dagelijkse IT-beheer.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Voorspelbare kosten',
                desc: 'Vaste maandprijzen per werkplek. Geen onverwachte facturen, geen uurloon bij storingen. Gewoon IT-beheer voor een vast bedrag.',
              },
              {
                title: 'Proactief beheer',
                desc: 'Wij monitoren uw systemen 24/7 en lossen problemen op vóórdat u er last van hebt. Geen brandjes blussen, maar structurele preventie.',
              },
              {
                title: 'NIS2-klaar',
                desc: 'Onze dienstverlening voldoet aan de NIS2-richtlijn. Zo bent u compliant met de nieuwste Europese cybersecurity-regelgeving.',
              },
              {
                title: 'Snelle responstijd',
                desc: 'Kritieke storingen pakken we op binnen 1 uur. Uw medewerkers werken door terwijl wij de IT regelen.',
              },
              {
                title: 'Lokale aanwezigheid',
                desc: 'Naast remote ondersteuning kunnen onze technici ook op locatie komen. Altijd een bekend gezicht als dat nodig is.',
              },
              {
                title: 'Schaalbaarheid',
                desc: 'Of u nu 5 of 500 werkplekken heeft — ons aanbod schaalt mee met uw groei, zonder contractwijzigingen.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakketten CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transparante prijzen voor het MKB</h2>
          <p className="text-slate-300 mb-8">
            YYIT toont concrete prijzen terwijl de markt vaag blijft over kosten. Kies het pakket dat bij uw bedrijf past.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Basis', price: '€14,95', per: 'per werkplek/maand', features: ['Monitoring', 'Updates', 'Helpdesk'] },
              { name: 'Professioneel', price: '€29,95', per: 'per werkplek/maand', features: ['Alles uit Basis', 'Beveiliging', 'Back-up', 'Prioriteit'], highlight: true },
              { name: 'Enterprise', price: '€49,95', per: 'per werkplek/maand', features: ['Alles uit Pro', 'NIS2-compliance', 'Dedicated support'] },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 border ${p.highlight ? 'bg-gradient-to-b from-cyan-900/30 to-blue-900/30 border-cyan-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}
              >
                <div className="text-slate-400 text-sm mb-2">{p.name}</div>
                <div className="text-3xl font-bold text-white mb-1">{p.price}</div>
                <div className="text-slate-500 text-xs mb-4">{p.per}</div>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="text-cyan-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a
            href="https://yyit.nl/#pricing"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Alle pakketten vergelijken →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over IT-beheer voor het MKB
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:text-cyan-400 transition-colors list-none">
                  {item.question}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-xl">↓</span>
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Gerelateerde pagina's */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-400 mb-8">Meer over onze diensten</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/it-beheer-uitbesteden', label: 'IT-beheer uitbesteden', desc: 'Alles over het uitbesteden van uw IT' },
              { href: '/cybersecurity-mkb', label: 'Cybersecurity MKB', desc: 'Bescherm uw bedrijf tegen cyberdreigingen' },
              { href: '/managed-it-services', label: 'Managed IT Services', desc: 'Wat zijn managed IT services?' },
              { href: '/werkplekbeheer', label: 'Werkplekbeheer', desc: 'Beheer van laptops en werkplekken' },
              { href: '/nis2-mkb', label: 'NIS2 voor het MKB', desc: 'Alles over de NIS2-richtlijn' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-4 transition-colors group"
              >
                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors mb-1">{link.label}</div>
                <div className="text-slate-500 text-sm">{link.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
