import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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

const contactInfo = [
  {
    id: 'contact-email',
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'asadsjc10@gmail.com',
    href: 'mailto:asadsjc10@gmail.com',
    color: '#38bdf8',
  },
  {
    id: 'contact-phone',
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 6393138022',
    href: 'tel:+916393138022',
    color: '#34d399',
  },
  {
    id: 'contact-github',
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/SyedAsad108',
    href: 'https://github.com/SyedAsad108',
    color: '#818cf8',
  },
  {
    id: 'contact-linkedin',
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sysedasad',
    href: 'https://linkedin.com/in/sysedasad',
    color: '#60a5fa',
  },
  {
    id: 'contact-location',
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Ghaziabad, Delhi NCR, India',
    href: null,
    color: '#fb923c',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:asadsjc10@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Glow decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#38bdf8', letterSpacing: '0.15em' }}
          >
            Let's Connect
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
          >
            Get In Touch
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
          <p className="mt-5 max-w-md mx-auto text-sm" style={{ color: '#64748b', lineHeight: 1.8 }}>
            Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
            >
              Contact Details
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const content = (
                  <>
                    <span
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${info.color}15`, color: info.color, border: `1px solid ${info.color}25` }}
                    >
                      {info.icon}
                    </span>
                    <div>
                      <p style={{ color: '#64748b', fontSize: '0.72rem', marginBottom: '1px' }}>{info.label}</p>
                      <p style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</p>
                    </div>
                  </>
                );

                return info.href ? (
                  <motion.a
                    key={info.id}
                    id={info.id}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-link"
                    whileHover={{ x: 6 }}
                    style={{ textDecoration: 'none' }}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <div key={info.id} id={info.id} className="contact-link" style={{ cursor: 'default' }}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 p-4 rounded-xl flex items-center gap-3"
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
                <strong style={{ color: '#34d399' }}>Open to opportunities</strong> — internships, projects & collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
            >
              Send a Message
            </h3>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'form-name', name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'form-email', name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: '#94a3b8' }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(56, 189, 248, 0.12)',
                      color: '#e2e8f0',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.target.style.background = 'rgba(56, 189, 248, 0.04)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(56, 189, 248, 0.12)';
                      e.target.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="form-message"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: '#94a3b8' }}
                >
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(56, 189, 248, 0.12)',
                    color: '#e2e8f0',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.target.style.background = 'rgba(56, 189, 248, 0.04)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.12)';
                    e.target.style.background = 'rgba(255,255,255,0.04)';
                  }}
                />
              </div>

              <motion.button
                id="send-message-btn"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #34d399, #10b981)'
                    : 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  color: '#050a14',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Times New Roman', Georgia, serif",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Email Client Opened!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
