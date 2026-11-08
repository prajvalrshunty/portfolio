import React from 'react';
import { motion } from 'framer-motion';
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
  Terminal
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

export default function SkillCard({ skill, index }) {
  const IconComponent = iconMap[skill.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Background subtle hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-zinc-900/90 dark:bg-zinc-900 light:bg-zinc-100 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-950/50 transition-colors border border-white/5 dark:border-white/5 light:border-black/5">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 uppercase">
            ACTIVE SKILL
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors">
          {skill.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
          {skill.description}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 flex flex-wrap gap-1.5">
        {skill.tags?.map((tag, i) => (
          <span
            key={i}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 dark:bg-white/5 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5 dark:border-white/5 light:border-black/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
