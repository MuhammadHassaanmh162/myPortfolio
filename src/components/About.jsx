import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { PERSONAL, SOCIAL, STATS } from '../data';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function About() {
  return (
    <section id="about" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60, alignItems: 'center',
        }}>
          {/* ── Left: Photo ── */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 320, height: 380 }}>
              {/* Photo card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%', height: '100%', borderRadius: 28,
                  background: 'linear-gradient(135deg, rgba(10,132,255,0.1), rgba(191,90,242,0.1))',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  overflow: 'hidden', position: 'relative',
                }}
              >
                <img
                  src={PERSONAL.profilePhoto}
                  alt={PERSONAL.name}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
                {/* Fallback */}
                <div style={{
                  display: 'none', width: '100%', height: '100%',
                  alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 12,
                }}>
                  <div style={{
                    fontSize: '5rem', fontWeight: 900,
                    background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {PERSONAL.initials}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                    Add profile.jpg to /public
                  </p>
                </div>
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '40%',
                  background: 'linear-gradient(transparent, rgba(5,5,8,0.4))',
                  pointerEvents: 'none',
                }} />
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: -20, right: -30,
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 16, padding: '12px 18px',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div style={{
                  fontSize: '20px', fontWeight: 800,
                  background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {STATS[0].value}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 2 }}>
                  {STATS[0].label}
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{
                  position: 'absolute', bottom: 30, left: -30,
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 16, padding: '12px 18px',
                  boxShadow: 'var(--glass-shadow)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--accent-green)',
                    boxShadow: '0 0 8px var(--accent-green)',
                  }} />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Open to work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <div>
            <motion.div
              variants={fadeUp(0.1)} initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="section-label">About Me</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Crafting Digital<br />
                <span className="gradient-text">Experiences</span>
              </h2>
            </motion.div>

            {PERSONAL.bio.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp(0.18 + i * 0.07)}
                initial="hidden" whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{
                  color: 'var(--text-secondary)', lineHeight: 1.8,
                  fontSize: '16px', marginBottom: 20,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Info grid */}
            <motion.div
              variants={fadeUp(0.32)}
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 12, marginBottom: 36,
              }}
            >
              {[
                { icon: FiMapPin,  text: PERSONAL.location },
                { icon: FiMail,    text: PERSONAL.email },
                { icon: FiPhone,   text: PERSONAL.phone },
                { icon: FiGithub,  text: 'MuhammadHassaanmh162' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '12px 14px', borderRadius: 14,
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <Icon size={14} style={{ color: 'var(--accent-blue)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', wordBreak: 'break-word' }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0.38)}
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 10, marginBottom: 40,
              }}
            >
              {STATS.map(({ value, label }) => (
                <div key={label} style={{
                  textAlign: 'center', padding: '16px 8px',
                  borderRadius: 16,
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                }}>
                  <div style={{
                    fontSize: '1.5rem', fontWeight: 800,
                    background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: 4, lineHeight: 1.3 }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={fadeUp(0.44)}
              initial="hidden" whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <a
                href={PERSONAL.resumePath}
                download={PERSONAL.resumeFilename}
                className="btn-primary"
              >
                <FiDownload size={14} /> Download Resume
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
