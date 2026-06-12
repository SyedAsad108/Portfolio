import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Download, Award, MapPin, Phone, CheckCircle } from 'lucide-react';

const Github = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const certs = [
  { code: 'CLF-C02', label: 'Cloud Practitioner', date: 'Dec 2025', color: '#38bdf8' },
  { code: 'AIF-C01', label: 'AI Practitioner', date: 'Dec 2025', color: '#818cf8' },
  { code: 'DEA-C01', label: 'Data Engineer Associate', date: 'Apr 2026', color: '#34d399' },
  { code: 'DVA-C02', label: 'Developer Associate', date: 'Jun 2026', color: '#c084fc' },
];

const techStack = [
  'React.js', 'Node.js', 'Python', 'FastAPI', 'AWS Lambda', 'DynamoDB',
  'Kinesis', 'S3', 'Docker', 'Git', 'MongoDB', 'WebSockets',
];

const contactLinks = [
  { icon: <Mail size={15} />, value: 'asadsjc10@gmail.com', href: 'mailto:asadsjc10@gmail.com', id: 'resume-email' },
  { icon: <Github size={15} />, value: 'github.com/SyedAsad108', href: 'https://github.com/SyedAsad108', id: 'resume-github' },
  { icon: <Linkedin size={15} />, value: 'linkedin.com/in/sysedasad', href: 'https://linkedin.com/in/sysedasad', id: 'resume-linkedin' },
  { icon: <Phone size={15} />, value: '+91 6393138022', href: 'tel:+916393138022', id: 'resume-phone' },
  { icon: <MapPin size={15} />, value: 'Ghaziabad, Delhi NCR', href: null, id: 'resume-location' },
];

const Resume = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const resumeUrl = 'https://drive.google.com/file/d/1OzCR3Cc_WCS1ZWbGc7u2iHXdi08vdF73/view?usp=sharing';

  return (
    <section
      id="resume"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#38bdf8', letterSpacing: '0.15em' }}
          >
            Resume
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
          >
            My Resume
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: 99 }}
          />
        </motion.div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="glass-card overflow-hidden"
        >
          {/* Header bar */}
          <div
            className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(129,140,248,0.06))',
              borderBottom: '1px solid rgba(56,189,248,0.12)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#050a14', fontFamily: "'Times New Roman', Georgia, serif" }}
              >
                SA
              </div>
              <div>
                <h3 style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0', fontSize: '1.3rem', fontWeight: 700, marginBottom: 2 }}>
                  Syed Asad Ahmad
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Full Stack Developer · AWS Certified</p>
              </div>
            </div>
            <a
              id="download-resume-btn"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm"
              style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#64748b', letterSpacing: '0.12em' }}
              >
                Contact Information
              </h4>
              <div className="space-y-3">
                {contactLinks.map((item) => {
                  const inner = (
                    <div className="flex items-center gap-2.5 group">
                      <span style={{ color: '#38bdf8', flexShrink: 0 }}>{item.icon}</span>
                      <span
                        className="text-sm transition-colors duration-200"
                        style={{ color: '#94a3b8' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.id}
                      id={item.id}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ textDecoration: 'none', display: 'block' }}
                      onMouseEnter={(e) => { e.currentTarget.querySelector('span:last-child').style.color = '#e2e8f0'; }}
                      onMouseLeave={(e) => { e.currentTarget.querySelector('span:last-child').style.color = '#94a3b8'; }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.id} id={item.id}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* AWS Certs */}
            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#64748b', letterSpacing: '0.12em' }}
              >
                AWS Certifications
              </h4>
              <div className="space-y-2.5">
                {certs.map((cert) => (
                  <div
                    key={cert.code}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: `${cert.color}08`, border: `1px solid ${cert.color}20` }}
                  >
                    <Award size={16} style={{ color: cert.color, flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <p style={{ color: '#ffffff', fontSize: '0.825rem', fontWeight: 600 }}>
                        {cert.label}
                      </p>
                      <p style={{ color: '#64748b', fontSize: '0.72rem' }}>Amazon Web Services · {cert.date}</p>
                    </div>
                    <span
                      className="text-xs font-bold font-mono px-2 py-0.5 rounded shrink-0"
                      style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.code}
                    </span>
                    <CheckCircle size={13} style={{ color: '#34d399', flexShrink: 0 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack row */}
          <div
            className="px-6 md:px-8 py-5"
            style={{ borderTop: '1px solid rgba(56,189,248,0.08)' }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#64748b', letterSpacing: '0.12em' }}
            >
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium"
                  style={{
                    background: 'rgba(56, 189, 248, 0.07)',
                    color: '#38bdf8',
                    border: '1px solid rgba(56, 189, 248, 0.18)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 p-4 rounded-xl flex items-center gap-3 max-w-lg mx-auto"
          style={{
            background: 'rgba(52, 211, 153, 0.07)',
            border: '1px solid rgba(52, 211, 153, 0.2)',
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: '#34d399', boxShadow: '0 0 8px #34d399', animation: 'pulse 2s infinite' }}
          />
          <p className="text-sm" style={{ color: '#94a3b8' }}>
            <strong style={{ color: '#34d399' }}>Currently available</strong> for internships, freelance projects, and collaborations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
