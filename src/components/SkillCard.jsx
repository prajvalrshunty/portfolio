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
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

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
    <CardContainer containerClassName="w-full py-1">
      <CardBody className="group relative p-6 sm:p-7 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/75 dark:bg-zinc-950/75 light:bg-white backdrop-blur-md hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-5">
            <CardItem
              translateZ="50"
              className="p-3.5 rounded-xl bg-zinc-900/90 dark:bg-zinc-900 light:bg-zinc-100 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-950/60 transition-colors border border-white/5 dark:border-white/5 light:border-black/5 shadow-inner"
            >
              <IconComponent className="w-5 h-5" />
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5"
            >
              VERIFIED SKILL
            </CardItem>
          </div>

          <CardItem
            translateZ="60"
            as="h3"
            className="text-xl sm:text-2xl font-bold font-display text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors tracking-tight"
          >
            {skill.name}
          </CardItem>

          <CardItem
            translateZ="40"
            as="p"
            className="mt-2.5 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light font-sans"
          >
            {skill.description}
          </CardItem>
        </div>

        <CardItem
          translateZ="50"
          className="mt-6 pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 flex flex-wrap gap-1.5"
        >
          {skill.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 dark:bg-white/5 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5 dark:border-white/5 light:border-black/5"
            >
              {tag}
            </span>
          ))}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
