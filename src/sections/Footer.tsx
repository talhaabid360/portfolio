export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full overflow-hidden"
      style={{ height: 400, zIndex: -1 }}
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/footer-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px) brightness(0.5)',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ backgroundColor: 'rgba(43,43,43,0.7)' }}
      >
        <h2
          className="font-display text-center px-4"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Let's Create Something
        </h2>
        <h2
          className="font-display text-center px-4 mt-2"
          style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Scholarly Together
        </h2>
        <p
          className="font-body mt-10"
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          © 2025 Palwasha Saeed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
