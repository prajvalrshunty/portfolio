import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionWatermark from '../components/SectionWatermark';
import { academicTimeline } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-slate-50/60 dark:bg-zinc-950/20 overflow-hidden">
      <SectionWatermark number="04" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          category="ACADEMIC FOUNDATIONS"
          title="MY ACADEMIC JOURNEY."
          subtitle="Rigorous engineering curriculum combining theoretical computer science with specialized data analytics."
        />

        <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {academicTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-blue-600 border-white shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                    : 'bg-slate-300 dark:bg-zinc-800 border-slate-400 dark:border-zinc-600'
                }`}
              />

              {/* Card Container */}
              <motion.div
                whileHover={{ x: 4, scale: 1.005 }}
                whileTap={{ scale: 0.99 }}
                className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/70 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-xl hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/20">
                      {item.period}
                    </span>
                    {item.isCurrent && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        {item.currentStatus}
                      </span>
                    )}
                  </div>

                  {item.cgpa && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50/80 dark:bg-zinc-900 border border-emerald-200/80 dark:border-white/5">
                      <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                        CGPA: {item.cgpa}
                      </span>
                    </div>
                  )}
                </div>

                {/* Degree & Specialization */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-editorial uppercase tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-base text-blue-600 dark:text-blue-400 font-mono font-medium mt-1">
                  {item.specialization}
                </p>

                {/* Institution & Location */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                    {item.location}
                  </span>
                </div>

                {/* Overview Narrative */}
                <p className="mt-4 text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
                  {item.overview}
                </p>

                {/* Coursework Modules */}
                {item.coreSubjects && (
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-zinc-400 font-bold mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Key Coursework Modules
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coreSubjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-white/5 text-slate-700 dark:text-zinc-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
