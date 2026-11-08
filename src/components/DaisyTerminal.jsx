import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Play, CornerDownRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function DaisyTerminal() {
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);

  const terminalCode = `prajval@biet-workstation:~$ python -m telemetry.diagnostics

[>] INITIALIZING ACADEMIC PROFILE...
[✓] Candidate: ${personalInfo.name}
[✓] Program: B.E. CSE (Data Science) • 2nd Year
[✓] Institution: ${personalInfo.academics.institution} (${personalInfo.academics.duration})
[✓] Academic Index: ${personalInfo.academics.cgpa} / 10 CGPA
[✓] Pre-University: ${personalInfo.academics.puc?.institution || "Alva's PU College, Mudbidre"} (2023–2025)
[✓] Primary Repositories:
    - github.com/prajvalrshunty/amzon-clone (HTML/CSS Clone)
    - github.com/prajvalrshunty/prajvalrshunty (Automated CI/CD Profile)
[✓] Objective: Data Science & AI Developer Internship
[★] SYSTEM HEALTH: OPTIMAL (100% VERIFIED RECORDS)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRerun = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 600);
  };

  return (
    <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-slate-900 text-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden font-mono text-xs">
      {/* DaisyUI Mockup-Code Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="text-[11px] text-slate-400 font-mono ml-2 hidden sm:inline">
            bash — telemetry@biet-node: ~
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRerun}
            disabled={running}
            aria-label="Re-execute terminal script"
            className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-[10px] cursor-pointer"
          >
            <Play className={`w-2.5 h-2.5 text-blue-400 ${running ? 'animate-spin' : ''}`} />
            <span>RUN</span>
          </button>

          <button
            onClick={handleCopy}
            aria-label="Copy terminal log"
            className="p-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Terminal Body with DaisyUI Mockup Code styling */}
      <div className="p-4 sm:p-6 space-y-2 leading-relaxed overflow-x-auto select-text font-mono text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <CornerDownRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span className="text-emerald-400 font-semibold">prajval@biet-workstation</span>
          <span className="text-slate-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-300">$ python -m telemetry.diagnostics</span>
        </div>

        <div className={`space-y-1 pt-1 ${running ? 'opacity-30' : 'opacity-100'} transition-opacity`}>
          <div className="text-slate-400">[&gt;] INITIALIZING ACADEMIC PROFILE...</div>
          <div className="text-slate-200">
            [<span className="text-emerald-400">✓</span>] Candidate:{' '}
            <span className="text-white font-bold">{personalInfo.name}</span>
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Program: B.E. CSE (Data Science) • 2nd Year
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Institution:{' '}
            <span className="text-blue-300">{personalInfo.academics.institution}</span> ({personalInfo.academics.duration})
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Academic Index:{' '}
            <span className="text-emerald-400 font-bold">{personalInfo.academics.cgpa} / 10 CGPA</span>
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Pre-University:{' '}
            <span className="text-indigo-300">{personalInfo.academics.puc?.institution || "Alva's PU College, Mudbidre"}</span> (2023–2025)
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Verified Codebases:
            <div className="pl-6 text-slate-400 text-[10px] sm:text-[11px]">
              • github.com/prajvalrshunty/amzon-clone (HTML/CSS Interface)
              <br />
              • github.com/prajvalrshunty/prajvalrshunty (Automated CI/CD Profile)
            </div>
          </div>
          <div className="text-slate-300">
            [<span className="text-emerald-400">✓</span>] Target Role:{' '}
            <span className="text-amber-300">Data Science &amp; AI Developer Intern</span>
          </div>
          <div className="pt-2 text-emerald-400 flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>[★] STATUS: READY FOR INDUSTRY INTERNSHIPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
