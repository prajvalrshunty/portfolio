import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = "left"
}) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-18 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}
    >
      <div className={`flex items-center gap-3 mb-3.5 ${isCentered ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs text-blue-400 tracking-widest font-semibold px-2.5 py-0.5 rounded-md border border-blue-500/20 bg-blue-500/10 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
            // {number}
          </span>
        )}
        {category && (
          <span className="text-xs uppercase tracking-cinematic text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono font-medium">
            {category}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white dark:text-white light:text-zinc-950 font-display uppercase leading-[1.05]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-normal max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}

      <div className={`mt-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500/30 to-transparent ${isCentered ? 'mx-auto max-w-xs' : 'max-w-md'}`} />
    </motion.div>
  );
}
