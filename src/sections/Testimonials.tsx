import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Palwasha's guidance transformed my approach to academic writing. Her feedback on my dissertation was invaluable — she didn't just edit my work, she taught me how to think critically about research.",
    name: 'Student',
    role: 'Psychology Graduate',
  },
  {
    quote: "Working with Palwasha on my literature review was a game-changer. Her expertise in sociolinguistics helped me develop a framework I never would have found on my own.",
    name: 'Student',
    role: 'MPhil Linguistics',
  },
  {
    quote: "As an international student, I struggled with academic English. Palwasha's patient coaching improved my writing confidence and helped me achieve top marks.",
    name: 'Student',
    role: 'Sociology',
  },
  {
    quote: "Her interdisciplinary knowledge is remarkable. She helped me connect literary theory with cultural psychology in ways that made my research truly original.",
    name: 'Student',
    role: 'English Literature',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    if (!section || !header || !cards) return;

    const ctx = gsap.context(() => {
      gsap.from(header, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(cards.children, {
        x: 60,
        opacity: 0,
        duration: 1.0,
        stagger: 0.2,
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
      id="testimonials"
      ref={sectionRef}
      className="py-[120px] px-5 md:px-10"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-[60px]">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-charcoal leading-[1.15] tracking-[-0.02em] mt-4">
            What Students Say
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-10"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 2px 20px rgba(43,43,43,0.04)',
              }}
            >
              {/* Decorative quote */}
              <span
                className="font-display absolute top-4 left-6"
                style={{
                  fontSize: 80,
                  color: 'rgba(160,125,90,0.15)',
                  lineHeight: 1,
                }}
              >
                "
              </span>
              <p className="font-display italic text-[18px] md:text-[20px] text-charcoal leading-[1.5] relative z-[1] mt-6">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="font-body text-[14px] font-medium text-charcoal">
                  {t.name}
                </p>
                <p className="font-body text-[14px] text-graytext">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
