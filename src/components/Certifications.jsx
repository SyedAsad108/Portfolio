import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck } from 'lucide-react';

// Credly badge data — real badge IDs provided by the user
const badges = [
  {
    id: 'cloud-practitioner',
    badgeId: '462e1ea8-ec04-48a6-b5c3-58941acfaef6',
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    date: 'Dec 2025',
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05))',
    borderColor: 'rgba(56,189,248,0.25)',
  },
  {
    id: 'ai-practitioner',
    badgeId: 'ec4be597-b12e-4948-980a-9bfb7e637c9c',
    title: 'AWS AI Practitioner',
    code: 'AIF-C01',
    date: 'Dec 2025',
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(129,140,248,0.05))',
    borderColor: 'rgba(129,140,248,0.25)',
  },
  {
    id: 'data-engineer',
    badgeId: 'fca259bd-3b39-4244-9739-40f8da4d0201',
    title: 'AWS Data Engineer Associate',
    code: 'DEA-C01',
    date: 'Apr 2026',
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))',
    borderColor: 'rgba(52,211,153,0.25)',
  },
  {
    id: 'developer-associate',
    badgeId: 'e8415ddf-a8ab-4ccd-b68d-1af52bb20d2d',
    title: 'AWS Certified Developer Associate',
    code: 'DVA-C02',
    date: 'Jun 2026',
    color: '#c084fc',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(192,132,252,0.05))',
    borderColor: 'rgba(192,132,252,0.25)',
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Load Credly embed script once when section first becomes visible
  useEffect(() => {
    const CREDLY_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

    const alreadyLoaded = !!document.querySelector(`script[src="${CREDLY_SRC}"]`);

    if (!alreadyLoaded) {
      const script = document.createElement('script');
      script.src = CREDLY_SRC;
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#38bdf8', letterSpacing: '0.15em' }}
          >
            Credentials
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#ffffff' }}
          >
            Certifications & Achievements
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: 60, height: 3,
              background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
              borderRadius: 99,
            }}
          />
        </motion.div>

        {/* ── Section subtitle ───────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center mb-12 text-sm"
          style={{ color: '#94a3b8', maxWidth: 520, margin: '0 auto 3rem' }}
        >
          Verified AWS certifications — click any badge to view on Credly
        </motion.p>

        {/* ── Certification Cards Grid ────────────────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mx-auto"
          style={{
            maxWidth: 1200,
          }}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.id}
              id={`cert-${badge.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
              style={{
                background: 'rgba(15, 20, 35, 0.85)',
                border: `1px solid ${badge.borderColor}`,
                borderRadius: 20,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `0 4px 30px rgba(0,0,0,0.3), 0 0 40px ${badge.color}08`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 40px rgba(0,0,0,0.4), 0 0 60px ${badge.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 30px rgba(0,0,0,0.3), 0 0 40px ${badge.color}08`;
              }}
            >
              {/* ── Badge embed area — light elevated container ──── */}
              <div
                style={{
                  background: badge.gradient,
                  padding: '28px 20px 20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottom: `1px solid ${badge.borderColor}`,
                  minHeight: 290,
                }}
              >
                {/* Credly embed div — the embed.js script replaces this with an <iframe> */}
                <div
                  data-iframe-width="150"
                  data-iframe-height="270"
                  data-share-badge-id={badge.badgeId}
                  data-share-badge-host="https://www.credly.com"
                  style={{ display: 'block' }}
                />
              </div>

              {/* ── Card info — name, code, date ────────────────── */}
              <div
                style={{
                  padding: '24px 24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  flex: 1,
                }}
              >
                {/* Verified label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 2,
                  }}
                >
                  <ShieldCheck size={14} style={{ color: '#34d399' }} />
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: '#34d399',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Verified
                  </span>
                </div>

                {/* Certification Name — WHITE, bold, larger */}
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    fontFamily: "'Times New Roman', Georgia, serif",
                    textAlign: 'center',
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {badge.title}
                </h3>

                {/* Certification Code */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: `${badge.color}18`,
                    color: badge.color,
                    border: `1px solid ${badge.color}35`,
                    padding: '4px 12px',
                    borderRadius: 8,
                    letterSpacing: '0.05em',
                  }}
                >
                  {badge.code}
                </span>

                {/* Date */}
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    fontWeight: 500,
                  }}
                >
                  {badge.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Achievement ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{ marginTop: 56 }}
        >
          <h3
            className="text-xl font-semibold mb-5 flex items-center gap-2"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#ffffff' }}
          >
            <span style={{ fontSize: '1.2rem' }}>🏆</span> Achievements
          </h3>

          <div
            id="achievement-sih"
            className="glass-card p-6 flex gap-4 items-start"
          >
            <div
              className="text-2xl shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}
            >
              🏆
            </div>
            <div>
              <h4
                className="font-semibold mb-1"
                style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#ffffff' }}
              >
                Smart India Hackathon (SIH)
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                College-nominated participant representing KIET Group of Institutions in the internal selection and nomination process.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
