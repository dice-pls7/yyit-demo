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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
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
