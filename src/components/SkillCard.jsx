import React from 'react';
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

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.icon] || Code;

  return (
    <div className="group relative p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950/75 backdrop-blur-md hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_12px_24px_rgba(59,130,246,0.06)] transition-all duration-300 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-zinc-900/90 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors border border-blue-100 dark:border-white/5 shadow-inner">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5">
            VERIFIED SKILL
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
          {skill.name}
        </h3>

        <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal font-sans">
          {skill.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-white/5 flex flex-wrap gap-1.5">
        {skill.tags?.map((tag, i) => (
          <span
            key={i}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
