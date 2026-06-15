import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  'MPhil Linguistics',
  '2x Published Researcher',
  '8+ Years Experience',
  'International Students',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      gsap.from(left, {
        x: -60,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(right.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-[120px] px-5 md:px-10"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-[5%]">
        {/* Left column */}
        <div ref={leftRef} className="w-full md:w-[40%]">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            ABOUT
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-charcoal leading-[1.15] tracking-[-0.02em] mt-4">
            Bridging Scholarship &amp; Student Success
          </h2>
          <div
            className="w-full mt-8 mb-8"
            style={{ height: 1, backgroundColor: 'rgba(43,43,43,0.1)' }}
          />
          <img
            src="/about-portrait.jpg"
            alt="Palwasha Saeed working in her study"
            className="w-full max-w-[400px] h-[400px] md:h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Right column */}
        <div ref={rightRef} className="w-full md:w-[55%] flex flex-col gap-6">
          <p className="font-body text-[20px] leading-[1.6] text-graytext">
            With an MPhil in Linguistics and two published research articles in HEC-recognized Y-category journals, I bring deep scholarly expertise to every project I undertake. My interdisciplinary background spans Psychology, Sociology, English Literature, and beyond — enabling me to support students across diverse theory-based disciplines.
          </p>
          <p className="font-body text-[17px] leading-[1.7] text-graytext tracking-[0.01em]">
            Over the past 8 years, I have guided international students through research proposals, dissertations, literature reviews, and scholarly publications. My approach combines rigorous academic standards with compassionate, student-centered guidance — helping learners not just complete assignments, but develop lasting research and writing skills.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {credentials.map((cred) => (
              <span
                key={cred}
                className="font-body text-[13px] text-charcoal border border-[rgba(43,43,43,0.15)] rounded-[20px] px-5 py-2"
              >
                {cred}
              </span>
            ))}
          </div>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-body text-[14px] uppercase tracking-[0.06em] text-charcoal mt-4 inline-flex items-center gap-2 group"
          >
            Learn More About My Work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
