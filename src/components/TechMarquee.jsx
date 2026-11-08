import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Database,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  ShieldCheck,
  Flame,
  Globe,
  Binary
} from 'lucide-react';

export default function TechMarquee() {
  const row1 = [
    { name: "Python 3.x", role: "Core Language & ML", icon: Terminal, color: "text-amber-500 dark:text-amber-400" },
    { name: "Machine Learning", role: "Predictive Analytics", icon: BrainCircuit, color: "text-blue-500 dark:text-blue-400" },
    { name: "scikit-learn", role: "Feature Extraction", icon: Cpu, color: "text-indigo-500 dark:text-indigo-400" },
    { name: "Pandas & NumPy", role: "Tabular Vectorization", icon: Database, color: "text-cyan-500 dark:text-cyan-400" },
    { name: "C Programming", role: "Pointers & Memory", icon: Binary, color: "text-emerald-500 dark:text-emerald-400" },
    { name: "Java Standard", role: "OOP & Data Structures", icon: Code2, color: "text-orange-500 dark:text-orange-400" },
    { name: "SQL & Analytics", role: "Relational Queries", icon: Database, color: "text-sky-500 dark:text-sky-400" },
    { name: "BIET Davangere", role: "B.E. Data Science (7.5 CGPA)", icon: ShieldCheck, color: "text-blue-600 dark:text-blue-400" }
  ];

  const row2 = [
    { name: "React 19", role: "Modern Component Architecture", icon: Sparkles, color: "text-cyan-500 dark:text-cyan-400" },
    { name: "JavaScript / ES6+", role: "Asynchronous Primitives", icon: Terminal, color: "text-yellow-500 dark:text-yellow-400" },
    { name: "Node.js", role: "Runtime Backend Services", icon: Globe, color: "text-emerald-500 dark:text-emerald-400" },
    { name: "Tailwind CSS", role: "Utility Design Tokens", icon: Layers, color: "text-sky-500 dark:text-sky-400" },
    { name: "Git & GitHub", role: "Disciplined Version Control", icon: GitBranch, color: "text-purple-500 dark:text-purple-400" },
    { name: "Vite 6 Tooling", role: "Next-Gen Bundling & HMR", icon: Flame, color: "text-amber-500 dark:text-amber-400" },
    { name: "Framer Motion", role: "Hardware-Accelerated Physics", icon: Sparkles, color: "text-pink-500 dark:text-pink-400" },
    { name: "Alva's PU College", role: "PCMB Science (2023–2025)", icon: ShieldCheck, color: "text-emerald-600 dark:text-emerald-400" }
  ];

  return (
    <div className="relative py-12 overflow-hidden border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/30">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Marquee Header Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-600 dark:text-zinc-400 font-semibold">
            ENGINEERING STACK &amp; CAPABILITIES
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500 hidden sm:inline">
          HOVER TO PAUSE STREAM
        </span>
      </div>

      {/* Edge Gradient Mask for continuous fade */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Row 1: Scrolling Left */}
        <div className="group flex overflow-hidden select-none gap-4 mb-4">
          <div className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused]">
            {row1.concat(row1).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.12)] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 cursor-default shrink-0"
                >
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-mono font-bold text-zinc-950 dark:text-white block">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block tracking-tight">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          >
            {row1.concat(row1).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r1-dup-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.12)] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 cursor-default shrink-0"
                >
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-mono font-bold text-zinc-950 dark:text-white block">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block tracking-tight">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Reverse) */}
        <div className="group flex overflow-hidden select-none gap-4">
          <div className="flex shrink-0 gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {row2.concat(row2).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.12)] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 cursor-default shrink-0"
                >
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-mono font-bold text-zinc-950 dark:text-white block">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block tracking-tight">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 gap-4 animate-marquee-reverse group-hover:[animation-play-state:paused]"
          >
            {row2.concat(row2).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r2-dup-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.12)] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 cursor-default shrink-0"
                >
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-mono font-bold text-zinc-950 dark:text-white block">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block tracking-tight">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
