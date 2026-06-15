import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Clock, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'palwasha@academicconsultant.com',
  },
  {
    icon: Clock,
    label: 'AVAILABILITY',
    value: 'Monday — Saturday, 9:00 AM — 6:00 PM',
  },
  {
    icon: Globe,
    label: 'LOCATION',
    value: 'Remote — Worldwide',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const items = itemsRef.current;
    if (!section || !header || !items) return;

    const ctx = gsap.context(() => {
      gsap.from(header, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(items.children, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-[120px] px-5 md:px-10 relative z-[1]"
      style={{
        backgroundColor: '#2B2B2B',
        marginBottom: 400,
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-[60px]">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-white leading-[1.15] tracking-[-0.02em] mt-4">
            Ready to Begin?
          </h2>
          <p className="font-body text-[17px] text-[rgba(255,255,255,0.5)] max-w-[500px] mx-auto mt-4">
            Whether you need support with a research project, dissertation guidance, or academic writing coaching — I'm here to help you succeed.
          </p>
        </div>

        {/* Contact grid */}
        <div
          ref={itemsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto"
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-3">
                <Icon size={32} className="text-bronze" strokeWidth={1.5} />
                <span className="font-body text-[13px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.4)]">
                  {item.label}
                </span>
                <span className="font-body text-[16px] text-white">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-[60px]">
          <button
            onClick={() => {
              window.location.href = 'mailto:zainab@academicconsultant.com';
            }}
            className="font-body text-[15px] uppercase tracking-[0.06em] text-white rounded-[30px] px-12 py-4 transition-colors duration-300 hover:bg-[#8B6B4A]"
            style={{ backgroundColor: '#A07D5A' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
