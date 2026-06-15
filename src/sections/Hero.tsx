import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cornerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Typewriter effect
  useEffect(() => {
    const typewriter = typewriterRef.current;
    if (!typewriter) return;

    const words = ['Psychology', 'Sociology', 'Linguistics', 'Literature', 'Criminal Justice'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = words[wordIndex];
      typewriter.textContent = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      let typeSpeed = isDeleting ? 80 : 150;

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Entrance animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(headlineRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out',
      delay: 0.2,
    });

    tl.from(
      typewriterRef.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      0.6
    );

    tl.from(
      descRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      0.8
    );

    tl.from(
      ctaRef.current,
      {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      1.0
    );

    tl.from(
      cardRef.current,
      {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
      1.2
    );

    tl.from(
      imageRef.current,
      {
        scale: 1.15,
        duration: 1.6,
        ease: 'power3.out',
      },
      1.4
    );

    tl.from(
      cornerRefs.current.filter(Boolean),
      {
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      },
      1.6
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-hidden"
      style={{ backgroundColor: '#F5F0EB', paddingTop: 160 }}
    >
      {/* Rotating Circle Pattern */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 pointer-events-none hidden md:block"
        viewBox="0 0 600 600"
      >
        <circle
          cx="300"
          cy="300"
          r="280"
          stroke="#A07D5A"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          opacity="0.12"
          transform="rotate(0 300 300)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 300 300"
            to="360 300 300"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="300"
          cy="300"
          r="240"
          stroke="#A07D5A"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          opacity="0.12"
          transform="rotate(180 300 300)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 300 300"
            to="0 300 300"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="300"
          cy="300"
          r="200"
          stroke="#A07D5A"
                   strokeWidth="2"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          opacity="0.12"
          transform="rotate(90 300 300)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 300 300"
            to="360 300 300"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="300"
          cy="300"
          r="160"
          stroke="#A07D5A"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 20"
          strokeLinecap="round"
          opacity="0.12"
          transform="rotate(270 300 300)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 300 300"
            to="0 300 300"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* Headline */}
      <h1
        ref={headlineRef}
        className="relative z-[1] font-display text-[48px] md:text-[72px] font-medium text-charcoal text-center leading-[1.1] tracking-[-0.03em] px-4"
      >
        Academic Research Consultant
      </h1>

      {/* Typewriter */}
      <div className="relative z-[1] mt-4 h-[60px] md:h-[72px] flex items-center justify-center" aria-live="polite">
        <span
          ref={typewriterRef}
          className="font-display text-[36px] md:text-[56px] font-normal text-bronze"
        />
        <span className="font-display text-[36px] md:text-[56px] font-normal text-bronze animate-pulse ml-1">
          |
        </span>
      </div>

      {/* Description */}
      <p
        ref={descRef}
        className="relative z-[1] mt-10 font-body text-[17px] text-graytext text-center max-w-[520px] px-6 leading-[1.7] tracking-[0.01em]"
      >
        MPhil Linguistics graduate, published researcher, and academic consultant with 8+ years of experience supporting students and researchers worldwide.
      </p>

      {/* CTA Button */}
      <a
        ref={ctaRef}
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="relative z-[1] mt-10 font-body text-[14px] uppercase tracking-[0.06em] text-charcoal border border-charcoal rounded-[30px] px-9 py-[14px] hover:bg-charcoal hover:text-[#F5F0EB] transition-all duration-[400ms]"
      >
        Explore My Services
      </a>

      {/* Profile Card */}
      <div
        ref={cardRef}
        className="relative z-[1] mt-[60px] w-[300px] md:w-[360px] h-[380px] md:h-[420px] rounded-2xl overflow-hidden"
        style={{
          border: '2px solid rgba(255, 255, 255, 0.6)',
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(43, 43, 43, 0.08)',
        }}
      >
        {/* Corner accents */}
        <div
          ref={(el) => { cornerRefs.current[0] = el; }}
          className="absolute top-[-1px] left-[-1px] w-[80px] h-[80px] z-[2]"
        >
          <div className="w-full h-full" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(7px)' }} />
        </div>
        <div
          ref={(el) => { cornerRefs.current[1] = el; }}
          className="absolute top-[-1px] right-[-1px] w-[80px] h-[80px] z-[2]"
        >
          <div className="w-full h-full" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(7px)' }} />
        </div>
        <div
          ref={(el) => { cornerRefs.current[2] = el; }}
          className="absolute bottom-[-1px] right-[-1px] w-[80px] h-[80px] z-[2]"
        >
          <div className="w-full h-full" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(7px)' }} />
        </div>
        <div
          ref={(el) => { cornerRefs.current[3] = el; }}
          className="absolute bottom-[-1px] left-[-1px] w-[80px] h-[80px] z-[2]"
        >
          <div className="w-full h-full" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(7px)' }} />
        </div>

        {/* Card content */}
        <div className="flex flex-col items-center gap-4 h-full p-6 relative z-[1]">
          <img
            ref={imageRef}
            src="/hero-portrait.jpg"
            alt="Palwasha Saeed - Academic Research Consultant"
            className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full object-cover"
            style={{ border: '3px solid rgba(255, 255, 255, 0.5)' }}
          />
          <div className="text-center">
            <h3 className="font-display text-[24px] font-medium text-charcoal">Palwasha Saeed</h3>
            <p className="font-body text-[13px] uppercase tracking-[0.08em] text-bronze mt-1">
              MPhil Linguistics | Published Researcher
            </p>
            <p className="font-body text-[14px] text-graytext mt-3 leading-[1.6]">
              Helping students achieve academic excellence through research-based guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
