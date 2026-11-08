import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import StatusBadge from '../components/StatusBadge';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const { name, title, headline, bio, status, resume, contact } = personalInfo;

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain"
    >
      {/* Cinematic ambient glow effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatusBadge text={status.label} />
            </motion.div>

            {/* Name and Designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <span className="font-mono text-xs sm:text-sm tracking-cinematic text-blue-400 font-semibold uppercase block">
                {title}
              </span>
              <h2 className="text-xl sm:text-2xl font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 tracking-wider">
                {name}
              </h2>
            </motion.div>

            {/* Main Headline Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase font-editorial tracking-tight text-white dark:text-white light:text-zinc-950 leading-[1.05]"
            >
              <span>{headline.line1}</span>
              <br />
              <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light">
                {headline.line2}
              </span>
            </motion.h1>

            {/* Introduction paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl font-light leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* Call to Actions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary CTA */}
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href={resume.downloadUrl}
                download={resume.filename}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-blue-500 hover:bg-blue-500/10 text-white dark:text-white light:text-zinc-900 font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Quick Socials */}
              <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/10 dark:border-white/10 light:border-black/10">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email Prajval"
                  className="p-2.5 rounded-lg border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Editorial Portrait Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Artistic border frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl bg-zinc-950">
                <img
                  src="/images/avatar-prajval.svg"
                  alt="Prajval R Shunty — Portrait representation"
                  className="w-full h-auto object-cover grayscale contrast-125"
                />

                {/* Editorial Floating Data Strip */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-zinc-400 block text-[10px]">CURRENT FOCUS</span>
                    <span className="text-white font-semibold">Data Science &amp; AI</span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-400 block text-[10px]">AFFILIATION</span>
                    <span className="text-blue-400 font-semibold">BIET Davangere</span>
                  </div>
                </div>
              </div>

              {/* Decorative architectural coordinate accent */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded bg-zinc-900 border border-white/10 text-[10px] font-mono text-zinc-400 tracking-wider">
                ID // PRA-01
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
