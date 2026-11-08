import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-center text-zinc-300 dark:text-zinc-200 light:text-zinc-800"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 transition-colors" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-500 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}
