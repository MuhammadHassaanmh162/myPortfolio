import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#050508',
        gap: 48,
      }}
    >
      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        {/* Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 80, height: 80,
            borderRadius: '50%',
            border: '2px solid transparent',
            background: 'linear-gradient(#050508, #050508) padding-box, linear-gradient(135deg, #0A84FF, #BF5AF2) border-box',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          {/* Inner dot */}
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
          }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontSize: '2.5rem', fontWeight: 800,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ color: '#48484A', fontSize: '12px', letterSpacing: '0.2em', marginTop: 8, textTransform: 'uppercase' }}
        >
          Loading
        </motion.p>
      </motion.div>

      {/* Progress Track */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          width: 180, height: 2,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 9999, overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #0A84FF, #BF5AF2)',
            borderRadius: 9999,
            boxShadow: '0 0 10px rgba(10,132,255,0.6)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
