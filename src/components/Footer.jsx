import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart, FiDownload } from 'react-icons/fi';
import { PERSONAL, SOCIAL, NAV_LINKS } from '../data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo  = (href) =>
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{
      padding: '56px 0 28px',
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
    }}>
      {/* Top gradient accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '55%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(10,132,255,0.4), rgba(191,90,242,0.4), transparent)',
      }} />

      <div className="container">
        {/* ── Main row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 24, alignItems: 'center',
          marginBottom: 40,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 11,
              background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: 800, color: '#fff',
            }}>
              {PERSONAL.initials}
            </div>
            <div>
              <p style={{
                fontSize: '14px', fontWeight: 700,
                color: 'var(--text-primary)', letterSpacing: '-0.02em',
              }}>
                {PERSONAL.name}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {PERSONAL.title}
              </p>
            </div>
          </div>

          {/* Nav links — centred */}
          <nav style={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <motion.button
                key={href}
                onClick={() => scrollTo(href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'transparent', border: 'none',
                  padding: '6px 12px', borderRadius: 8,
                  fontSize: '13px', color: 'var(--text-secondary)',
                  cursor: 'inherit', fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {label}
              </motion.button>
            ))}
          </nav>

          {/* Social + back-to-top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
            {[
              { icon: FiGithub,   href: SOCIAL.github,   label: 'GitHub' },
              { icon: FiLinkedin, href: SOCIAL.linkedin,  label: 'LinkedIn' },
              { icon: FiMail,     href: SOCIAL.email,     label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '15px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <Icon />
              </motion.a>
            ))}

            {/* Resume download */}
            <motion.a
              href={PERSONAL.resumePath}
              download={PERSONAL.resumeFilename}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
              style={{
                width: 34, height: 34, borderRadius: 9,
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', textDecoration: 'none',
                fontSize: '15px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-blue)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FiDownload />
            </motion.a>

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 34, height: 34, borderRadius: 9,
                background: 'rgba(10,132,255,0.12)',
                border: '1px solid rgba(10,132,255,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-blue)', cursor: 'inherit', fontSize: '15px',
              }}
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--glass-border)', marginBottom: 22 }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 10,
        }}>
          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p style={{
            fontSize: '13px', color: 'var(--text-tertiary)',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            Built with React &amp; Framer Motion
            <FiHeart size={11} style={{ color: '#FF453A' }} />
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          footer nav { justify-content: center; }
          footer .container > div:first-child > div:last-child { justify-content: center; }
          footer .container > div:last-child { flex-direction: column; align-items: center; }
        }
      `}</style>
    </footer>
  );
}
