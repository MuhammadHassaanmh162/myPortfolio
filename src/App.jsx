import { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ── Theme Context ──────────────────────────────────────────────────
export const ThemeContext = createContext({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

// ── Background Orbs ────────────────────────────────────────────────
function BackgroundOrbs() {
  const { dark } = useTheme();
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      overflow: 'hidden', pointerEvents: 'none',
    }}>
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -60, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-15%', left: '-10%',
          width: '55vw', height: '55vw', borderRadius: '50%',
          background: dark
            ? 'radial-gradient(circle, rgba(10,132,255,0.12) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(10,132,255,0.08) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -30, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          position: 'absolute', top: '20%', right: '-12%',
          width: '45vw', height: '45vw', borderRadius: '50%',
          background: dark
            ? 'radial-gradient(circle, rgba(191,90,242,0.10) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        animate={{ x: [0, 50, -10, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        style={{
          position: 'absolute', bottom: '-10%', left: '15%',
          width: '38vw', height: '38vw', borderRadius: '50%',
          background: dark
            ? 'radial-gradient(circle, rgba(48,209,88,0.07) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(48,209,88,0.05) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Dot grid — uses CSS var so it adapts to dark/light */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--dot-grid-color) 1px, transparent 0)',
        backgroundSize: '44px 44px',
        transition: 'background-image 0.35s',
      }} />
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────
export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  // Apply data-theme attribute — CSS handles all variable overrides
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <BackgroundOrbs />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </ThemeContext.Provider>
  );
}
