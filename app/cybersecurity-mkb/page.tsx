import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Cybersecurity MKB | Bescherm uw bedrijf tegen cyberdreigingen | YYIT',
  description:
    'Cybersecurity voor het MKB: YYIT beschermt uw bedrijf met professionele beveiliging, 24/7 monitoring en NIS2-compliance. Voorkom ransomware, phishing en datalekken.',
  keywords: ['cybersecurity MKB', 'cyberbeveiliging bedrijf', 'ransomware bescherming MKB', 'NIS2 beveiliging'],
  alternates: { canonical: 'https://yyit.nl/cybersecurity-mkb' },
  openGraph: {
    title: 'Cybersecurity MKB | YYIT',
    description: 'Bescherm uw MKB-bedrijf met professionele cybersecurity van YYIT.',
    url: 'https://yyit.nl/cybersecurity-mkb',
    siteName: 'YYIT',
    locale: 'nl_NL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Waarom is cybersecurity belangrijk voor het MKB?',
    answer:
      'MKB-bedrijven zijn steeds vaker doelwit van cybercriminelen, juist omdat ze minder goed beveiligd zijn dan grote ondernemingen. 43% van alle cyberaanvallen richt zich op het MKB. De gemiddelde schade bij een ransomware-aanval bedraagt €200.000.',
  },
  {
    question: 'Wat doet YYIT aan cybersecurity?',
    answer:
      'YYIT biedt een gelaagde beveiligingsstrategie: endpoint protection, e-mailbeveiliging, netwerkfirewall, 24/7 security monitoring (SIEM), patch management, multi-factor authenticatie en medewerkerstraining.',
  },
  {
    question: 'Voldoet YYIT aan de NIS2-richtlijn?',
    answer:
      'Ja. Onze dienstverlening is afgestemd op de NIS2-richtlijn. We helpen u met een risicoanalyse, het implementeren van de vereiste beveiligingsmaatregelen en de rapportageverplichtingen.',
  },
  {
    question: 'Hoe snel merken we een aanval op?',
    answer:
      'Onze 24/7 security monitoring detecteert verdachte activiteiten binnen minuten. Bij een bevestigd incident reageren we direct en activeren ons incident response plan om schade te beperken.',
  },
  {
    question: 'Wat kost cybersecurity voor het MKB?',
    answer:
      'Cybersecurity is inbegrepen in onze Professioneel en Enterprise pakketten (vanaf €29,95 per werkplek per maand). Een losse beveiligingsscan is beschikbaar vanaf €299.',
  },
];

