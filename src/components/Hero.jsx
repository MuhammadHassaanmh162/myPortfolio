import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiMail } from 'react-icons/fi';
import { PERSONAL, SOCIAL, ROLES } from '../data';

function useTypewriter(texts, typingSpeed = 75, deletingSpeed = 40, pauseMs = 2000) {
  const [index, setIndex]   = useState(0);
  const [display, setDisplay] = useState('');
  const [typing, setTyping]  = useState(true);

  useEffect(() => {
    const text = texts[index];
    let timer;
    if (typing) {
      if (display.length < text.length) {
        timer = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setTyping(false), pauseMs);
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(d => d.slice(0, -1)), deletingSpeed);
      } else {
        setIndex(i => (i + 1) % texts.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [display, typing, index, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Subtle hero radial */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw', height: '40vw',
        background: 'radial-gradient(ellipse, rgba(10,132,255,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, width: '100%', textAlign: 'center', position: 'relative' }}>
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Available badge */}
          {PERSONAL.available && (
            <motion.div variants={item}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(10,132,255,0.08)',
                border: '1px solid rgba(10,132,255,0.18)',
                borderRadius: 50, padding: '7px 18px',
                fontSize: '12px', fontWeight: 600,
                color: 'var(--accent-blue)', letterSpacing: '0.04em',
                marginBottom: 32,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--accent-green)',
                  boxShadow: '0 0 6px var(--accent-green)',
                  animation: 'heroPulse 2s ease-in-out infinite',
                }} />
                Available for opportunities
              </span>
            </motion.div>
          )}

          {/* Greeting */}
          <motion.p variants={item} style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-secondary)', marginBottom: 16,
            fontWeight: 400, letterSpacing: '-0.01em',
          }}>
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} style={{
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            fontWeight: 900, letterSpacing: '-0.04em',
            lineHeight: 1.0, marginBottom: 24,
          }}>
            <span style={{
              background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--text-secondary) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {PERSONAL.firstName}
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #0A84FF 0%, #BF5AF2 60%, #FF9F0A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {PERSONAL.lastName}
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={item} style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 500, color: 'var(--text-secondary)',
            minHeight: '2.5rem', marginBottom: 32,
            letterSpacing: '-0.02em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2,
          }}>
            <span>{role}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              style={{
                display: 'inline-block', width: 2, height: '1.2em',
                background: 'var(--accent-blue)',
                borderRadius: 1, marginLeft: 2, verticalAlign: 'middle',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'var(--text-secondary)', lineHeight: 1.7,
            maxWidth: 560, margin: '0 auto 48px',
          }}>
            {PERSONAL.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{
            display: 'flex', gap: 14,
            justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60,
          }}>
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 16px 48px rgba(10,132,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '14px 30px', borderRadius: 50,
                background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                color: '#fff', border: 'none', cursor: 'inherit',
                fontSize: '15px', fontWeight: 600,
                boxShadow: '0 8px 32px rgba(10,132,255,0.25)',
              }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '13px 29px', borderRadius: 50,
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                color: 'var(--text-primary)',
                border: '1px solid var(--glass-border)',
                cursor: 'inherit', fontSize: '15px', fontWeight: 600,
                transition: 'all 0.25s',
              }}
            >
              <FiMail size={15} /> Get In Touch
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} style={{
            display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 80,
          }}>
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
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 44, height: 44, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none', fontSize: '18px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#0A84FF'; e.currentTarget.style.borderColor = 'rgba(10,132,255,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            variants={item}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'none', border: 'none', cursor: 'inherit',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 6,
              color: 'var(--text-tertiary)', fontSize: '11px',
              letterSpacing: '0.12em', textTransform: 'uppercase',
            }}
          >
            <span>Scroll</span>
            <FiArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
