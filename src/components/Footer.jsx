import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-zinc-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-200 dark:border-white/5">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white border border-zinc-300 dark:border-white/10 flex items-center justify-center font-editorial font-bold text-xs">
                PR
              </div>
              <span className="font-editorial font-bold text-lg uppercase tracking-tight text-zinc-900 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              {personalInfo.title}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed font-light">
              Undergraduate in Computer Science &amp; Engineering (Data Science) at BIET Davangere, Karnataka. Focused on machine learning, algorithmic problem solving and practical software engineering.
            </p>
          </div>

          {/* Quick links & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold">
              Direct Channels
            </h5>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{personalInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>GitHub (@prajvalrshunty)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick back to top */}
          <div className="md:col-span-3 flex md:flex-col md:items-end justify-between md:justify-start gap-4">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              Back to summit
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900/80 hover:bg-blue-600 dark:hover:bg-blue-600 text-zinc-700 dark:text-zinc-300 hover:text-white dark:hover:text-white transition-all duration-200 group shadow-sm"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Prajval R Shunty. Designed with precision &amp; honesty.</p>
          <p className="flex items-center gap-1.5">
            <span>BIET Davangere</span>
            <span>•</span>
            <span>Karnataka, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
