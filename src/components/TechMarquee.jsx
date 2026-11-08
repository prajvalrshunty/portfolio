import React from 'react';
import {
  BrainCircuit,
  Database,
  Cpu,
  Sparkles,
  ShieldCheck,
  Flame
} from 'lucide-react';
import {
  PythonLogo,
  CLogo,
  JavaLogo,
  JavaScriptLogo,
  NodeLogo,
  GitLogo,
  ReactLogo,
  TailwindLogo
} from './SkillLogos';

export default function TechMarquee() {
  const technologies = [
    { name: "Python 3.x", role: "Core Language & ML", Logo: PythonLogo },
    { name: "Machine Learning", role: "Predictive Analytics", Icon: BrainCircuit, color: "text-blue-500" },
    { name: "scikit-learn", role: "Feature Extraction", Icon: Cpu, color: "text-indigo-500" },
    { name: "React 19", role: "Component Architecture", Logo: ReactLogo },
    { name: "JavaScript / ES6+", role: "Asynchronous Primitives", Logo: JavaScriptLogo },
    { name: "Pandas & NumPy", role: "Tabular Vectorization", Icon: Database, color: "text-cyan-500" },
    { name: "Node.js", role: "Runtime Backend Services", Logo: NodeLogo },
    { name: "C Programming", role: "Pointers & Memory", Logo: CLogo },
    { name: "Java Standard", role: "OOP & Data Structures", Logo: JavaLogo },
    { name: "Tailwind CSS", role: "Utility Design Tokens", Logo: TailwindLogo },
    { name: "Git & GitHub", role: "Disciplined Version Control", Logo: GitLogo },
    { name: "BIET Davangere", role: "B.E. Data Science (7.5 CGPA)", Icon: ShieldCheck, color: "text-blue-600" },
    { name: "Vite 6 Tooling", role: "Next-Gen Bundling & HMR", Icon: Flame, color: "text-amber-500" },
    { name: "Framer Motion", role: "Hardware Physics", Icon: Sparkles, color: "text-pink-500" },
    { name: "Alva's PU College", role: "PCMB Science (2023–2025)", Icon: ShieldCheck, color: "text-emerald-600" }
  ];

  return (
    <div className="relative py-6 sm:py-8 overflow-hidden border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/30">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-blue-500/10 dark:bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Marquee Header Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-wrap items-center justify-between gap-4">
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

      {/* Single Continuous Infinite Ribbon with Edge Fade Masks */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="group flex overflow-hidden select-none gap-4">
          <div className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused]">
            {technologies.concat(technologies).map((item, idx) => (
              <div
                key={`tech-${idx}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.12)] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 cursor-default shrink-0"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 flex items-center justify-center">
                  {item.Logo ? (
                    <item.Logo className="w-4 h-4 shrink-0" />
                  ) : (
                    <item.Icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                  )}
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
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused]"
          >
            {technologies.concat(technologies).map((item, idx) => (
              <div
                key={`tech-dup-${idx}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.12)] hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 cursor-default shrink-0"
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-800/80 flex items-center justify-center">
                  {item.Logo ? (
                    <item.Logo className="w-4 h-4 shrink-0" />
                  ) : (
                    <item.Icon className={`w-4 h-4 shrink-0 ${item.color}`} />
                  )}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
