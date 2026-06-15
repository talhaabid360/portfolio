import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Services from './sections/Services';
import ParallaxSection from './sections/ParallaxSection';
import Publications from './sections/Publications';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as any);
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Expertise />
      <div
        className="w-full flex items-center justify-center"
        style={{ height: 200, backgroundColor: '#F5F0EB' }}
      >
        <div
          className="w-[80%] h-[1px]"
          style={{ backgroundColor: 'rgba(43,43,43,0.08)' }}
        />
      </div>
      <Services />
      <ParallaxSection
        imageSrc="/parallax-1.jpg"
        caption="Every great research journey begins with a single question"
      />
      <Publications />
      <Testimonials />
      <ParallaxSection
        imageSrc="/parallax-2.jpg"
        caption="Knowledge is the foundation upon which all success is built"
      />
      <Contact />
      <Footer />
    </div>
  );
}
