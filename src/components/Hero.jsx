import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = [
  'Full Stack Developer',
  'AWS Certified Engineer',
  'Cloud-Native Builder',
  'Serverless Architect',
];

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '56, 189, 248' : '129, 140, 248',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout;

    if (phase === 'typing') {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1800);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 300);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="typing-container">
      <span className="gradient-text font-bold">{displayed}</span>
      <span className="cursor-blink ml-0.5" style={{ color: '#38bdf8', fontSize: '1em', lineHeight: 1 }}>|</span>
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      <ParticleField />

      {/* Radial gradient glows */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '15%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '15%',
          right: '10%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-20 pb-10">
        {/* Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Times New Roman', Georgia, serif",
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            Syed Asad Ahmad
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              marginBottom: '1.5rem',
              minHeight: '2.5rem',
            }}
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              lineHeight: 1.8,
              maxWidth: '550px',
              margin: '0 0 2.5rem 0',
            }}
            className="text-center md:text-left"
          >
            Information Technology student building cloud-native systems and full-stack apps powered by AWS, React, and Node.js.
          </motion.p>

          {/* Quick info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            {[
              { icon: <MapPin size={14} />, text: 'Ghaziabad, Delhi NCR' },
              { icon: <Phone size={14} />, text: '+91 6393138022' },
            ].map((item) => (
              <span
                key={item.text}
                className="flex items-center gap-1.5 text-sm"
                style={{ color: '#64748b' }}
              >
                <span style={{ color: '#38bdf8' }}>{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
          >
            <button id="view-projects-btn" className="btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>
            <button
              id="hire-me-btn"
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-4"
          >
            {[
              {
                icon: <Github size={18} />,
                href: 'https://github.com/SyedAsad108',
                label: 'GitHub',
                id: 'github-link',
              },
              {
                icon: <Linkedin size={18} />,
                href: 'https://linkedin.com/in/sysedasad',
                label: 'LinkedIn',
                id: 'linkedin-link',
              },
              {
                icon: <Mail size={18} />,
                href: 'mailto:asadsjc10@gmail.com',
                label: 'Email',
                id: 'email-link',
              },
            ].map((s) => (
              <motion.a
                key={s.label}
                id={s.id}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo Area */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-md mx-auto"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glow effect behind photo */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] blur-2xl opacity-40"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Photo container */}
            <img
              src="/profile.jpg"
              alt="Syed Asad Ahmad"
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56,189,248,0.2)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        id="scroll-down-btn"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer"
        style={{ background: 'none', border: 'none' }}
        whileHover={{ y: 4 }}
      >
        <span style={{ color: '#475569', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#38bdf8' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
