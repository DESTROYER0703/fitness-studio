import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import gsap from 'gsap';

// ─── Particle Canvas ──────────────────────────────────────────────────────────
const ParticleCanvas = ({ active }) => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const GOLD = { r: 212, g: 175, b: 55 };
    const SILVER = { r: 200, g: 200, b: 210 };

    const createParticle = () => {
      const isSilver = Math.random() > 0.7;
      const color = isSilver ? SILVER : GOLD;
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 40,
        size: Math.random() * 1.5 + 0.3,
        speedY: -(Math.random() * 0.6 + 0.2),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: 0,
        maxOpacity: Math.random() * 0.5 + 0.1,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        r: color.r,
        g: color.g,
        b: color.b,
        fading: false,
      };
    };

    for (let i = 0; i < 90; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.opacity = Math.random() * p.maxOpacity;
      particlesRef.current.push(p);
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particlesRef.current.length < 120) {
        particlesRef.current.push(createParticle());
      }

      particlesRef.current.forEach((p, i) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (!p.fading) {
          p.opacity = Math.min(p.opacity + p.fadeSpeed, p.maxOpacity);
        }
        if (p.y < canvas.height * 0.15 || p.opacity >= p.maxOpacity) {
          p.fading = true;
          p.opacity -= p.fadeSpeed * 0.5;
        }
        if (p.opacity <= 0 || p.y < -10) {
          particlesRef.current[i] = createParticle();
          return;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
      particlesRef.current = [];
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
};

// ─── Ambient Radial Glow ─────────────────────────────────────────────────────
const AmbientGlow = ({ visible }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    style={{ zIndex: 1 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: visible ? 1 : 0 }}
    transition={{ duration: 2.5, ease: 'easeInOut' }}
  >
    {/* Deep center glow */}
    <div
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        height: '70vw',
        background:
          'radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, rgba(212,175,55,0.02) 30%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
    {/* Bottom horizon glow */}
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        height: '30vh',
        background:
          'linear-gradient(to top, rgba(212,175,55,0.03) 0%, transparent 100%)',
      }}
    />
  </motion.div>
);

// ─── Scan Line Sweep ─────────────────────────────────────────────────────────
const LightSweep = ({ trigger }) => {
  return (
    <AnimatePresence>
      {trigger && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 20 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '60%',
              height: '100%',
              background:
                'linear-gradient(105deg, transparent 30%, rgba(212,175,55,0.07) 50%, rgba(255,255,255,0.04) 52%, transparent 70%)',
              filter: 'blur(1px)',
            }}
            animate={{ left: '160%' }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Logo Letters ─────────────────────────────────────────────────────────────
const LogoReveal = ({ phase }) => {
  const letters1 = 'FITNESS'.split('');
  const letters2 = 'STUDIO'.split('');
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const glowVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="flex flex-col items-center" style={{ gap: '0.15em' }}>
      {/* Top line: FITNESS */}
      <motion.div
        className="flex"
        variants={containerVariants}
        initial="hidden"
        animate={phase >= 1 ? 'visible' : 'hidden'}
        style={{ gap: '0.06em' }}
      >
        {letters1.map((l, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 800,
              letterSpacing: '0.18em',
              lineHeight: 1,
              background: 'linear-gradient(180deg, #FFFFFF 0%, #C8C8C8 60%, #888888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.15))',
              display: 'inline-block',
            }}
          >
            {l}
          </motion.span>
        ))}
      </motion.div>

      {/* Divider line with dot */}
      <motion.div
        className="flex items-center w-full"
        variants={glowVariants}
        initial="hidden"
        animate={phase >= 2 ? 'visible' : 'hidden'}
        style={{ justifyContent: 'center', gap: '0.8rem', originX: 0.5 }}
      >
        <div style={{ height: '1px', flex: 1, maxWidth: '8rem', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.8))' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4AF37', boxShadow: '0 0 8px rgba(212,175,55,0.8)' }} />
        <div style={{ height: '1px', flex: 1, maxWidth: '8rem', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.8))' }} />
      </motion.div>

      {/* Bottom line: STUDIO */}
      <motion.div
        className="flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate={phase >= 2 ? 'visible' : 'hidden'}
        style={{ gap: '0.22em' }}
      >
        {letters2.map((l, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(1rem, 2.8vw, 2.4rem)',
              fontWeight: 400,
              letterSpacing: '0.55em',
              lineHeight: 1,
              color: '#D4AF37',
              filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.4))',
              display: 'inline-block',
            }}
          >
            {l}
          </motion.span>
        ))}
        <motion.span
          variants={letterVariants}
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(1rem, 2.8vw, 2.4rem)',
            fontWeight: 400,
            letterSpacing: '0.55em',
            lineHeight: 1,
            color: '#D4AF37',
            display: 'inline-block',
          }}
        >
          GYM
        </motion.span>
      </motion.div>
    </div>
  );
};

