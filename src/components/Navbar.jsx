import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../App';
import { NAV_LINKS, PERSONAL } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids    = NAV_LINKS.map(l => l.href.replace('#', ''));
      const offset = window.scrollY + 120;
      let current  = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        {/* ── Glass pill container ── */}
        <div style={{
          maxWidth: 1160,
          margin: scrolled ? '10px auto' : '16px auto',
          marginLeft: 'max(20px, calc(50% - 580px))',
          marginRight: 'max(20px, calc(50% - 580px))',
          borderRadius: 18,
          background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid var(--nav-border)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
          transition: 'all 0.4s ease',
        }}>
          {/*
            3-column grid: [logo 1fr] [nav auto] [actions 1fr]
            This guarantees the nav links are always centred no matter what.
          */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            padding: '12px 24px',
            gap: 8,
          }}>
            {/* ── Col 1: Logo ── */}
            <motion.button
              onClick={() => scrollTo('#home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'none', border: 'none', cursor: 'inherit',
                display: 'flex', alignItems: 'center', gap: 10,
                justifySelf: 'start',
              }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: 9,
                background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 800, color: '#fff',
                letterSpacing: '-0.03em', flexShrink: 0,
              }}>
                {PERSONAL.initials}
              </div>
              <span style={{
                fontSize: '15px', fontWeight: 700,
                color: 'var(--text-primary)', letterSpacing: '-0.02em',
              }}>
                {PERSONAL.lastName}
              </span>
            </motion.button>

            {/* ── Col 2: Desktop Nav Links (always centred) ── */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: 2 }}>
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = active === id;
                return (
                  <motion.button
                    key={href}
                    onClick={() => scrollTo(href)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: isActive ? 'rgba(10,132,255,0.12)' : 'transparent',
                      border: 'none',
                      borderRadius: 9,
                      padding: '7px 13px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      cursor: 'inherit',
                      transition: 'all 0.2s ease',
                      letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {label}
                  </motion.button>
                );
              })}
            </nav>

            {/* ── Col 3: Actions ── */}
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: 8, justifySelf: 'end',
            }}>
              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
                style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: 'var(--nav-btn-bg)',
                  border: '1px solid var(--nav-btn-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)', cursor: 'inherit', fontSize: '15px',
                  transition: 'all 0.2s',
                }}
              >
                {dark ? <FiSun /> : <FiMoon />}
              </motion.button>

              {/* Resume download — desktop only */}
              <motion.a
                href={PERSONAL.resumePath}
                download={PERSONAL.resumeFilename}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="desktop-only"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 9,
                  background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: '13px', fontWeight: 600,
                }}
              >
                <FiDownload size={13} />
                Resume
              </motion.a>

              {/* Hamburger — mobile only */}
              <motion.button
                onClick={() => setMobileOpen(o => !o)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mobile-menu-btn"
                aria-label="Toggle menu"
                style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: 'var(--nav-btn-bg)',
                  border: '1px solid var(--nav-btn-border)',
                  display: 'none', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-primary)', cursor: 'inherit', fontSize: '18px',
                  transition: 'all 0.2s',
                }}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed', top: 90, left: 20, right: 20,
              zIndex: 999,
              background: 'var(--mobile-menu-bg)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid var(--mobile-menu-border)',
              borderRadius: 20,
              padding: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const id = href.replace('#', '');
              return (
                <motion.button
                  key={href}
                  onClick={() => scrollTo(href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{
                    display: 'flex', alignItems: 'center', width: '100%',
                    padding: '11px 14px', borderRadius: 12,
                    background: active === id ? 'rgba(10,132,255,0.1)' : 'transparent',
                    border: 'none', cursor: 'inherit', textAlign: 'left',
                    color: active === id ? 'var(--accent-blue)' : 'var(--text-primary)',
                    fontSize: '15px', fontWeight: active === id ? 600 : 500,
                    transition: 'all 0.2s',
                  }}
                >
                  {label}
                </motion.button>
              );
            })}

            {/* Resume download in mobile menu */}
            <div style={{
              marginTop: 10,
              borderTop: '1px solid var(--glass-border)',
              paddingTop: 10,
            }}>
              <a
                href={PERSONAL.resumePath}
                download={PERSONAL.resumeFilename}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  padding: '12px', borderRadius: 12,
                  background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: '14px', fontWeight: 600,
                }}
              >
                <FiDownload size={14} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
