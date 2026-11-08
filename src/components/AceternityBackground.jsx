import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AceternityBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Aceternity Architectural Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80" />

      {/* 2. Aceternity Spotlight Aura (follows cursor with gentle damping) */}
      <div
        className="hidden md:block absolute w-[600px] h-[600px] rounded-full blur-[140px] transition-transform duration-700 ease-out pointer-events-none opacity-40 dark:opacity-25"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.15) 45%, transparent 70%)',
        }}
      />

      {/* 3. Ambient Breathing Atmospheric Orbs */}
      {/* Top Left Orb */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/15 to-transparent blur-[140px] dark:from-blue-600/25 dark:via-cyan-500/20"
      />

      {/* Center Right Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.10, 0.20, 0.10],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-violet-400/15 to-transparent blur-[150px] dark:from-indigo-600/25 dark:via-purple-600/20"
      />

      {/* Bottom Center Orb */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-blue-400/15 via-emerald-400/10 to-transparent blur-[130px] dark:from-blue-600/20 dark:via-emerald-500/15"
      />

      {/* 4. Aceternity Light Beams (Curved SVG Light Stream Paths) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -100,200 Q 400,100 800,500 T 1800,400"
          fill="none"
          stroke="url(#beamGrad1)"
          strokeWidth="1.5"
          strokeDasharray="120 180"
          animate={{ strokeDashoffset: [0, -1200] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M -50,600 Q 500,400 1100,700 T 2000,550"
          fill="none"
          stroke="url(#beamGrad2)"
          strokeWidth="1"
          strokeDasharray="160 220"
          animate={{ strokeDashoffset: [0, 1400] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
