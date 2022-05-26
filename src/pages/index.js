import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Workflow from '@/components/Workflow';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Carousel from '@/components/Carousel';
import FAQs from '@/components/FAQs';
import Pricing from '@/components/Pricing';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Workflow />
      <About />
      <Services />
      <Carousel />
      <FAQs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
