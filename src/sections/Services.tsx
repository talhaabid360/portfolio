import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: 'Academic Research Support',
    items: ['Research Proposals', 'Literature Reviews', 'Research Papers & Dissertations', 'Case Studies', 'Annotated Bibliographies', 'Academic Presentations'],
  },
  {
    title: 'Dissertation & Thesis Assistance',
    items: ['Topic Selection', 'Proposal Development', 'Chapter Writing Support', 'Literature Review Development', 'Methodology Guidance', 'Editing & Proofreading'],
  },
  {
    title: 'English Language Support',
    items: ['Academic Writing Coaching', 'Grammar & Language Improvement', 'Essay Writing Skills', 'Research Writing Skills', 'Proofreading & Editing', 'IELTS & Academic English Support'],
  },
  {
    title: 'Publication Support',
    items: ['Journal Article Preparation', 'Formatting & Referencing (APA, MLA, Harvard, Chicago)', 'Manuscript Editing', 'Journal Selection Guidance'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !header || !left || !right) return;

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

      gsap.from(left, {
        x: -50,
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
        duration: 0.8,
        stagger: 0.1,
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
      id="services"
      ref={sectionRef}
      className="py-[120px] px-5 md:px-10"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            SERVICES
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-charcoal leading-[1.15] tracking-[-0.02em] mt-4">
            How I Can Help You
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Left column - sticky */}
          <div ref={leftRef} className="w-full md:w-1/2 md:sticky md:top-[120px] md:self-start">
            <img
              src="/services-portrait.jpg"
              alt="Research workspace"
              className="w-full max-w-[400px] h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <blockquote className="font-display italic text-[20px] md:text-[24px] text-bronze mt-8 leading-[1.5] max-w-[400px]">
              "My goal is to help students develop stronger academic skills and achieve success through research-based guidance." — Palwasha Saeed
            </blockquote>
          </div>

          {/* Right column - accordion */}
          <div ref={rightRef} className="w-full md:w-1/2">
            {servicesData.map((service, index) => (
              <div
                key={service.title}
                className="border-b border-[rgba(43,43,43,0.1)]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-7 group text-left"
                >
                  <span className={`font-display text-[22px] transition-colors duration-300 ${
                    openIndex === index ? 'text-bronze' : 'text-charcoal group-hover:text-bronze'
                  }`}>
                    {service.title}
                  </span>
                  {openIndex === index ? (
                    <Minus size={20} className="text-bronze flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-bronze flex-shrink-0" />
                  )}
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '400px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="pb-7">
                    <ul className="flex flex-col gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="font-body text-[15px] text-graytext leading-[1.6] flex items-start gap-2"
                        >
                          <span className="text-bronze mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
