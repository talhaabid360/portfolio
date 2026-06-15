import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  imageSrc: string;
  caption: string;
}

export default function ParallaxSection({ imageSrc, caption }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '70vh', backgroundColor: '#F5F0EB' }}
    >
      <div
        ref={imageRef}
        className="absolute w-full"
        style={{
          height: '130%',
          top: 0,
          left: 0,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ background: 'rgba(43, 43, 43, 0.3)' }}
      >
        <div
          className="w-[80%] h-[1px]"
          style={{ background: 'rgba(255, 255, 255, 0.4)' }}
        />
        <p
          className="font-display text-center max-w-[600px] px-6 my-5"
          style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            color: '#FFFFFF',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          {caption}
        </p>
        <div
          className="w-[80%] h-[1px]"
          style={{ background: 'rgba(255, 255, 255, 0.4)' }}
        />
      </div>
    </div>
  );
}
