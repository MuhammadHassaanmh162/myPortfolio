import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Background</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 48,
        }}>
          {/* ── Work Experience column ── */}
          <div>
            <SectionHeading icon={FiBriefcase} label="Work Experience" color="#0A84FF" delay={0} />

            {/* Timeline */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: 17, top: 0, bottom: 0, width: 1,
                background: 'linear-gradient(180deg, rgba(10,132,255,0.35) 0%, rgba(191,90,242,0.35) 50%, transparent 100%)',
              }} />
              {EXPERIENCES.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div>
            {/* Education */}
            <SectionHeading icon={FiBook} label="Education" color="#BF5AF2" delay={0.1} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  whileHover={{ y: -3, borderColor: `${edu.color}44` }}
                  style={{
                    padding: '18px 22px', borderRadius: 18,
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: edu.color, marginBottom: 10,
                    boxShadow: `0 0 8px ${edu.color}`,
                  }} />
                  <h4 style={{
                    fontSize: '14px', fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 4,
                  }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: '13px', color: edu.color, fontWeight: 500, marginBottom: 8 }}>
                    {edu.institution}
                  </p>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    <MetaTag icon={FiCalendar} text={edu.period} />
                    <MetaTag icon={FiMapPin} text={edu.location} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <SectionHeading icon={FiAward} label="Achievements" color="#FF9F0A" delay={0.2} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ACHIEVEMENTS.map(({ text, icon }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    padding: '13px 16px', borderRadius: 14,
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '16px', flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ icon: Icon, label, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: `${color}18`,
        border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, fontSize: '16px',
      }}>
        <Icon />
      </div>
      <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>
        {label}
      </h3>
    </motion.div>
  );
}

function MetaTag({ icon: Icon, text }) {
  return (
    <span style={{
      fontSize: '12px', color: 'var(--text-tertiary)',
      display: 'flex', alignItems: 'center', gap: 4,
    }}>
      <Icon size={11} /> {text}
    </span>
  );
}

function ExperienceCard({ exp, index }) {
  const { role, company, location, period, current, color, description, tags } = exp;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', paddingLeft: 48, paddingBottom: 28 }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: 0, top: 4,
        width: 34, height: 34, borderRadius: '50%',
        background: `${color}14`, border: `2px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 0 14px ${color}38`, zIndex: 1,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4, borderColor: `${color}33` }}
        transition={{ duration: 0.22 }}
        style={{
          padding: '18px 20px', borderRadius: 18,
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
            {role}
          </h4>
          {current && (
            <span style={{
              padding: '2px 8px', borderRadius: 50,
              background: 'rgba(48,209,88,0.12)',
              border: '1px solid rgba(48,209,88,0.25)',
              fontSize: '10px', fontWeight: 700,
              color: 'var(--accent-green)', letterSpacing: '0.04em',
            }}>
              NOW
            </span>
          )}
        </div>
        <p style={{ fontSize: '13px', color, fontWeight: 500, marginTop: 2, marginBottom: 8 }}>
          {company}
        </p>

        {/* Meta */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 12, flexWrap: 'wrap' }}>
          <MetaTag icon={FiCalendar} text={period} />
          <MetaTag icon={FiMapPin} text={location} />
        </div>

        {/* Bullets */}
        <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 12 }}>
          {description.map((d, i) => (
            <li key={i} style={{
              fontSize: '13px', color: 'var(--text-secondary)',
              lineHeight: 1.65, marginBottom: 5,
              paddingLeft: 14, position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: 0, top: '0.48em',
                width: 4, height: 4, borderRadius: '50%', background: color,
              }} />
              {d}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px', borderRadius: 50,
              background: `${color}10`,
              border: `1px solid ${color}25`,
              fontSize: '11px', color, fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
