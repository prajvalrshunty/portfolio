import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  // High-performance springs with zero lag
  const cursorX = useSpring(-100, { damping: 32, stiffness: 450 });
  const cursorY = useSpring(-100, { damping: 32, stiffness: 450 });
  const ringX = useSpring(-100, { damping: 24, stiffness: 240 });
  const ringY = useSpring(-100, { damping: 24, stiffness: 240 });

  useEffect(() => {
    // Strictly enable ONLY on non-touch desktop devices with fine pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const checkPointer = () => setIsPointerDevice(mediaQuery.matches);
    checkPointer();

    if (!mediaQuery.matches) return;

    document.body.classList.add('has-custom-cursor');

    const updatePosition = (clientX, clientY) => {
      cursorX.set(clientX);
      cursorY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    // Use pointerover to automatically detect interactive elements even as the page scrolls
    const handlePointerOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor], .cursor-pointer'
      );
      setIsHovered(Boolean(isInteractive));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('pointerover', handlePointerOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* Primary High-Speed Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.45 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
      />

      {/* Trailing Elastic Ambient Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.9)' : undefined,
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.12)' : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="w-8 h-8 rounded-full border border-zinc-500/40 dark:border-white/30 transition-colors duration-200"
      />
    </div>
  );
}
