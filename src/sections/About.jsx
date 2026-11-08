import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Building2, Calendar, Award, MapPin, Sparkles, BrainCircuit } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DaisyTerminal from '../components/DaisyTerminal';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const { name, academics, extendedBio } = personalInfo;

  const infoList = [
    { label: "Name", value: name, icon: User },
    { label: "Education", value: academics.shortDegree, icon: GraduationCap },
    { label: "College", value: academics.shortInstitution, icon: Building2 },
    { label: "Current Year", value: academics.currentYear, icon: Calendar },
    { label: "CGPA", value: `${academics.cgpa} / 10`, icon: Award, highlight: true },
    { label: "Location", value: academics.location, icon: MapPin },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          category="BACKGROUND & PHILOSOPHY"
          title="BEHIND THE CODE."
          subtitle="A student of engineering committed to mathematical rigor, programming discipline, and real-world problem solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg font-normal leading-relaxed font-sans"
          >
            {extendedBio.map((paragraph, idx) => (
              <p key={idx} className="relative">
                {idx === 0 && (
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-xs block mb-1 font-semibold uppercase tracking-wider">
                    // Academic Journey &amp; Focus
                  </span>
                )}
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all duration-300"
              >
                <BrainCircuit className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white font-display">
                  Data &amp; Intelligence
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 font-light leading-relaxed">
                  Focusing on probability, statistics, tabular modeling, and feature engineering with Python and scikit-learn.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(59,130,246,0.1)] hover:border-blue-500/40 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white font-display">
                  Software Engineering
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 font-light leading-relaxed">
                  Practicing clean modular architecture, Git version control, and building reactive web frontends.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Info Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/80 p-6 sm:p-8 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-xl hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100 dark:border-white/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 font-semibold block mb-1">
                    ACADEMIC PROFILE
                  </span>
                  <h3 className="text-xl font-bold font-display text-zinc-950 dark:text-white uppercase">
                    Information Dossier
                  </h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              </div>

              {/* Info Items List */}
              <div className="space-y-4">
                {infoList.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start justify-between py-2 border-b border-slate-100 dark:border-white/5 text-sm"
                    >
                      <div className="flex items-center gap-2.5 text-slate-600 dark:text-zinc-400 font-mono text-xs">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span>{item.label}</span>
                      </div>
                      <span
                        className={`font-medium text-right text-xs sm:text-sm ${
                          item.highlight
                            ? 'text-blue-600 dark:text-blue-400 font-mono font-bold'
                            : 'text-zinc-950 dark:text-white'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Verified academic banner */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-500/10 border border-blue-200/70 dark:border-blue-500/20 text-xs text-slate-700 dark:text-zinc-300 font-mono leading-relaxed flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0" />
                <span>Verified B.E. Computer Science &amp; Engineering (Data Science) student (2025–2029) at BIET Davangere.</span>
              </div>
            </div>
          </div>
        </div>

        {/* DaisyUI Live Telemetry Terminal Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700 dark:text-zinc-300">
                DEVELOPER CONSOLE // DIAGNOSTIC TELEMETRY
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
              ORIGINKIT / DAISYUI MOCKUP-CODE WORKSTATION
            </span>
          </div>
          <DaisyTerminal />
        </motion.div>
      </div>
    </section>
  );
}
