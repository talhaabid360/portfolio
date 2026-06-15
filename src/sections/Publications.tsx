import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const bookAngles = [
  { rotateY: -25, translateZ: 100 },
  { rotateY: -15, translateZ: 60 },
  { rotateY: -5, translateZ: 20 },
  { rotateY: 5, translateZ: 20 },
  { rotateY: 15, translateZ: 60 },
  { rotateY: 25, translateZ: 100 },
];

export default function Publications() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const stack = stackRef.current;
    if (!section || !header || !stack) return;

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      tl.to('.book-stack-inner', {
        rotateX: 15,
        rotateY: 0,
        duration: 1,
        ease: 'none',
      });

      bookAngles.forEach((angle, i) => {
        tl.to(
          `.book-${i + 1}`,
          {
            rotateY: angle.rotateY,
            z: angle.translateZ,
            duration: 1,
            ease: 'none',
          },
          i === 0 ? '<' : '<'
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="pt-[120px] pb-[80px] px-5 md:px-10 min-h-[150vh]"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-[60px]">
          <span className="font-body text-[12px] font-medium uppercase tracking-[0.15em] text-bronze">
            PUBLICATIONS
          </span>
          <h2 className="font-display text-[36px] md:text-[48px] font-normal text-charcoal leading-[1.15] tracking-[-0.02em] mt-4">
            Published Research
          </h2>
          <p className="font-body text-[17px] text-graytext mt-4">
            Peer-reviewed articles in HEC-recognized Y-category journals
          </p>
        </div>

        {/* 3D Book Stack */}
        <div
          ref={stackRef}
          className="relative mx-auto"
          style={{
            width: '100%',
            maxWidth: 600,
            height: 500,
            perspective: 1000,
          }}
        >
          <div
            className="book-stack-inner relative w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {bookAngles.map((_, i) => (
              <div
                key={i}
                className={`book-${i + 1} absolute`}
                style={{
                  width: 200,
                  height: 280,
                  top: '50%',
                  left: '50%',
                  marginTop: -140,
                  marginLeft: -100,
                  transformStyle: 'preserve-3d',
                  borderRadius: 4,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                }}
              >
                {/* Spine */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 30,
                    height: '100%',
                    background: 'linear-gradient(to right, #1a1a1a 0%, #3a3a3a 50%, #1a1a1a 100%)',
                    borderRadius: '4px 0 0 4px',
                    transform: 'rotateY(-90deg) translateZ(15px)',
                  }}
                />
                {/* Cover */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${
                      i % 2 === 0 ? '#F5F0EB 0%, #E8DFD3 100%' : '#EDE8E0 0%, #DDD5C8 100%'
                    })`,
                    borderRadius: '0 4px 4px 0',
                    transform: 'translateZ(15px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 3,
                      backgroundColor: '#A07D5A',
                      marginBottom: 16,
                    }}
                  />
                  <span
                    className="font-display text-center"
                    style={{
                      fontSize: 14,
                      color: '#2B2B2B',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    Research Article {i + 1}
                  </span>
                  <span
                    className="font-body text-center mt-3"
                    style={{
                      fontSize: 10,
                      color: '#A07D5A',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Y-Category Journal
                  </span>
                  <div
                    style={{
                      width: 30,
                      height: 2,
                      backgroundColor: 'rgba(160,125,90,0.3)',
                      marginTop: 20,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Cards */}
        <div className="flex flex-col gap-6 max-w-[700px] mx-auto mt-20">
          <div
            className="rounded-xl p-8"
            style={{ border: '1px solid rgba(43,43,43,0.1)' }}
          >
            <h4 className="font-display text-[20px] font-medium text-charcoal">
              Research Article 1 — Y-Category Journal (HEC Recognized)
            </h4>
            <p className="font-body text-[14px] text-bronze mt-2">
              Peer-reviewed publication in HEC-recognized Y-category journal
            </p>
          </div>
          <div
            className="rounded-xl p-8"
            style={{ border: '1px solid rgba(43,43,43,0.1)' }}
          >
            <h4 className="font-display text-[20px] font-medium text-charcoal">
              Research Article 2 — Y-Category Journal (HEC Recognized)
            </h4>
            <p className="font-body text-[14px] text-bronze mt-2">
              Peer-reviewed publication in HEC-recognized Y-category journal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
