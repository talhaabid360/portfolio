import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Users, BookOpen, MessageCircle, Scale, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    icon: Brain,
    title: 'Psychology',
    topics: ['Lifespan Human Development', 'Social Psychology', 'Personality Theories', 'Learning & Cognition', 'Research Methods', 'Statistical Reasoning', 'Diversity & Cultural Psychology'],
  },
  {
    icon: Users,
    title: 'Sociology & Social Sciences',
    topics: ['Introduction to Sociology', 'Technology & Society', 'Social Media & Human Interaction', 'Digital Learning', 'Media Influence on Behavior', 'Multicultural & Social Issues'],
  },
  {
    icon: BookOpen,
    title: 'English Literature',
    topics: ['Literary Theory & Criticism', 'Poetry Analysis', 'Drama & Fiction Studies', 'Comparative Literature', 'Postcolonial Literature', 'Modern & Contemporary Literature'],
  },
  {
    icon: MessageCircle,
    title: 'Linguistics',
    topics: ['Sociolinguistics', 'Applied Linguistics', 'Discourse Analysis', 'Pragmatics', 'Semantics', 'Syntax', 'Phonetics & Phonology', 'Second Language Acquisition'],
  },
  {
    icon: Scale,
    title: 'Criminal Justice',
    topics: ['Introduction to Criminal Justice', 'American National Government', 'Legal Theory', 'Policy Analysis'],
  },
  {
    icon: Cpu,
    title: 'Engineering & Business',
    topics: ['Theory-based Engineering courses', 'Business Research', 'Economics Analysis', 'Research Papers & Case Studies'],
  },
];

export default function Expertise() {
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
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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
      id="expertise"
      ref={sectionRef}
      className="py-[120px] px-5 md:px-10"
      style={{ backgroundColor: '#2B2B2B' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            AREAS OF EXPERTISE
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-white leading-[1.15] tracking-[-0.02em] mt-4">
            Disciplines I Serve
          </h2>
          <p className="font-body text-[17px] text-[rgba(255,255,255,0.55)] max-w-[500px] mx-auto mt-4">
            Theory-based academic support across the social sciences and humanities
          </p>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl p-8 md:p-10 transition-all duration-[400ms]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(160,125,90,0.4)';
                  e.currentTarget.style.background = 'rgba(160,125,90,0.06)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={48} className="text-bronze mb-5" strokeWidth={1.5} />
                <h3 className="font-display text-[24px] font-medium text-white mb-3">
                  {item.title}
                </h3>
                <ul className="flex flex-col gap-1">
                  {item.topics.map((topic) => (
                    <li
                      key={topic}
                      className="font-body text-[14px] text-[rgba(255,255,255,0.4)] leading-[1.6]"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-[60px]">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block font-body text-[14px] uppercase tracking-[0.06em] text-white border border-[rgba(255,255,255,0.3)] rounded-[30px] px-9 py-[14px] hover:bg-white hover:text-charcoal transition-all duration-[400ms]"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
