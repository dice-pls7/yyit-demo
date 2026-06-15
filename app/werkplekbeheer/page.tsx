import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Werkplekbeheer | Professioneel beheer van laptops en pc\'s | YYIT',
  description:
    'Werkplekbeheer van YYIT: professioneel beheer van alle laptops, desktops en mobiele apparaten in uw bedrijf. Remote management, patch management en gebruikersondersteuning.',
  keywords: ['werkplekbeheer', 'laptop beheer bedrijf', 'device management MKB', 'remote werkplekbeheer'],
  alternates: { canonical: 'https://yyit.nl/werkplekbeheer' },
  openGraph: {
    title: 'Werkplekbeheer | YYIT',
    description: 'Professioneel beheer van alle werkplekken in uw bedrijf voor een vaste maandprijs.',
    url: 'https://yyit.nl/werkplekbeheer',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat is werkplekbeheer?',
    answer:
      'Werkplekbeheer is het professioneel beheren van alle computers, laptops en mobiele apparaten van uw medewerkers. Dit omvat installatie en configuratie, updates, beveiliging, monitoring en gebruikersondersteuning — allemaal voor een vaste maandprijs per werkplek.',
  },
  {
    question: 'Beheert YYIT ook thuiswerkplekken?',
    answer:
      'Ja. Via onze remote management tools beheert YYIT werkplekken op kantoor én thuis. Thuiswerkende medewerkers krijgen dezelfde beveiliging en ondersteuning als op kantoor.',
  },
  {
    question: 'Hoeveel kost werkplekbeheer per maand?',
    answer:
      'Werkplekbeheer van YYIT start vanaf €14,95 per werkplek per maand voor de basisdiensten. Uitgebreid beheer inclusief beveiliging en back-up is beschikbaar vanaf €29,95 per werkplek per maand.',
  },
  {
    question: 'Hoe werkt remote werkplekbeheer?',
    answer:
      'Op elk beheerd apparaat installeren we een kleine beheersoftware (agent). Via die agent monitoren we de werkplek, voeren we updates uit en kunnen we op afstand problemen oplossen — veilig en versleuteld, met uw toestemming.',
  },
  {
    question: 'Wat als een laptop gestolen of verloren raakt?',
    answer:
      'Via ons mobile device management (MDM) kunnen we een verloren of gestolen laptop op afstand blokkeren en wissen. Uw bedrijfsdata valt niet in verkeerde handen.',
  },
];

const apparaten = [
  { icon: '💻', type: 'Laptops', desc: 'Windows en macOS laptops, inclusief zakelijke modellen van Dell, HP, Lenovo en Apple.' },
  { icon: '🖥️', type: 'Desktops', desc: 'Vaste werkplekken op kantoor, inclusief thin clients en all-in-ones.' },
  { icon: '📱', type: 'Smartphones', desc: 'iOS en Android-apparaten via MDM beheer. E-mail, apps en data centraal beheerd.' },
  { icon: '📟', type: 'Tablets', desc: 'Zakelijke tablets voor in het veld of in de showroom, volledig beveiligd.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'Werkplekbeheer', item: 'https://yyit.nl/werkplekbeheer' },
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
  ],
};

export default function WerkplekbeheerPage() {
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
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Werkplekbeheer</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Werkplekbeheer</span>{' '}
            voor bedrijven
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Elke laptop, desktop of smartphone in uw bedrijf professioneel beheerd. Altijd up-to-date,
            altijd beveiligd — uw medewerkers werken ongestoord door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              Bekijk werkplekpakketten
            </a>
            <a
              href="https://yyit.nl/#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl font-semibold text-lg transition-colors"
            >
              Adviesgesprek aanvragen
            </a>
          </div>
        </div>
      </section>

      {/* Apparaattypen */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Alle apparaten onder één beheer
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            YYIT beheert alle endpoints in uw bedrijf vanuit één centraal platform.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {apparaten.map((a) => (
              <div key={a.type} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{a.type}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat doet YYIT */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Wat doet YYIT voor uw werkplekken?</h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Installatie & configuratie',
                    desc: 'Nieuwe apparaten worden kant-en-klaar geleverd of op afstand geconfigureerd. Uw medewerker werkt direct.',
                  },
                  {
                    title: 'Automatische updates',
                    desc: 'Besturingssysteem en applicaties worden automatisch en buiten werktijden bijgewerkt. Geen handmatige acties nodig.',
                  },
                  {
                    title: 'Beveiliging op de werkplek',
                    desc: 'Antivirus, encryptie van de harde schijf en endpoint detection & response (EDR) op elk apparaat.',
                  },
                  {
                    title: 'Remote support',
                    desc: 'Storingen worden op afstand opgelost. De meeste problemen zijn binnen 30 minuten verholpen zonder dat iemand langs hoeft te komen.',
                  },
                  {
                    title: 'Asset management',
                    desc: 'Volledig overzicht van alle apparaten: wat u heeft, hoe oud het is en wanneer vervanging nodig is.',
                  },
                  {
                    title: 'Remote wipe',
                    desc: 'Verloren of gestolen apparaat? We wissen op afstand alle bedrijfsdata direct.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                    <div>
                      <h3 className="text-white font-medium mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prijskaartje */}
            <div className="sticky top-28">
              <div className="bg-gradient-to-b from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-white font-bold text-2xl mb-2">Werkplekbeheer</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-cyan-400">€14,95</span>
                  <span className="text-slate-400 pb-1">per werkplek/maand</span>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Inclusief monitoring, updates, antivirus en helpdesk. Geen installatiekosten, geen lange contracten.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    '24/7 monitoring',
                    'Automatische updates',
                    'Antivirus & firewall',
                    'Remote support helpdesk',
                    'Asset management',
                    'Maandelijkse rapportage',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="text-cyan-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://yyit.nl/#pricing"
                  className="block w-full text-center py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Pakket bekijken
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over werkplekbeheer
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/10">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Uw werkplekken professioneel laten beheren?</h2>
          <p className="text-slate-300 mb-8">
            Vraag vandaag een gratis inventarisatie aan. Wij brengen uw werkplekken in kaart en presenteren
            een concreet voorstel.
          </p>
          <a
            href="https://yyit.nl/#cta"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
          >
            Gratis inventarisatie aanvragen →
          </a>
        </div>
      </section>

      {/* Gerelateerde pagina's */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-400 mb-8">Meer over onze diensten</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/it-beheer-mkb', label: 'IT-beheer MKB', desc: 'Volledig IT-beheer voor het MKB' },
              { href: '/it-beheer-uitbesteden', label: 'IT-beheer uitbesteden', desc: 'Alles over het uitbesteden van uw IT' },
              { href: '/cybersecurity-mkb', label: 'Cybersecurity MKB', desc: 'Bescherm uw bedrijf' },
              { href: '/managed-it-services', label: 'Managed IT Services', desc: 'Proactief IT-beheer' },
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