const dreigingen = [
  { icon: '🎣', name: 'Phishing', desc: 'Nep-e-mails waarmee criminelen uw inloggegevens of betaalinformatie stelen.' },
  { icon: '🔒', name: 'Ransomware', desc: 'Kwaadaardige software die uw bestanden versleutelt en losgeld eist.' },
  { icon: '🔓', name: 'Datalekken', desc: 'Ongeautoriseerde toegang tot klant- of bedrijfsdata met grote gevolgen.' },
  { icon: '🦠', name: 'Malware', desc: 'Schadelijke software die uw systemen beschadigt of bespionneert.' },
  { icon: '📧', name: 'BEC-fraude', desc: 'CEO-fraude via valse e-mails die medewerkers misleiden om geld over te maken.' },
  { icon: '⚡', name: 'DDoS-aanvallen', desc: 'Overbelasting van uw systemen waardoor diensten onbereikbaar worden.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yyit.nl' },
        { '@type': 'ListItem', position: 2, name: 'Cybersecurity MKB', item: 'https://yyit.nl/cybersecurity-mkb' },
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

export default function CybersecurityMKBPage() {
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
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li className="text-slate-700">/</li>
              <li className="text-slate-300">Cybersecurity MKB</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
            <span className="text-rose-300 text-sm font-medium">43% van cyberaanvallen treft het MKB</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Cybersecurity voor{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">het MKB</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Cybercriminelen richten zich steeds vaker op MKB-bedrijven. YYIT beschermt uw digitale omgeving
            met meerdere beveiligingslagen, 24/7 monitoring en volledige NIS2-compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://yyit.nl/#cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
            >
              Gratis beveiligingsscan aanvragen
            </a>
            <a
              href="https://yyit.nl/#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border border-slate-700 hover:border-cyan-500/50 rounded-xl font-semibold text-lg transition-colors"
            >
              Bekijk beveiligingspakketten
            </a>
          </div>
        </div>
      </section>

      {/* Dreigingen */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            De grootste cyberdreigingen voor het MKB
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Cybercriminelen worden slimmer. Dit zijn de meest voorkomende dreigingen waartegen YYIT u beschermt.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dreigingen.map((d) => (
              <div key={d.name} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{d.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Onze gelaagde beveiligingsaanpak
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Goede cybersecurity bestaat niet uit één maatregel. YYIT hanteert een defense-in-depth strategie:
                meerdere beveiligingslagen die elkaar versterken, zodat een aanvaller nooit ver genoeg komt.
              </p>
              <div className="space-y-4">
                {[
                  { layer: 'Laag 1', title: 'Endpoint protection', desc: 'Geavanceerde antivirus en EDR op alle apparaten.' },
                  { layer: 'Laag 2', title: 'E-mailbeveiliging', desc: 'Spam, phishing en malware worden gefilterd vóór levering.' },
                  { layer: 'Laag 3', title: 'Netwerkfirewall', desc: 'Inkomend en uitgaand verkeer wordt continu gemonitord.' },
                  { layer: 'Laag 4', title: '24/7 SIEM monitoring', desc: 'Verdachte activiteiten worden direct gedetecteerd.' },
                  { layer: 'Laag 5', title: 'Multi-factor authenticatie', desc: 'Extra beveiligingslaag voor alle accounts.' },
                  { layer: 'Laag 6', title: 'Security awareness training', desc: 'Uw medewerkers leren dreigingen herkennen.' },
                ].map((l) => (
                  <div key={l.layer} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs font-mono">
                      {l.layer}
                    </div>
                    <div>
                      <span className="text-white font-medium">{l.title}: </span>
                      <span className="text-slate-400 text-sm">{l.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NIS2 blok */}
            <div className="bg-gradient-to-b from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-white font-bold text-2xl mb-4">NIS2 en het MKB</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                De NIS2-richtlijn verplicht steeds meer MKB-bedrijven tot het nemen van aantoonbare
                cybersecurity-maatregelen. Niet-naleving kan leiden tot boetes tot <strong className="text-white">€10 miljoen</strong> of 2% van de jaaromzet.
              </p>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                YYIT helpt u bij het uitvoeren van een risicoanalyse, implementeren van de vereiste maatregelen
                en het opstellen van documentatie voor audits.
              </p>
              <Link
                href="/nis2-mkb"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Meer over NIS2 voor het MKB →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistieken */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '43%', label: 'van cyberaanvallen richt zich op het MKB' },
              { stat: '€200K', label: 'gemiddelde schade per ransomware-aanval' },
              { stat: '60%', label: 'van MKB\'ers stopt na ernstig cyberincident' },
              { stat: '24/7', label: 'security monitoring door YYIT' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{s.stat}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over cybersecurity voor het MKB
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
      <section className="py-20 bg-gradient-to-r from-rose-900/20 to-slate-900/20 border-y border-rose-500/10">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Is uw bedrijf goed beveiligd?</h2>
          <p className="text-slate-300 mb-8">
            Vraag een gratis beveiligingsscan aan. Wij analyseren uw huidige beveiliging en tonen
            de concrete risico&#39;s voor uw bedrijf.
          </p>
          <a
            href="https://yyit.nl/#cta"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
          >
            Gratis beveiligingsscan →
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
