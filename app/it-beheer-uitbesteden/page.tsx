import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'IT-beheer uitbesteden | Voordelen, kosten en stappenplan | YYIT',
  description:
    'IT-beheer uitbesteden aan YYIT: lagere kosten, hogere beveiliging, geen eigen IT-personeel nodig. Ontdek de voordelen en hoe de overstap werkt.',
  keywords: ['IT-beheer uitbesteden', 'IT uitbesteden MKB', 'externe IT beheer', 'IT outsourcing Nederland'],
  alternates: { canonical: 'https://yyit.nl/it-beheer-uitbesteden' },
  openGraph: {
    title: 'IT-beheer uitbesteden | YYIT',
    description: 'Ontdek waarom steeds meer MKB-bedrijven hun IT uitbesteden aan YYIT.',
    url: 'https://yyit.nl/it-beheer-uitbesteden',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat houdt IT-beheer uitbesteden in?',
    answer:
      'Bij het uitbesteden van IT-beheer neemt een externe partij zoals YYIT de volledige verantwoordelijkheid over uw IT-omgeving. Dit omvat beheer van werkplekken, netwerk, beveiliging, updates, back-ups en helpdesk — alles voor een vaste maandprijs.',
  },
  {
    question: 'Is IT-beheer uitbesteden goedkoper dan een eigen IT-medewerker?',
    answer:
      'In de meeste gevallen wel. Een eigen IT-medewerker kost al snel €40.000–€60.000 per jaar (inclusief werkgeverslasten), is beperkt in kennis en is er niet 24/7. YYIT biedt een compleet team van specialisten voor een fractie van die kosten.',
  },
  {
    question: 'Wat als er iets misgaat tijdens de overstap?',
    answer:
      'YYIT hanteert een gestructureerd onboardingproces van 30 dagen waarbij we parallel aan uw huidige situatie werken. We documenteren alles en gaan pas volledig over na uw goedkeuring. Risico op verstoringen is minimaal.',
  },
  {
    question: 'Kan ik een lopend contract met een andere IT-leverancier overdragen?',
    answer:
      'Ja. YYIT helpt bij de overdracht van contracten en systemen van uw huidige IT-leverancier. Wij nemen het contact met de bestaande partij over en zorgen voor een soepele overgang.',
  },
  {
    question: 'Hoe snel kan ik starten met uitbesteden?',
    answer:
      'Na ondertekening van het contract start YYIT binnen 5 werkdagen met de onboarding. De volledige overstap duurt gemiddeld 2–4 weken afhankelijk van de omvang van uw IT-omgeving.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'IT-beheer uitbesteden', item: 'https://yyit.nl/it-beheer-uitbesteden' },
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

const stappenplan = [
  { stap: '01', title: 'Vrijblijvend adviesgesprek', desc: 'We bespreken uw huidige IT-situatie, wensen en uitdagingen. Geen verplichtingen.' },
  { stap: '02', title: 'IT-inventarisatie', desc: 'Onze technicians brengen uw volledige IT-omgeving in kaart: hardware, software, netwerk en beveiliging.' },
  { stap: '03', title: 'Voorstel op maat', desc: 'U ontvangt een helder voorstel met vaste maandprijzen, SLA en wat er precies wordt beheerd.' },
  { stap: '04', title: 'Onboarding (30 dagen)', desc: 'Parallel aan uw huidige situatie richten we alles in, documenteren we en trainen we uw medewerkers.' },
  { stap: '05', title: 'Live gaan', desc: 'YYIT neemt het volledig over. U profiteert vanaf dag één van proactief beheer en 24/7 monitoring.' },
];

export default function ITBeheerUitbesthedenPage() {
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">IT-beheer uitbesteden</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            IT-beheer{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">uitbesteden</span>
            :<br />zo werkt het
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Steeds meer MKB-bedrijven kiezen ervoor hun IT uit te besteden. Geen eigen IT-medewerker nodig,
            lagere kosten en betere beveiliging — met YYIT als vaste IT-partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              Gratis adviesgesprek aanvragen
            </a>
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl font-semibold text-lg transition-colors"
            >
              Bekijk pakketten
            </a>
          </div>
        </div>
      </section>

      {/* Vergelijking eigen IT vs uitbesteden */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Eigen IT-medewerker vs. uitbesteden aan YYIT
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Een eerlijke vergelijking tussen intern IT-personeel en een managed service provider.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-slate-400 font-medium w-1/3">Aspect</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-medium">Eigen IT-medewerker</th>
                  <th className="text-center py-4 px-6 text-cyan-400 font-medium">YYIT (uitbesteden)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  ['Kosten', '€40.000–€60.000/jaar', '€14,95–€49,95/werkplek/maand'],
                  ['Beschikbaarheid', 'Kantooruren', '24/7 monitoring'],
                  ['Breedte kennis', 'Beperkt (1 persoon)', 'Volledig IT-team'],
                  ['Ziekte / vakantie', 'Risico op gat in dienstverlening', 'Altijd gedekt'],
                  ['NIS2-compliance', 'Extra expertise vereist', 'Inbegrepen'],
                  ['Schaalbaarheid', 'Nieuwe werving nodig', 'Direct schaalbaar'],
                ].map(([aspect, eigen, yyit]) => (
                  <tr key={aspect} className="hover:bg-slate-800/30">
                    <td className="py-4 px-6 text-white font-medium">{aspect}</td>
                    <td className="py-4 px-6 text-slate-400 text-center">{eigen}</td>
                    <td className="py-4 px-6 text-cyan-400 text-center font-medium">{yyit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stappenplan */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Zo gaat de overstap in zijn werk
          </h2>
          <p className="text-slate-400 text-center mb-12">
            Van eerste gesprek tot volledig beheer in gemiddeld 2–4 weken.
          </p>
          <div className="space-y-6">
            {stappenplan.map((stap, i) => (
              <div key={stap.stap} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-lg">{stap.stap}</span>
                </div>
                <div className="flex-1 pb-6 border-b border-slate-800 last:border-0">
                  <h3 className="text-white font-semibold text-lg mb-2">{stap.title}</h3>
                  <p className="text-slate-400">{stap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over IT-beheer uitbesteden
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
          <h2 className="text-3xl font-bold text-white mb-4">Klaar om uw IT uit te besteden?</h2>
          <p className="text-slate-300 mb-8">
            Plan een vrijblijvend adviesgesprek. Wij analyseren uw huidige IT-situatie en presenteren een helder voorstel.
          </p>
          <a
            href="https://yyit.nl/#cta"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
          >
            Adviesgesprek aanvragen →
          </a>
        </div>
      </section>

      {/* Gerelateerde pagina's */}
      <section className="py-16 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-400 mb-8">Meer over onze diensten</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/it-beheer-mkb', label: 'IT-beheer MKB', desc: 'Professioneel IT-beheer voor het MKB' },
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
