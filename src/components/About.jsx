import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cloud, Trophy, Layers } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '4+', label: 'Projects Built', icon: <Code2 size={18} />, color: '#38bdf8' },
  { value: '4', label: 'AWS Certifications', icon: <Cloud size={18} />, color: '#818cf8' },
  { value: 'SIH', label: 'Hackathon Nominee', icon: <Trophy size={18} />, color: '#34d399' },
  { value: '2+', label: 'Years Coding', icon: <Layers size={18} />, color: '#fb923c' },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          right: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#38bdf8', letterSpacing: '0.15em' }}
          >
            About Me
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
          >
            Full Stack Developer & Cloud Engineer
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: 60,
              height: 3,
              background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
              borderRadius: 99,
            }}
          />
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card text-center p-6 group"
              style={{ transition: 'all 0.3s ease' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}30` }}
              >
                {s.icon}
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{
                  fontFamily: "'Times New Roman', Georgia, serif",
                  color: s.color,
                }}
              >
                {s.value}
              </div>
              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="glass-card p-8 md:p-10"
        >
          <div>
            {/* Text */}
            <div>
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
              >
                Engineering Software{' '}
                <span className="gradient-text">Across the Stack</span>
              </h3>

              <div className="space-y-4" style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: '0.975rem' }}>
                <p>
                  I'm a Full Stack Developer and Information Technology student passionate about building scalable software systems, from responsive user interfaces to cloud-native backend architectures.
                </p>
                <p>
                  My experience spans both traditional full-stack development and cloud engineering. I build complete applications using React, Node.js, Express, FastAPI, MongoDB, and SQL, while also designing cloud-native solutions on AWS using Lambda, API Gateway, DynamoDB, Kinesis, S3, Glue, Athena, and other serverless technologies.
                </p>
                <p>
                  I enjoy working across the entire software lifecycle — designing APIs, building backend services, developing modern frontend experiences, and architecting distributed, event-driven systems in the cloud. Whether it's a real-time chat application, a secure file-sharing platform, a geospatial monitoring system, or a large-scale telemetry pipeline, I enjoy turning complex technical challenges into practical software solutions.
                </p>
                <p>
                  I hold four AWS certifications: <strong style={{ color: '#e2e8f0' }}>AWS Certified Cloud Practitioner</strong>, <strong style={{ color: '#e2e8f0' }}>AWS AI Practitioner</strong>, <strong style={{ color: '#e2e8f0' }}>AWS Certified Developer – Associate</strong>, and <strong style={{ color: '#e2e8f0' }}>AWS Data Engineer Associate</strong>. These certifications complement my hands-on experience building full-stack and cloud-native applications that leverage modern AWS services and serverless architectures.
                </p>
                <p>
                  I have also participated in multiple hackathons, including <strong style={{ color: '#e2e8f0' }}>Smart India Hackathon (SIH)</strong>, where my team advanced through the college selection process and was chosen among the top teams from more than 600 participating teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['Problem Solver', 'Cloud Enthusiast', 'Serverless Architecture', 'Open Source', 'SIH College Winner'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: '#38bdf8',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
