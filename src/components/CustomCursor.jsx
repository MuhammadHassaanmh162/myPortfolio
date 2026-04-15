import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position for dot (instant)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-lagged position for ring
  const ringX = useSpring(dotX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 180, damping: 22, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on pointer-capable devices
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      const target = e.target;
      const hoverable = target.closest('a, button, [role="button"], input, textarea, select, label, .hoverable');
      setIsHovering(!!hoverable);
      setIsPointer(!!hoverable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [dotX, dotY, isVisible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      {/* Dot — follows instantly */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: dotX, y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0A84FF, #BF5AF2)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 8px rgba(10,132,255,0.8)',
        }}
        transition={{ width: 0.2, height: 0.2 }}
      />

      {/* Ring — follows with spring lag */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: ringX, y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <motion.div
          animate={{
            borderColor: isHovering ? 'rgba(10,132,255,0.6)' : 'rgba(255,255,255,0.25)',
            scale: isHovering ? 1 : 1,
          }}
          style={{
            width: '100%', height: '100%',
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.25)',
            background: isHovering ? 'rgba(10,132,255,0.08)' : 'transparent',
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  );
}