// ─── Cinematic Slogan ─────────────────────────────────────────────────────────
const CinematicSlogan = ({ phase }) => {
  const words = 'DISCIPLINE CREATES LEGENDS'.split(' ');
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 25, clipPath: 'inset(110% 0% 0% 0%)' },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: phase >= 3 ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-wrap justify-center"
        style={{ gap: '0.5em' }}
        variants={containerVariants}
        initial="hidden"
        animate={phase >= 3 ? 'visible' : 'hidden'}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(0.65rem, 2vw, 1.1rem)',
              fontWeight: 600,
              letterSpacing: '0.35em',
              color: 'rgba(212,175,55,0.85)',
              display: 'inline-block',
              textTransform: 'uppercase',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Sub tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.6rem, 1.4vw, 0.8rem)',
          fontWeight: 300,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.25)',
          marginTop: '1.2rem',
          textTransform: 'uppercase',
        }}
      >
        FATEHPUR · UTTAR PRADESH · EST. 2020
      </motion.p>
    </motion.div>
  );
};

// ─── Horizontal Rule Lines ────────────────────────────────────────────────────
const FrameLines = ({ phase }) => (
  <>
    {/* Top line */}
    <motion.div
      className="absolute top-0 left-0 right-0"
      style={{ height: '1px', background: 'linear-gradient(to right, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)', zIndex: 5 }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    />
    {/* Bottom line */}
    <motion.div
      className="absolute bottom-0 left-0 right-0"
      style={{ height: '1px', background: 'linear-gradient(to right, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)', zIndex: 5 }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    />
    {/* Corner accents */}
    {[
      { top: '2rem', left: '2rem', borderTop: '1px solid', borderLeft: '1px solid' },
      { top: '2rem', right: '2rem', borderTop: '1px solid', borderRight: '1px solid' },
      { bottom: '2rem', left: '2rem', borderBottom: '1px solid', borderLeft: '1px solid' },
      { bottom: '2rem', right: '2rem', borderBottom: '1px solid', borderRight: '1px solid' },
    ].map((style, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          ...style,
          width: '2.5rem',
          height: '2.5rem',
          borderColor: 'rgba(212,175,55,0.35)',
          zIndex: 5,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      />
    ))}
  </>
);

// ─── Exit Flash Overlay ───────────────────────────────────────────────────────
const ExitOverlay = ({ trigger, onDone }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!trigger || !overlayRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onDone, 100);
      },
    });

    // Quick white flash then slam to black then fade out
    tl.to(overlayRef.current, {
      opacity: 0.08,
      duration: 0.12,
      ease: 'power2.in',
    })
      .to(overlayRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: 'power4.in',
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.05,
      });
  }, [trigger, onDone]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 9998,
        background: '#050505',
        opacity: 0,
      }}
    />
  );
};

// ─── Progress Bar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ phase }) => {
  const progress = Math.min(((phase) / 5) * 100, 100);
  return (
    <motion.div
      className="absolute bottom-10 left-1/2"
      style={{ transform: 'translateX(-50%)', width: 'clamp(120px, 20vw, 180px)', zIndex: 10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase >= 1 && phase < 6 ? 0.5 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'linear-gradient(to right, rgba(212,175,55,0.4), rgba(212,175,55,0.9))' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

// ─── Main CinematicIntro ──────────────────────────────────────────────────────
const CinematicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [sweepTrigger, setSweepTrigger] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);

  const handleDone = useCallback(() => {
    setDone(true);
    onComplete();
  }, [onComplete]);

  // Cinematic timeline
  useEffect(() => {
    const timings = [
      { delay: 300, fn: () => setPhase(1) },        // ambient + frame lines + logo word 1
      { delay: 1100, fn: () => setPhase(2) },       // logo word 2 + divider
      { delay: 2200, fn: () => setSweepTrigger(true) }, // light sweep
      { delay: 2600, fn: () => setPhase(3) },       // slogan
      { delay: 3600, fn: () => setPhase(4) },       // sub tagline
      { delay: 4800, fn: () => setPhase(5) },       // hold...
      { delay: 5400, fn: () => setExiting(true) },  // exit sequence
    ];

    const ids = timings.map(({ delay, fn }) => setTimeout(fn, delay));
    return () => ids.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          style={{
            zIndex: 9999,
            background: '#050505',
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={exiting ? { opacity: 0 } : { opacity: 1 }}
          transition={
            exiting
              ? { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }
              : {}
          }
          onAnimationComplete={() => {
            if (exiting) handleDone();
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 3,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
              opacity: 0.4,
            }}
          />

          {/* Ambient background glow */}
          <AmbientGlow visible={phase >= 1} />

          {/* Particle system */}
          <ParticleCanvas active={phase >= 1} />

          {/* Frame decorations */}
          <FrameLines phase={phase} />

          {/* Light sweep effect */}
          <LightSweep trigger={sweepTrigger} />

          {/* Main content */}
          <div
            className="relative flex flex-col items-center justify-center"
            style={{ zIndex: 10, gap: 'clamp(1.5rem, 4vh, 3rem)', textAlign: 'center', padding: '2rem' }}
          >
            {/* Logo */}
            <LogoReveal phase={phase} />

            {/* Slogan */}
            <CinematicSlogan phase={phase} />
          </div>

          {/* Progress indicator */}
          <ProgressBar phase={phase} />

          {/* Exit overlay flash */}
          <ExitOverlay trigger={exiting} onDone={() => {}} />

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 4,
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
