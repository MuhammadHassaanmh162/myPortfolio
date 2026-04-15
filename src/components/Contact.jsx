import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';
import { PERSONAL, SOCIAL, EMAILJS } from '../data';

const CONTACT_ITEMS = [
  { icon: FiMail,   label: 'Email',    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}`,     color: '#0A84FF' },
  { icon: FiPhone,  label: 'Phone',    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone.replace(/\s/g,'')}`, color: '#30D158' },
  { icon: FiMapPin, label: 'Location', value: PERSONAL.location, href: '#',                             color: '#BF5AF2' },
];

const SOCIALS = [
  { icon: FiGithub,   label: 'GitHub',   href: SOCIAL.github,   color: 'var(--text-primary)' },
  { icon: FiLinkedin, label: 'LinkedIn', href: SOCIAL.linkedin,  color: '#0A84FF' },
  { icon: FiMail,     label: 'Email',    href: SOCIAL.email,     color: '#BF5AF2' },
];

const INIT = { name: '', email: '', subject: '', message: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim())    e.name    = 'Name is required';
  if (!f.email.trim())   e.email   = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(f.email)) e.email = 'Enter a valid email';
  if (!f.subject.trim()) e.subject = 'Subject is required';
  if (!f.message.trim()) e.message = 'Message is required';
  else if (f.message.trim().length < 20)  e.message = 'Minimum 20 characters';
  return e;
}

export default function Contact() {
  const [form, setForm]     = useState(INIT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        EMAILJS.publicKey,
      );
      setStatus('success');
      setForm(INIT);
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" style={{ padding: 'var(--section-py) 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', marginTop: 14,
            fontSize: '16px', maxWidth: 460, margin: '14px auto 0',
          }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40, alignItems: 'start',
        }}>
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 style={{
              fontSize: '1.2rem', fontWeight: 700,
              color: 'var(--text-primary)', marginBottom: 8,
            }}>
              Get In Touch
            </h3>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '14.5px',
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Whether you have a question, a project idea, or just want to say hi — my inbox is
              always open. I'll get back to you as soon as possible!
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, borderColor: `${color}44` }}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'center',
                    padding: '14px 18px', borderRadius: 16,
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: `${color}14`, border: `1px solid ${color}28`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color, fontSize: '17px', flexShrink: 0,
                  }}>
                    <Icon />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '10.5px', color: 'var(--text-tertiary)',
                      marginBottom: 2, fontWeight: 600, letterSpacing: '0.09em', textTransform: 'uppercase',
                    }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <p style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em',
              color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 14,
            }}>
              Find me on
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3, borderColor: `${color}50` }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 44, height: 44, borderRadius: 13,
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    fontSize: '18px', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = color}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid var(--glass-border)',
              borderRadius: 24, padding: '32px',
              boxShadow: 'var(--glass-shadow)',
            }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <FeedbackState
                  key="success"
                  icon={<FiCheckCircle />}
                  iconColor="var(--accent-green)"
                  title="Message Sent!"
                  body="Thank you for reaching out. I'll get back to you very soon!"
                />
              ) : status === 'error' ? (
                <FeedbackState
                  key="error"
                  icon={<FiAlertCircle />}
                  iconColor="#FF453A"
                  title="Something went wrong"
                  body="Please check your EmailJS config, or email me directly."
                  action={<button onClick={() => setStatus('idle')} className="btn-primary">Try Again</button>}
                />
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
                >
                  <h3 style={{
                    fontSize: '1.05rem', fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: 2,
                  }}>
                    Send a Message
                  </h3>

                  {/* Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <Field label="Name"  name="name"  type="text"  placeholder="John Doe"           value={form.name}    onChange={handleChange} error={errors.name} />
                    <Field label="Email" name="email" type="email" placeholder="john@example.com"  value={form.email}   onChange={handleChange} error={errors.email} />
                  </div>

                  <Field label="Subject" name="subject" type="text" placeholder="Project collaboration..." value={form.subject} onChange={handleChange} error={errors.subject} />

                  {/* Message */}
                  <div>
                    <FieldLabel>Message</FieldLabel>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or say hello..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={e  => e.target.style.borderColor = 'rgba(10,132,255,0.5)'}
                      onBlur={e   => e.target.style.borderColor = errors.message ? '#FF453A' : 'var(--glass-border)'}
                      style={inputStyle(!!errors.message)}
                    />
                    {errors.message && <ErrMsg>{errors.message}</ErrMsg>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      gap: 8, padding: '13px 28px', borderRadius: 50,
                      background: status === 'loading'
                        ? 'rgba(128,128,128,0.15)'
                        : 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
                      color: status === 'loading' ? 'var(--text-secondary)' : '#fff',
                      border: 'none', cursor: 'inherit',
                      fontSize: '14.5px', fontWeight: 600,
                      boxShadow: status === 'loading' ? 'none' : '0 8px 24px rgba(10,132,255,0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ display: 'inline-flex', fontSize: '16px' }}
                        >
                          ⟳
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <><FiSend size={15} /> Send Message</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────
function FeedbackState({ icon, iconColor, title, body, action }) {
  return (
    <motion.div
      key="feedback"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 14, minHeight: 280, textAlign: 'center',
      }}
    >
      <div style={{ color: iconColor, fontSize: '3rem' }}>{icon}</div>
      <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h4>
      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: 280 }}>{body}</p>
      {action}
    </motion.div>
  );
}

function inputStyle(hasError) {
  return {
    width: '100%', padding: '11px 14px', borderRadius: 11,
    background: 'rgba(128,128,128,0.08)',
    border: `1px solid ${hasError ? '#FF453A' : 'var(--glass-border)'}`,
    color: 'var(--text-primary)', fontSize: '14px',
    fontFamily: 'var(--font)', resize: 'vertical',
    outline: 'none', transition: 'border-color 0.2s',
  };
}

function FieldLabel({ children }) {
  return (
    <label style={{
      display: 'block', fontSize: '12px', fontWeight: 600,
      color: 'var(--text-secondary)', marginBottom: 7,
      letterSpacing: '0.05em',
    }}>
      {children}
    </label>
  );
}

function ErrMsg({ children }) {
  return <p style={{ color: '#FF453A', fontSize: '12px', marginTop: 4 }}>{children}</p>;
}

function Field({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type} name={name} placeholder={placeholder}
        value={value} onChange={onChange}
        onFocus={e => e.target.style.borderColor = 'rgba(10,132,255,0.5)'}
        onBlur={e  => e.target.style.borderColor = error ? '#FF453A' : 'var(--glass-border)'}
        style={{ ...inputStyle(!!error), resize: 'none' }}
      />
      {error && <ErrMsg>{error}</ErrMsg>}
    </div>
  );
}
