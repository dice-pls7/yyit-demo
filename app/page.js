import Header from '../components/Header';
import Hero from '../components/Hero';
import SecurityRealitySection from '../components/SecurityRealitySection';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import EmailCapture from '../components/EmailCapture';
import Solutions from '../components/Solutions';
import About from '../components/About';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'IT-beheer & Cybersecurity voor het MKB | YYIT',
  description:
    'YYIT levert professioneel IT-beheer en cybersecurity voor MKB-bedrijven. Werkplekbeheer, 24/7 monitoring, NIS2-compliance en managed IT services. Vaste maandprijzen vanaf €14,95.',
  alternates: {
    canonical: 'https://yyit.nl',
  },
  openGraph: {
    title: 'IT-beheer & Cybersecurity voor het MKB | YYIT',
    description:
      'Professioneel IT-beheer en cybersecurity voor MKB-bedrijven. Werkplekbeheer, 24/7 monitoring en NIS2-compliance. Vaste maandprijzen vanaf €14,95.',
    url: 'https://yyit.nl',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://yyit.nl/#organization',
      name: 'YYIT',
      url: 'https://yyit.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yyit.nl/Favicon.svg',
      },
      description:
        'YYIT levert professioneel IT-beheer en cybersecurity voor het MKB. Werkplekbeheer, 24/7 monitoring en NIS2-compliance.',
      areaServed: 'NL',
      knowsAbout: ['IT-beheer', 'Cybersecurity', 'Managed IT Services', 'NIS2', 'Werkplekbeheer'],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yyit.nl/#website',
      url: 'https://yyit.nl',
      name: 'YYIT',
      publisher: { '@id': 'https://yyit.nl/#organization' },
      inLanguage: 'nl-NL',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://yyit.nl/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://yyit.nl/#localbusiness',
      name: 'YYIT',
      url: 'https://yyit.nl',
      image: 'https://yyit.nl/Favicon.svg',
      description:
        'Professioneel IT-beheer en cybersecurity voor MKB-bedrijven in Nederland.',
      priceRange: '€€',
      areaServed: {
        '@type': 'Country',
        name: 'Netherlands',
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <SecurityRealitySection />
      <Solutions />
      <Pricing />
      <ComparisonTable />
      <EmailCapture />
      <About />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
