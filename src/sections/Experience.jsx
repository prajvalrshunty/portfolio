import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionWatermark from '../components/SectionWatermark';

export default function Experience() {
  const capabilities = [
    {
      title: "Strong Analytical Discipline",
      description: "Rooted in undergraduate Computer Science and Data Science coursework at BIET Davangere with a 7.5 CGPA."
    },
    {
      title: "Hands-on Programming Skills",
      description: "Active coding experience in Python, C, Java, HTML, CSS, JavaScript, and Node.js with disciplined Git version control."
    },
    {
      title: "AI & ML Curiosity",
      description: "Eager to explore practical machine learning pipelines, feature extraction, and real-time visualization frameworks."
    },
    {
      title: "Receptive & Collaborative",
      description: "High willingness to take feedback, study production codebases, and adapt rapidly to engineering standards."
    }
  ];

  const targetRoles = [
    "Data Science Intern",
    "Machine Learning Intern",
    "AI / Python Developer Intern",
    "Software Engineering Intern"
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-slate-50/60 dark:bg-zinc-950/20 overflow-hidden">
      <SectionWatermark number="05" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          category="INDUSTRY OBJECTIVE"
          title="MY PROFESSIONAL JOURNEY."
          subtitle="An honest student trajectory centered on practical technical exposure, mentorship, and impactful engineering contributions."
        />

        {/* Clean, Stable Internship Objective Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/25 text-xs font-mono font-semibold mb-6 shadow-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>CURRENT STATUS: SEEKING INTERNSHIP OPPORTUNITIES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white font-display uppercase leading-tight tracking-tight">
              &ldquo;Currently looking for opportunities to apply my technical knowledge, learn from experienced developers and contribute to meaningful projects.&rdquo;
            </h3>

            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-zinc-400 font-normal leading-relaxed font-sans">
              As a 2nd-year B.E. student specializing in Data Science at BIET Davangere, I am eager to transition theoretical problem solving into real-world production environments. I seek teams that value curiosity, rigorous fundamentals, and collaborative innovation.
            </p>

            {/* Target Roles */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-zinc-400 font-bold block mb-3">
                Targeted Internship Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {targetRoles.map((role, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/20 text-xs font-mono font-medium select-none cursor-default"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* What I bring to teams with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="p-4 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/70 dark:bg-zinc-900/50 hover:border-blue-500/40 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-white font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1.5 leading-relaxed font-light font-sans">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
