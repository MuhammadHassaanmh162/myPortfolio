import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiPython,
  SiJavascript, SiHtml5, SiCss, SiExpress, SiFlask,
  SiMysql, SiFirebase, SiGit, SiGithub, SiPostman,
  SiTensorflow, SiPhp, SiDotnet, SiBootstrap, SiNpm,
} from 'react-icons/si';
import { useTheme } from '../App';
import { SKILL_CATEGORIES, SPECIALIZATIONS } from '../data';

// Map data.js iconKey strings → react-icons components
const ICON_MAP = {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiPython,
  SiJavascript, SiHtml5, SiCss, SiExpress, SiFlask,
  SiMysql, SiFirebase, SiGit, SiGithub, SiPostman,
  SiTensorflow, SiPhp, SiDotnet, SiBootstrap, SiNpm,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);
  const { dark } = useTheme();

  // Resolve 'NEUTRAL' icon color for icons that are white-on-dark
  const resolveColor = (color) =>
    color === 'NEUTRAL' ? (dark ? '#9a9a9e' : '#555558') : color;

  const active = SKILL_CATEGORIES.find(c => c.id === activeTab);

  return (
    <section id="skills" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Technical Skills</p>
          <h2 className="section-title">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', marginTop: 14,
            fontSize: '16px', maxWidth: 460, margin: '14px auto 0',
          }}>
            Technologies I use to build powerful, scalable applications
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 8, flexWrap: 'wrap', marginBottom: 44,
          }}
        >
          {SKILL_CATEGORIES.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '9px 20px', borderRadius: 50,
                background: activeTab === cat.id
                  ? 'linear-gradient(135deg, #0A84FF, #BF5AF2)'
                  : 'var(--glass-bg)',
                border: activeTab === cat.id
                  ? 'none'
                  : '1px solid var(--glass-border)',
                color: activeTab === cat.id ? '#fff' : 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 600,
                cursor: 'inherit',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
            gap: 14, marginBottom: 60,
          }}
        >
          {active.skills.map(({ name, iconKey, color, level }, i) => {
            const Icon = ICON_MAP[iconKey];
            const effectiveColor = resolveColor(color);
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.055, duration: 0.35 }}
                whileHover={{
                  y: -6,
                  borderColor: effectiveColor + '55',
                  boxShadow: `0 16px 44px ${effectiveColor}20`,
                  background: `${effectiveColor}08`,
                }}
                style={{
                  padding: '22px 18px', borderRadius: 20,
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  transition: 'all 0.3s ease', cursor: 'default',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 50, height: 50, borderRadius: 14,
                  background: `${effectiveColor}14`,
                  border: `1px solid ${effectiveColor}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '23px', color: effectiveColor,
                }}>
                  {Icon ? <Icon /> : null}
                </div>

                {/* Name */}
                <span style={{
                  fontSize: '12.5px', fontWeight: 600,
                  color: 'var(--text-primary)', textAlign: 'center',
                }}>
                  {name}
                </span>

                {/* Progress bar */}
                <div style={{
                  width: '100%', height: 3,
                  background: 'rgba(128,128,128,0.15)',
                  borderRadius: 9999, overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 0.75, delay: i * 0.055 + 0.15, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${effectiveColor}, ${effectiveColor}88)`,
                      borderRadius: 9999,
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: -6 }}>
                  {level}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            textAlign: 'center', fontSize: '12px', fontWeight: 600,
            color: 'var(--text-tertiary)', letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: 22,
          }}>
            Specializations
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {SPECIALIZATIONS.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.045 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(10,132,255,0.35)' }}
                style={{
                  padding: '7px 15px', borderRadius: 50,
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  fontSize: '13px', color: 'var(--text-secondary)',
                  fontWeight: 500, cursor: 'default',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
