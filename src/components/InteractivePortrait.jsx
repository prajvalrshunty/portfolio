import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function InteractivePortrait({
  src = "/images/prajval-portrait.jpg",
  alt = "Prajval R Shunty — Data Science & AI Developer"
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateCoordinates = (clientX, clientY) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setPos({ x, y });
  };

  const handleMouseMove = (e) => {
    updateCoordinates(e.clientX, e.clientY);
    if (!isHovered) {
      setIsHovered(true);
      setHasInteracted(true);
    }
  };

  const handleMouseEnter = (e) => {
    updateCoordinates(e.clientX, e.clientY);
    setIsHovered(true);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 0) return;
    updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
    setIsHovered(true);
    setHasInteracted(true);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 0) return;
    updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const spotlightRadius = 250;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="relative w-full rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 select-none shadow-md group"
    >
      {/* Base Layer:
          - Light Mode: Full original color (no filter)
          - Dark Mode: Black and white (grayscale + high contrast editorial)
      */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center filter transition-all duration-500 ease-out dark:grayscale dark:contrast-115 dark:brightness-95"
        loading="eager"
      />

      {/* Top Reveal Layer (Dark Mode only):
          Full original color masked to cursor/touch coordinates with expanded radius
      */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: isHovered ? 'opacity 0.2s ease-out' : 'opacity 0.5s ease-in',
          maskImage: `radial-gradient(circle ${spotlightRadius}px at ${pos.x}px ${pos.y}px, black 35%, transparent 90%)`,
          WebkitMaskImage: `radial-gradient(circle ${spotlightRadius}px at ${pos.x}px ${pos.y}px, black 35%, transparent 90%)`,
        }}
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Subtle color aura indicator at cursor point (Dark Mode) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-0 hidden dark:block z-10 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle ${spotlightRadius * 0.8}px at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`,
          }}
        />
      )}

      {/* Interactive Hint Pill in Dark Mode (fades out after interaction) */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 left-4 z-20 hidden dark:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-blue-300 shadow-lg pointer-events-none"
          >
            <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
            <span>Hover / touch to reveal color</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Floating Data Strip */}
      <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 dark:bg-black/85 backdrop-blur-xl border border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs font-mono shadow-md z-20 pointer-events-none">
        <div>
          <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">CURRENT FOCUS</span>
          <span className="text-zinc-950 dark:text-white font-semibold">Data Science &amp; AI</span>
        </div>
        <div className="text-right">
          <span className="text-zinc-500 dark:text-zinc-400 block text-[10px]">AFFILIATION</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">BIET Davangere</span>
        </div>
      </div>
    </div>
  );
}