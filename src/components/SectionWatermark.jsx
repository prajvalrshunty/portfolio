import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function SectionWatermark({ number }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  if (prefersReducedMotion || !number) {
    return null;
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute top-2 right-4 sm:right-8 lg:right-16 pointer-events-none select-none overflow-hidden z-0"
    >
      <motion.span
        style={{ y }}
        className="block font-display font-black text-7xl sm:text-9xl md:text-[13rem] leading-none text-slate-900/[0.03] dark:text-white/[0.03] tracking-tighter"
      >
        {number}
      </motion.span>
    </div>
  );
}
