import { useRef } from 'react';
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

import Hours from '@/components/Hours';
import useScrollSpy from 'react-use-scrollspy';

export default function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -300,
  });
  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero id="hero" innerRef={sectionRefs[0]} />
      <About id="about" innerRef={sectionRefs[1]} />
      <Workflow />
      <Services id="whatwedo" innerRef={sectionRefs[2]} />
      <Carousel id="reviews" innerRef={sectionRefs[3]} />
      <Pricing />
      <FAQs id="faqs" innerRef={sectionRefs[4]} />
      <Hours />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
