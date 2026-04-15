import { motion } from 'framer-motion';
import { FiGithub, FiMapPin, FiSmartphone, FiCpu, FiExternalLink } from 'react-icons/fi';
import { PROJECTS, SOCIAL } from '../data';

// Map iconKey strings → react-icons components
const ICON_MAP = { FiMapPin, FiSmartphone, FiCpu };

export default function Projects() {
  return (
    <section id="projects" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', marginTop: 14,
            fontSize: '16px', maxWidth: 460, margin: '14px auto 0',
          }}>
            A selection of projects showcasing my full-stack and AI development skills
          </p>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p style={{ color: 'var(--text-secondary)', marginBottom: 18, fontSize: '15px' }}>
            Explore more of my work on GitHub
          </p>
          <motion.a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 50,
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)', textDecoration: 'none',
              fontSize: '14px', fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            <FiGithub size={16} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { title, subtitle, description, iconKey, gradient, glowColor, tags, github, badge } = project;
  const Icon = ICON_MAP[iconKey] ?? FiCpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        whileHover={{
          boxShadow: `0 24px 72px ${glowColor}`,
          borderColor: 'var(--glass-border-hover)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--glass-border)',
          borderRadius: 24, padding: '32px',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 24, alignItems: 'start',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Icon */}
        <div style={{
          width: 58, height: 58, borderRadius: 18,
          background: gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '24px', color: '#fff', flexShrink: 0,
          boxShadow: `0 8px 24px ${glowColor}`,
        }}>
          <Icon />
        </div>

        {/* Content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
            <h3 style={{
              fontSize: '1.3rem', fontWeight: 800,
              color: 'var(--text-primary)', letterSpacing: '-0.02em',
            }}>
              {title}
            </h3>
            <span style={{
              padding: '3px 10px', borderRadius: 50,
              background: 'rgba(10,132,255,0.1)',
              border: '1px solid rgba(10,132,255,0.18)',
              fontSize: '11px', fontWeight: 600, color: 'var(--accent-blue)',
            }}>
              {badge}
            </span>
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--accent-blue)', fontWeight: 500, marginBottom: 12 }}>
            {subtitle}
          </p>

          <p style={{
            color: 'var(--text-secondary)', lineHeight: 1.7,
            fontSize: '14px', marginBottom: 20,
          }}>
            {description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {tags.map(tag => (
              <span key={tag} style={{
                padding: '4px 11px', borderRadius: 50,
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <div style={{ flexShrink: 0 }}>
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 40, height: 40, borderRadius: 12,
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontSize: '16px', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FiGithub />
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile layout fix */}
      <style>{`
        @media (max-width: 600px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  );
}
