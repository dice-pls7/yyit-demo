import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'NIS2 voor het MKB | Wat betekent de NIS2-richtlijn voor uw bedrijf | YYIT',
  description:
    'NIS2-richtlijn voor het MKB: wat zijn de verplichtingen, welke bedrijven vallen eronder en hoe voldoet u aan de eisen? YYIT helpt u NIS2-compliant te worden.',
  keywords: ['NIS2 MKB', 'NIS2 richtlijn bedrijven', 'NIS2 compliance Nederland', 'NIS2 cybersecurity verplicht'],
  alternates: { canonical: 'https://yyit.nl/nis2-mkb' },
  openGraph: {
    title: 'NIS2 voor het MKB | YYIT',
    description: 'Alles over de NIS2-richtlijn voor MKB-bedrijven. Wat zijn de verplichtingen en hoe helpt YYIT?',
    url: 'https://yyit.nl/nis2-mkb',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat is de NIS2-richtlijn?',
    answer:
      'NIS2 (Network and Information Security Directive 2) is een Europese richtlijn die bedrijven verplicht een minimum aan cybersecurity-maatregelen te nemen. De richtlijn is in 2023 van kracht geworden en moet door EU-lidstaten worden omgezet in nationale wetgeving.',
  },
  {
    question: 'Welke bedrijven vallen onder NIS2?',
    answer:
      'NIS2 geldt voor middelgrote en grote ondernemingen (50+ medewerkers of €10M+ omzet) in sectoren als energie, transport, gezondheidszorg, financiën, drinkwater, digitale infrastructuur en ICT. Maar ook MKB-bedrijven die toeleverancier zijn van NIS2-plichtige organisaties kunnen indirect verplichtingen krijgen.',
  },
  {
    question: 'Wat zijn de boetes voor niet-naleving van NIS2?',
    answer:
      'Bij niet-naleving riskeren bedrijven bestuurlijke boetes tot €10 miljoen of 2% van de wereldwijde jaaromzet (voor essentiële entiteiten) of €7 miljoen / 1,4% omzet (voor belangrijke entiteiten). Bestuurders kunnen persoonlijk aansprakelijk worden gesteld.',
  },
  {
    question: 'Welke maatregelen verplicht NIS2?',
    answer:
      'NIS2 vereist onder meer: een risicoanalyse en beveiligingsbeleid, incident response procedures, back-up en herstelplannen, beveiliging van de toeleveringsketen, encryptie van data, multi-factor authenticatie, en meldplicht bij incidenten (binnen 24 uur eerste melding, binnen 72 uur volledige melding).',
  },
  {
    question: 'Hoe helpt YYIT bij NIS2-compliance?',
    answer:
      'YYIT biedt een complete NIS2-aanpak: risicoanalyse, gap-analyse van uw huidige beveiliging, implementatie van vereiste maatregelen, documentatie voor audits en doorlopend beheer om compliant te blijven. Onze Enterprise-dienstverlening is volledig afgestemd op NIS2.',
  },
];

const verplichtingen = [
  { art: 'Art. 21a', title: 'Risicoanalyse', desc: 'Identificeer en documenteer cybersecurity-risico\'s voor uw organisatie.' },
  { art: 'Art. 21b', title: 'Incident response', desc: 'Stel procedures op voor het detecteren, reageren op en herstellen van incidenten.' },
  { art: 'Art. 21c', title: 'Business continuity', desc: 'Zorg voor back-up, disaster recovery en crisismanagement.' },
  { art: 'Art. 21d', title: 'Supply chain security', desc: 'Beoordeel de cybersecurity van uw leveranciers en toeleveringsketen.' },
  { art: 'Art. 21e', title: 'Toegangsbeveiliging', desc: 'Implementeer MFA, least-privilege en encryptie voor alle systemen.' },
  { art: 'Art. 23', title: 'Meldplicht', desc: 'Meld significante incidenten binnen 24 uur bij de bevoegde autoriteit.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'NIS2 voor het MKB', item: 'https://yyit.nl/nis2-mkb' },
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
      '@type': 'Article',
      headline: 'NIS2 voor het MKB: wat betekent de richtlijn voor uw bedrijf?',
      description: 'Alles over NIS2 voor MKB-bedrijven: verplichtingen, boetes, deadlines en hoe u compliant wordt.',
      publisher: { '@type': 'Organization', name: 'YYIT', url: 'https://yyit.nl' },
      inLanguage: 'nl',
    },
  ],
};

