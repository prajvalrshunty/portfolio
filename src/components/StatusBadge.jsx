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
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      aria-label="View Internship Availability"
      className="relative p-[1px] inline-flex items-center rounded-full overflow-hidden group select-none cursor-pointer"
    >
      {/* Aceternity Moving Gradient Border Beam */}
      <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#3B82F6_50%,#10B981_100%)] opacity-75 animate-spin-slow" />

      {/* Inner Badge Pill Surface */}
      <span className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-950 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold tracking-wide shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{text}</span>
      </span>
    </motion.button>
  );
}
