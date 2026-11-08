import React from 'react';
import { motion } from 'framer-motion';

export default function StatusBadge({
  text = "OPEN TO INTERNSHIP OPPORTUNITIES",
  variant = "emerald"
}) {
  const isEmerald = variant === "emerald";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 backdrop-blur-sm text-xs font-mono text-emerald-400 font-medium tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.15)]"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{text}</span>
    </motion.div>
  );
}
