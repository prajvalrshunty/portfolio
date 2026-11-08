import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCode2,
  Binary,
  Coffee,
  Layout,
  Palette,
  Code,
  Server,
  GitBranch,
  Cpu,
  Database,
  Terminal,
  Sparkles
} from 'lucide-react';
import { Github } from './Icons';

const iconMap = {
  FileCode2,
  Binary,
  Coffee,
  Layout,
  Palette,
  Code,
  Server,
  GitBranch,
  Github,
  Cpu,
  Database,
  Terminal
};

export default function SkillCard({ skill }) {
  const [isTapped, setIsTapped] = useState(false);
  const IconComponent = iconMap[skill.icon] || Code;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsTapped(!isTapped)}
      className="group relative p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/75 backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_12px_28px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_12px_24px_rgba(59,130,246,0.08)] cursor-pointer transition-colors duration-200 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] select-none"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-zinc-900/90 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors duration-300 border border-blue-200/70 dark:border-white/5 shadow-inner">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-md border transition-colors duration-200 ${
            isTapped
              ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30'
              : 'bg-slate-100/90 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border-slate-200/80 dark:border-white/5'
          }`}>
            {isTapped ? "ACTIVE FOCUS" : "VERIFIED SKILL"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight flex items-center justify-between">
          <span>{skill.name}</span>
          {isTapped && (
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          )}
        </h3>

        <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal font-sans">
          {skill.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1.5">
        {skill.tags?.map((tag, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-zinc-300 border border-slate-200/70 dark:border-white/5 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
