import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import StatusBadge from '../components/StatusBadge';
import { CardContainer, CardBody, CardItem } from '../components/ThreeDCard';
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
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain"
    >
      {/* Aceternity-style Ambient Background Beams & Glowing Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle background tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Sizing (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Badge */}
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
              className="space-y-1.5"
            >
              <span className="font-mono text-xs sm:text-sm tracking-cinematic text-blue-400 font-semibold uppercase block">
                {title}
              </span>
              <h2 className="text-xl sm:text-2xl font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 tracking-wider">
                {name}
              </h2>
            </motion.div>

            {/* Main Headline Reveal with Enhanced Font Sizing */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display tracking-tight text-white dark:text-white light:text-zinc-950 leading-[0.98]"
            >
              <span className="block drop-shadow-sm">{headline.line1}</span>
              <span className="block text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-normal mt-2">
                {headline.line2}
              </span>
            </motion.h1>

            {/* Bio paragraph with clean font */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl font-normal leading-relaxed font-sans"
            >
              {bio}
            </motion.p>

            {/* Call to Actions & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary Aceternity Shimmer CTA */}
              <button
                onClick={scrollToWork}
                className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {/* Moving light shimmer effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:left-[100%] transition-all duration-1000" />
                <span className="relative z-10">EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href={resume.downloadUrl}
                download={resume.filename}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-blue-500 hover:bg-blue-500/10 text-white dark:text-white light:text-zinc-900 font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-200"
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
                  className="p-3 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  aria-label="Email Prajval"
                  className="p-3 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Portrait Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CardContainer containerClassName="w-full max-w-sm sm:max-w-md py-4">
              <CardBody className="relative w-full rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl bg-zinc-950 p-3">
                <CardItem translateZ="50" className="w-full rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/avatar-prajval.svg"
                    alt="Prajval R Shunty — Portrait representation"
                    className="w-full h-auto object-cover grayscale contrast-125"
                  />

                  {/* Editorial Floating Data Strip */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/85 backdrop-blur-xl border border-white/10 flex items-center justify-between text-xs font-mono shadow-lg">
                    <div>
                      <span className="text-zinc-400 block text-[10px]">CURRENT FOCUS</span>
                      <span className="text-white font-semibold">Data Science &amp; AI</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 block text-[10px]">AFFILIATION</span>
                      <span className="text-blue-400 font-semibold">BIET Davangere</span>
                    </div>
                  </div>
                </CardItem>

                <CardItem
                  translateZ="70"
                  className="absolute -top-2 -right-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/15 text-[10px] font-mono text-zinc-300 tracking-wider shadow-lg"
                >
                  ID // PRA-01
                </CardItem>
              </CardBody>
            </CardContainer>
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
