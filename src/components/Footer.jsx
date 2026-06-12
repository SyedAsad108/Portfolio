import React from 'react';
import { Mail, Heart } from 'lucide-react';

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

const Footer = () => (
  <footer
    className="py-8 px-6"
    style={{
      background: 'rgba(5, 10, 20, 0.95)',
      borderTop: '1px solid rgba(56, 189, 248, 0.08)',
    }}
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
          style={{
            background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
            color: '#050a14',
            fontFamily: "'Times New Roman', Georgia, serif",
          }}
        >
          SA
        </div>
        <span style={{ color: '#475569', fontSize: '0.85rem' }}>
          © 2026 Syed Asad Ahmad · All rights reserved
        </span>
      </div>

      <div className="flex items-center gap-1 text-sm" style={{ color: '#475569' }}>
        Made with <Heart size={13} style={{ color: '#f472b6', margin: '0 4px' }} /> using React & Tailwind
      </div>

      <div className="flex gap-3">
        {[
          { icon: <Github size={16} />, href: 'https://github.com/SyedAsad108', label: 'GitHub', id: 'footer-github' },
          { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/sysedasad', label: 'LinkedIn', id: 'footer-linkedin' },
          { icon: <Mail size={16} />, href: 'mailto:asadsjc10@gmail.com', label: 'Email', id: 'footer-email' },
        ].map((s) => (
          <a
            key={s.label}
            id={s.id}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{
              background: 'rgba(56, 189, 248, 0.06)',
              border: '1px solid rgba(56, 189, 248, 0.12)',
              color: '#64748b',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#38bdf8';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748b';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.12)';
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
