import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionHeading({
  number,
  category,
  title,
  subtitle,
  align = 'left',
}) {
  const isCentered = align === 'center';
  const prefersReducedMotion = useReducedMotion();

  // Split title into words for kinetic mask slide reveal
  const words = typeof title === 'string' ? title.split(' ') : [title];

  return (
    <div
      className={`mb-14 md:mb-18 relative z-10 ${
        isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'
      }`}
    >
      {/* Category / Kicker Badge */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-center gap-3 mb-3.5 ${
          isCentered ? 'justify-center' : ''
        }`}
      >
        {number && (
          <span className="font-mono text-xs text-blue-600 dark:text-blue-400 tracking-widest font-semibold px-2.5 py-0.5 rounded-md border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 shadow-xs">
            // {number}
          </span>
        )}
        {category && (
          <span className="text-xs uppercase tracking-cinematic text-zinc-500 dark:text-zinc-400 font-mono font-medium">
            {category}
          </span>
        )}
      </motion.div>

      {/* Kinetic Heading Reveal */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 dark:text-white font-display uppercase leading-[1.05]"
        aria-label={title}
      >
        {prefersReducedMotion ? (
          <span>{title}</span>
        ) : (
          words.map((word, index) => (
            <span
              key={index}
              className="inline-block overflow-hidden mr-[0.25em] align-top"
            >
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))
        )}
      </h2>

      {/* Subtitle with soft fade & upward drift */}
      {subtitle && (
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal max-w-2xl leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Expanding Gradient Rule Line */}
      <motion.div
        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500/40 to-transparent ${
          isCentered ? 'mx-auto max-w-xs origin-center' : 'max-w-md origin-left'
        }`}
      />
    </div>
  );
}
