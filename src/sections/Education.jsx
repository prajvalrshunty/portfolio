import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { academicTimeline } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-zinc-100/40 dark:bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          category="ACADEMIC FOUNDATIONS"
          title="MY ACADEMIC JOURNEY."
          subtitle="Rigorous engineering curriculum combining theoretical computer science with specialized data analytics."
        />

        <div className="relative border-l border-zinc-200 dark:border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {academicTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-blue-600 border-white shadow-[0_0_12px_rgba(59,130,246,0.8)]'
                    : 'bg-zinc-300 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-600'
                }`}
              />

              {/* Card Container */}
              <motion.div
                whileHover={{ x: 4, scale: 1.005 }}
                whileTap={{ scale: 0.99 }}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/70 backdrop-blur-md shadow-sm dark:shadow-xl hover:border-blue-500/40 transition-all duration-300"
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {item.period}
                    </span>
                    {item.isCurrent && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        {item.currentStatus}
                      </span>
                    )}
                  </div>

                  {item.cgpa && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5">
                      <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        CGPA: {item.cgpa}
                      </span>
                    </div>
                  )}
                </div>

                {/* Degree & Specialization */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-editorial uppercase tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-base text-blue-600 dark:text-blue-400 font-mono font-medium mt-1">
                  {item.specialization}
                </p>

                {/* Institution & Location */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    {item.location}
                  </span>
                </div>

                {/* Overview Narrative */}
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {item.overview}
                </p>

                {/* Coursework Modules */}
                {item.coreSubjects && (
                  <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold mb-3 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      Key Coursework Modules
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coreSubjects.map((sub, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900/90 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 hover:border-blue-500/30 transition-colors"
                        >
                          {sub}
                        </motion.span>
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
