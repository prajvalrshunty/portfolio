import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AceternityBackground from './components/AceternityBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import { SmoothScrollProvider, useLenis } from './context/SmoothScrollContext';
import { useTheme } from './hooks/useTheme';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  const { scrollTo } = useLenis();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // On the very first load/open, always ensure the top of the home page is displayed
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          scrollTo(element, { offset: -80, duration: 1.15 });
        }, 80);
      }
    } else {
      scrollTo(0, { offset: 0, duration: 0.8 });
    }
  }, [hash, pathname, scrollTo]);

  return null;
}

function MainAppLayout() {
  const { theme, toggleTheme } = useTheme();
  const [showPreloader, setShowPreloader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // When the website first opens, guarantee the user lands on the Home page at the top
    const isFirstVisitInTab = !sessionStorage.getItem('prajval_app_opened');
    if (isFirstVisitInTab) {
      sessionStorage.setItem('prajval_app_opened', 'true');
      if (window.location.pathname !== '/' || window.location.hash) {
        navigate('/', { replace: true });
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-zinc-900 dark:bg-[#080808] dark:text-[#F5F5F7] selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-clip">
      {/* Minimal Top Reading / Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Intro Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Dynamic Background with Ambient Spotlight Beams */}
      <AceternityBackground />

      {/* Fluid Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Anchor & Route Scroll Coordinator */}
      <ScrollToHash />

      {/* Main Routed Content */}
      <div className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Floating Back-to-Top Button with Circular Progress Ring */}
      <BackToTop />

      {/* Comprehensive Editorial Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <MainAppLayout />
    </SmoothScrollProvider>
  );
}
