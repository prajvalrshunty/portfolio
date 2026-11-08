import React from 'react';
import { motion } from 'framer-motion';

export default function StatusBadge({
  text = "OPEN TO INTERNSHIP OPPORTUNITIES",
  variant = "emerald",
  onClick
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const el = document.getElementById('experience') || document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      aria-label="View Internship Availability"
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/20 backdrop-blur-sm text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.15)] cursor-pointer transition-colors duration-200 select-none text-left"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{text}</span>
    </motion.button>
  );
}
