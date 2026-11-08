import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (isHome) {
        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.offsetTop <= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!isHome) {
      navigate('/' + item.href);
      return;
    }

    const target = document.getElementById(item.id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/85 dark:bg-black/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-white/10 shadow-sm dark:shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <Link
              to="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-white/15 text-zinc-900 dark:text-white flex items-center justify-center font-display font-black text-sm tracking-wider group-hover:border-blue-500 transition-colors shadow-sm">
                PR
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white font-display uppercase">
                  Prajval R Shunty
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 -mt-0.5">
                  DATA SCIENCE &amp; AI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/60 shadow-sm backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Cluster */}
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <a
                href={personalInfo.resume.downloadUrl}
                download={personalInfo.resume.filename}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-zinc-100 dark:bg-white/10 hover:bg-blue-600 hover:text-white text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10 transition-all duration-200 font-semibold shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Actions Hamburger & Theme */}
            <div className="flex sm:hidden items-center gap-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-300 hover:text-blue-600 active:scale-95 transition-all"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop click outside to dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-4 top-20 z-40 lg:hidden"
            >
              <div className="rounded-2xl border border-zinc-200 dark:border-white/15 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl p-6 shadow-2xl space-y-4">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      whileTap={{ scale: 0.97 }}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="block px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-300 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-white/10">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href={personalInfo.resume.downloadUrl}
                    download={personalInfo.resume.filename}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume PDF</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
