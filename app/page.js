import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
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
      <Pricing />
      <ComparisonTable />
      <Solutions />
      <About />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
