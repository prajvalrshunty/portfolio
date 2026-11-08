import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const steps = [
    { label: "BOOTING KERNEL & ENVIRONMENT", code: "INIT_ENV_01" },
    { label: "CONNECTING BIET DAVANGERE TELEMETRY", code: "BIET_DS_2025" },
    { label: "CALIBRATING 3D VIEWPORT & SPOTLIGHT", code: "GL_RENDER_OK" },
    { label: "MOUNTING REPOSITORIES & RESUME", code: "SYS_MOUNTED" },
    { label: "PRAJVAL R SHUNTY // READY", code: "ONLINE_200" }
  ];

  useEffect(() => {
    // Quick, smooth progress increment reaching 100% in ~1.6s
    const startTime = Date.now();
    const duration = 1500; // ms

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      const calculatedStep = Math.min(
        steps.length - 1,
        Math.floor((currentProgress / 100) * steps.length)
      );
      setStepIndex(calculatedStep);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 250);
      }
    }, 25);

    // Escape key to skip instantly
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        setProgress(100);
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#080808] text-white p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Aceternity Style Background Grid & Ambient Glows */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-subtle" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Status Header Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span className="tracking-widest uppercase text-blue-400 font-semibold">
                SYSTEM TELEMETRY
              </span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-zinc-400 hidden sm:inline">PRAJVAL R SHUNTY</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-zinc-500 hidden md:inline">
                BIET DAVANGERE // DATA SCIENCE
              </span>
              <button
                onClick={handleSkip}
                className="px-3 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors text-[11px] tracking-wider font-mono flex items-center gap-1 cursor-pointer"
              >
                <span>SKIP [ESC]</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Center Stage: Monogram, Radial Rings, Counter & Ticker */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-8 text-center">
            {/* Monogram with animated orbital ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer rotating dashed ring */}
              <div className="absolute w-28 h-28 rounded-full border border-dashed border-blue-500/40 animate-spin-slow" />
              {/* Inner pulsed ring */}
              <div className="absolute w-20 h-20 rounded-full border border-blue-400/20 animate-ping opacity-30" />
              {/* Center Emblem */}
              <div className="w-16 h-16 rounded-2xl bg-zinc-900/90 border border-white/15 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                <span className="font-editorial font-bold text-2xl text-white tracking-tighter">
                  PR
                </span>
              </div>
            </div>

            {/* Giant Monospace Percentage Display */}
            <div className="space-y-2">
              <div className="text-6xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-white flex items-baseline justify-center">
                <span>{String(progress).padStart(2, '0')}</span>
                <span className="text-2xl sm:text-3xl text-blue-500 font-mono font-light ml-1">%</span>
              </div>

              {/* Dynamic Status Step */}
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-zinc-400"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>{steps[stepIndex].label}</span>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px]">
                  {steps[stepIndex].code}
                </span>
              </motion.div>
            </div>

            {/* DaisyUI Style Progress Bar */}
            <div className="w-64 sm:w-80 md:w-96">
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-zinc-500">
                <span>LOC: KARNATAKA, IN</span>
                <span>STATUS: {progress < 100 ? "CALIBRATING" : "ONLINE"}</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Footer Strip */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>REACT 19 • VITE 6 • TAILWIND 3.4 • FRAMER MOTION</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LAT: 14.4644° N</span>
              <span>LON: 75.9218° E</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                VERIFIED
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
