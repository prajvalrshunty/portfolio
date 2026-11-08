import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import StatusBadge from '../components/StatusBadge';
import { CardContainer, CardBody, CardItem } from '../components/ThreeDCard';
import InteractivePortrait from '../components/InteractivePortrait';
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
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
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
              <span className="font-mono text-xs sm:text-sm tracking-cinematic text-blue-600 dark:text-blue-400 font-semibold uppercase block">
                {title}
              </span>
              <h2 className="text-xl sm:text-2xl font-mono text-zinc-800 dark:text-zinc-300 tracking-wider">
                {name}
              </h2>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase font-display tracking-tight text-zinc-950 dark:text-white leading-[0.98]"
            >
              <span className="block drop-shadow-sm">{headline.line1}</span>
              <span className="block text-zinc-500 dark:text-zinc-400 font-normal mt-2">
                {headline.line2}
              </span>
            </motion.h1>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed font-sans"
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
              {/* Primary Shimmer CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToWork}
                className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 select-none cursor-pointer"
              >
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:left-[100%] transition-all duration-1000" />
                <span className="relative z-10">EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                href={resume.downloadUrl}
                download={resume.filename}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-white/5 hover:border-blue-500 hover:bg-zinc-50 dark:hover:bg-blue-500/10 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-sm select-none"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </motion.a>

              {/* Quick Socials */}
              <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-zinc-200 dark:border-white/10">
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${contact.email}`}
                  aria-label="Email Prajval"
                  className="p-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-transparent text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500 transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CardContainer containerClassName="w-full max-w-sm sm:max-w-md py-4">
              <CardBody className="relative w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xl dark:shadow-2xl bg-white dark:bg-zinc-950 p-3">
                <CardItem translateZ="20" className="w-full rounded-2xl overflow-hidden relative">
                  <InteractivePortrait
                    src="/images/prajval-portrait.jpg"
                    alt="Prajval R Shunty — Data Science & AI Developer"
                  />
                </CardItem>

                <CardItem
                  translateZ="30"
                  className="absolute -top-2 -right-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-white/15 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 tracking-wider shadow-sm z-30"
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
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-zinc-500 dark:text-zinc-400"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
