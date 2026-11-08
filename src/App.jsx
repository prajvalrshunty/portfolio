import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AceternityBackground from './components/AceternityBackground';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import { useTheme } from './hooks/useTheme';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-zinc-900 dark:bg-[#080808] dark:text-[#F5F5F7] selection:bg-blue-600 selection:text-white transition-colors duration-300 relative">
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <AceternityBackground />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToHash />

      <div className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
