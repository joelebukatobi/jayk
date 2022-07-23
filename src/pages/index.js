import { useRef } from 'react';
import Head from 'next/head';
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
import Message from '@/components/Message';

export default function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -300,
  });
  return (
    <>
      <Head>
        <title>JayK Academy</title>
        <meta
          name="description"
          content="Jayk Academy is a private research Consultancy firm that specializes in academic research writing and has other subsidiaries which help promote vocational and skill acquisition training."
        />
        <meta property="og:title" content="Jayk Academy" />
        <meta
          property="og:description"
          content="Jayk Academy is a private research Consultancy firm that specializes in academic research writing and has other subsidiaries which help promote vocational and skill acquisition training."
        />
        <meta property="og:url" content="https://jaykacademy.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="research, thesis, paper, dissertation, writing, publication, editing, proof reading, academic research, academic research training, academic research consultation, hire a writer, project writing, thesis research analysis, dissertation research analysis, professional research, research analysis, skills acquisition, research requirements, research paper, research topic, graduate topic, graduate paper, graduate dissertation, graduate thesis, phd topics, phd thesis, phd coursework, phd dissertation, phd research, phd paper, phd course work, seminar project, seminar paper, project paper, project coursework"
        />
      </Head>
      <Navbar activeSection={activeSection} />
      <Hero id="hero" innerRef={sectionRefs[0]} />
      <About id="about" innerRef={sectionRefs[1]} />
      <Workflow />
      <Services id="whatwedo" innerRef={sectionRefs[2]} />
      <Carousel id="reviews" innerRef={sectionRefs[3]} />
      <FAQs id="faqs" innerRef={sectionRefs[4]} />
      <Hours />
      <Contact id="contact" />
      <Footer />
      <Message />
    </>
  );
}
