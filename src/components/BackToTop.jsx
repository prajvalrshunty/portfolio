import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../context/SmoothScrollContext';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollTo } = useLenis();
  const { scrollY, scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 350);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.2, offset: 0 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          {/* Circular SVG Scroll Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            {/* Background Track */}
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-slate-200/60 dark:stroke-white/10"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Dynamic Progress Stroke */}
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                pathLength: smoothProgress,
              }}
            />
          </svg>

          {/* Minimal Arrow Icon */}
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
