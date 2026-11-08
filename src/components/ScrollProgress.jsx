import React from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none overflow-hidden"
    >
      <motion.div
        style={{ scaleX }}
        className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 origin-left shadow-[0_0_10px_rgba(59,130,246,0.6)]"
      />
    </div>
  );
}
