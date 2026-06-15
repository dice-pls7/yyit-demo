import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Managed IT Services | Proactief IT-beheer voor bedrijven | YYIT',
  description:
    'Managed IT Services van YYIT: proactief beheer, 24/7 monitoring, vaste maandprijzen. Geen reactief IT, maar preventief IT-beheer dat storingen voorkomt.',
  keywords: ['managed IT services', 'managed service provider Nederland', 'MSP MKB', 'proactief IT-beheer'],
  alternates: { canonical: 'https://yyit.nl/managed-it-services' },
  openGraph: {
    title: 'Managed IT Services | YYIT',
    description: 'Proactief IT-beheer met 24/7 monitoring en vaste maandprijzen.',
    url: 'https://yyit.nl/managed-it-services',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat zijn Managed IT Services?',
    answer:
      'Managed IT Services is een model waarbij een externe partij (Managed Service Provider of MSP) de volledige verantwoordelijkheid voor uw IT-omgeving overneemt voor een vaste maandprijs. Dit omvat proactief beheer, monitoring, updates, beveiliging en ondersteuning.',
  },
  {
    question: 'Wat is het verschil tussen Managed IT Services en break-fix IT?',
    answer:
      'Bij het traditionele break-fix model betaalt u een IT-bedrijf pas als er iets kapot is. Bij Managed IT Services betaalt u een vast bedrag en wordt alles proactief beheerd — zodat er zo min mogelijk kapot gaat. Dat levert op de lange termijn een hogere uptime en lagere kosten op.',
  },
  {
    question: 'Welke SLA hanteert YYIT bij Managed IT Services?',
    answer:
      'YYIT hanteert gegarandeerde SLA\'s afhankelijk van het pakket. Kritieke storingen worden binnen 1 uur opgepakt, standaard verzoeken binnen 4 uur op werkdagen. Alle afspraken worden vastgelegd in een Service Level Agreement.',
  },
  {
    question: 'Beheert YYIT ook cloud-omgevingen zoals Microsoft 365?',
    answer:
      'Ja. YYIT beheert Microsoft 365, Azure, Google Workspace en andere cloudplatforms. We richten in, beheren rechten, bewaken beveiliging en zorgen voor updates.',
  },
  {
    question: 'Kan ik kiezen welke IT-taken ik uitbesteed en welke ik zelf hou?',
    answer:
      'Absoluut. YYIT biedt co-managed IT-services waarbij we samenwerken met uw interne IT-medewerker of -afdeling. U bepaalt welke taken wij overnemen.',
  },
];

const diensten = [
  { icon: '📊', title: '24/7 RMM Monitoring', desc: 'Remote monitoring en management van alle systemen. Problemen worden gesignaleerd vóórdat u er last van hebt.' },
  { icon: '🔧', title: 'Patch management', desc: 'Automatische updates voor alle besturingssystemen en applicaties. Geen verouderde software, geen beveiligingsgaten.' },
  { icon: '🛡️', title: 'Endpoint security', desc: 'Geavanceerde beveiliging op alle apparaten: laptops, desktops en mobiele apparaten.' },
  { icon: '☁️', title: 'Cloud management', desc: 'Beheer van Microsoft 365, Azure en andere cloudplatforms. Inclusief licenties, rechten en beveiliging.' },
  { icon: '💾', title: 'Back-up & herstel', desc: 'Dagelijkse geautomatiseerde back-ups met gegarandeerde hersteltijden. Uw data is altijd veilig.' },
  { icon: '🎧', title: 'Helpdesk', desc: 'Directe ondersteuning voor uw medewerkers via telefoon, chat of e-mail. Snelle en deskundige hulp.' },
  { icon: '📋', title: 'Rapportage', desc: 'Maandelijkse rapportages over de staat van uw IT: uptime, incidenten en verbeterpunten.' },
  { icon: '🔄', title: 'Lifecycle management', desc: 'Advies over vervanging en vernieuwing van hardware. Nooit te oud apparatuur in gebruik.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'Managed IT Services', item: 'https://yyit.nl/managed-it-services' },
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

export default function ManagedITServicesPage() {
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
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Managed IT Services</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Managed IT Services:{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              proactief IT-beheer
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Geen reactief IT meer. Met Managed IT Services van YYIT wordt uw volledige IT-omgeving
            24/7 gemonitord en proactief beheerd — voor een vaste maandprijs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              Bekijk onze MSP-pakketten
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

      {/* Break-fix vs MSP */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Van break-fix naar proactief beheer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 border border-rose-500/20 rounded-2xl p-8">
              <div className="text-rose-400 font-semibold text-sm uppercase tracking-wider mb-4">❌ Traditioneel (break-fix)</div>
              <ul className="space-y-3 text-slate-400">
                {[
                  'U betaalt alleen als er iets kapot is',
                  'IT-bedrijf reageert pas na een storing',
                  'Onduidelijke kosten per incident',
                  'Geen inzicht in de staat van uw IT',
                  'Updates worden uitgesteld of overgeslagen',
                  'Geen structurele beveiliging',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-8">
              <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">✓ Managed IT Services (YYIT)</div>
              <ul className="space-y-3 text-slate-300">
                {[
                  'Vaste maandprijs, geen verrassingen',
                  '24/7 proactieve monitoring',
                  'Problemen opgelost vóórdat u ze merkt',
                  'Maandelijkse rapportages en inzicht',
                  'Automatische patch management',
                  'Ingebouwde cybersecurity',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Wat is inbegrepen?</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Onze Managed IT Services bestaan uit een volledig pakket aan diensten die uw IT-omgeving
            soepel en veilig laten werken.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {diensten.map((d) => (
              <div key={d.title} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-white font-semibold mb-2">{d.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Gegarandeerde responstijden (SLA)</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { type: 'Kritiek', time: '< 1 uur', desc: 'Volledige uitval of beveiligingsincident' },
              { type: 'Hoog', time: '< 4 uur', desc: 'Significante verstoring van werkprocessen' },
              { type: 'Normaal', time: '< 1 werkdag', desc: 'Vragen en kleine storingen' },
            ].map((sla) => (
              <div key={sla.type} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <div className="text-slate-400 text-sm mb-2">{sla.type}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{sla.time}</div>
                <div className="text-slate-500 text-sm">{sla.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over Managed IT Services
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
          <h2 className="text-3xl font-bold text-white mb-4">Overstappen op Managed IT Services?</h2>
          <p className="text-slate-300 mb-8">
            Meer uptime, betere beveiliging en lagere kosten. Vraag vandaag nog een vrijblijvend gesprek aan.
          </p>
          <a
            href="https://yyit.nl/#cta"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
          >
            Gesprek aanvragen →
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
