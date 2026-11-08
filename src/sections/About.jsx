import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Building2, Calendar, Award, MapPin, Sparkles, BrainCircuit } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const { name, academics, extendedBio, location } = personalInfo;

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
            className="lg:col-span-7 space-y-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-base sm:text-lg font-light leading-relaxed"
          >
            {extendedBio.map((paragraph, idx) => (
              <p key={idx} className="relative">
                {idx === 0 && (
                  <span className="text-blue-500 font-mono text-sm block mb-1 font-semibold uppercase tracking-wider">
                    // Academic Journey &amp; Focus
                  </span>
                )}
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white backdrop-blur-md">
                <BrainCircuit className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 font-mono">
                  Data &amp; Intelligence
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 font-light leading-relaxed">
                  Focusing on probability, statistics, tabular modeling, and feature engineering with Python and scikit-learn.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-indigo-400 mb-2" />
                <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 font-mono">
                  Software Engineering
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 font-light leading-relaxed">
                  Practicing clean modular architecture, Git version control, and building reactive web frontends.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Panel (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10 dark:border-white/10 light:border-black/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
                    PROFILE DOSSIER
                  </span>
                  <h3 className="text-lg font-bold font-editorial text-white dark:text-white light:text-zinc-900 uppercase">
                    Information Panel
                  </h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Info Items List */}
              <div className="space-y-4">
                {infoList.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start justify-between py-2 border-b border-white/5 dark:border-white/5 light:border-black/5 text-sm"
                    >
                      <div className="flex items-center gap-2.5 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono text-xs">
                        <Icon className="w-4 h-4 text-blue-400/80" />
                        <span>{item.label}</span>
                      </div>
                      <span
                        className={`font-medium text-right ${
                          item.highlight
                            ? 'text-emerald-400 font-mono font-bold'
                            : 'text-white dark:text-white light:text-zinc-900'
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Verified academic banner */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono leading-relaxed">
                Currently enrolled in Year 2 of the 4-year B.E. Degree (2025–2029) at BIET Davangere.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