export default function NIS2MKBPage() {
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
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">NIS2 voor het MKB</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">Europese richtlijn — nu van kracht</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            NIS2 voor{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">het MKB</span>
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl">
            De NIS2-richtlijn verplicht steeds meer bedrijven tot aantoonbare cybersecurity-maatregelen.
            Bent u klaar voor NIS2?
          </p>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Boetes tot <strong className="text-white">€10 miljoen</strong> voor niet-naleving. Bestuurders persoonlijk aansprakelijk.
            YYIT helpt u aantoonbare stappen te zetten richting NIS2-compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              NIS2-scan aanvragen
            </a>
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl font-semibold text-lg transition-colors"
            >
              Bekijk NIS2-pakketten
            </a>
          </div>
        </div>
      </section>

      {/* Wat is NIS2 */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Wat is de NIS2-richtlijn?</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                NIS2 is de opvolger van de oorspronkelijke NIS-richtlijn uit 2016 en legt strengere eisen
                op aan cybersecurity voor bedrijven en organisaties in de EU. De richtlijn is in 2023
                van kracht geworden.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                NIS2 geldt primair voor middelgrote en grote organisaties in kritieke sectoren, maar raakt
                ook het MKB als toeleverancier of partner van NIS2-plichtige bedrijven.
              </p>
              <p className="text-slate-400 leading-relaxed">
                De richtlijn verplicht organisaties om concrete maatregelen te nemen, incidenten te melden
                en hierover te rapporteren aan de toezichthouder. Bestuurders zijn persoonlijk verantwoordelijk
                voor naleving.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/30 border border-amber-500/20 rounded-2xl p-6">
                <h3 className="text-amber-400 font-semibold mb-3">Valt uw bedrijf onder NIS2?</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  U valt mogelijk onder NIS2 als uw bedrijf:
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    '50+ medewerkers of €10M+ omzet heeft',
                    'Actief is in energie, transport, zorg, finance of ICT',
                    'Toeleverancier is van NIS2-plichtige organisaties',
                    'Digitale diensten levert (cloud, data, DNS)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-cyan-400 font-semibold mb-2">Niet zeker?</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Vraag een gratis NIS2-quickscan aan. YYIT bepaalt of uw bedrijf onder de richtlijn valt
                  en welke stappen nodig zijn.
                </p>
                <a href="https://yyit.nl/#cta" className="mt-3 inline-flex text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                  NIS2-scan aanvragen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verplichtingen */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            De NIS2-verplichtingen op een rij
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            NIS2 stelt concrete eisen aan uw cybersecurity-beleid, procedures en technische maatregelen.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {verplichtingen.map((v) => (
              <div key={v.art} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <div className="inline-flex px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs font-mono mb-3">
                  {v.art}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe YYIT helpt */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Hoe helpt YYIT u NIS2-compliant te worden?
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Van gap-analyse tot doorlopend compliant beheer — wij nemen het NIS2-traject van u over.
          </p>
          <div className="space-y-6">
            {[
              {
                stap: '1', title: 'NIS2 gap-analyse',
                desc: 'We brengen uw huidige beveiliging in kaart en bepalen wat ontbreekt ten opzichte van de NIS2-eisen.',
              },
              {
                stap: '2', title: 'Implementatieplan',
                desc: 'Op basis van de analyse stellen we een helder plan op met prioriteiten, kosten en tijdsplanning.',
              },
              {
                stap: '3', title: 'Technische implementatie',
                desc: 'We implementeren de vereiste beveiligingsmaatregelen: MFA, encryptie, monitoring, incident response, back-up.',
              },
              {
                stap: '4', title: 'Documentatie & beleid',
                desc: 'We stellen de vereiste documentatie op: beveiligingsbeleid, verwerkersovereenkomsten, risicoregisters en incidentprocedures.',
              },
              {
                stap: '5', title: 'Doorlopend compliant',
                desc: 'Na implementatie zorgen we dat u compliant blijft via periodieke reviews, rapportages en updates bij nieuwe regelgeving.',
              },
            ].map((s) => (
              <div key={s.stap} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">{s.stap}</span>
                </div>
                <div className="flex-1 pb-6 border-b border-slate-800 last:border-0">
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over NIS2 voor het MKB
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
      <section className="py-20 bg-gradient-to-r from-amber-900/10 to-cyan-900/20 border-y border-amber-500/10">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bent u klaar voor NIS2?</h2>
          <p className="text-slate-300 mb-8">
            Wacht niet tot de toezichthouder klopt. Vraag vandaag een gratis NIS2-quickscan aan en
            weet binnen een week waar u staat.
          </p>
          <a
            href="https://yyit.nl/#cta"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
          >
            Gratis NIS2-quickscan aanvragen →
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
              { href: '/cybersecurity-mkb', label: 'Cybersecurity MKB', desc: 'Bescherm uw bedrijf tegen cyberdreigingen' },
              { href: '/managed-it-services', label: 'Managed IT Services', desc: 'Proactief IT-beheer' },
              { href: '/it-beheer-uitbesteden', label: 'IT-beheer uitbesteden', desc: 'Alles over het uitbesteden van uw IT' },
              { href: '/werkplekbeheer', label: 'Werkplekbeheer', desc: 'Beheer van laptops en werkplekken' },
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
