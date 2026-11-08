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
      className={`mb-16 md:mb-20 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${isCentered ? 'justify-center' : ''}`}>
        {number && (
          <span className="font-mono text-xs text-blue-500 tracking-widest font-semibold px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/5">
            // {number}
          </span>
        )}
        {category && (
          <span className="text-xs uppercase tracking-cinematic text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono font-medium">
            {category}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 font-editorial uppercase leading-[1.08]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-6 h-[1px] bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent ${isCentered ? 'mx-auto max-w-xs' : 'max-w-md'}`} />
    </motion.div>
  );
}
