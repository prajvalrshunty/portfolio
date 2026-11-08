import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with cinematic inertia on desktop, while preserving native touch on mobile
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
      syncTouch: false, // Preserves native 120Hz/60Hz touch momentum on iOS & Android
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Run Lenis on standard requestAnimationFrame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: options.offset ?? -80,
        duration: options.duration ?? 1.15,
        easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        immediate: options.immediate ?? false,
        lock: false,
        ...options,
      });
    } else {
      if (typeof target === 'string') {
        const el = document.querySelector(target.startsWith('#') ? target : `#${target}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
