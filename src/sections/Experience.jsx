import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';

export default function Experience() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
    <section id="experience" className="py-24 sm:py-32 relative bg-zinc-100/40 dark:bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="INDUSTRY OBJECTIVE"
          title="MY PROFESSIONAL JOURNEY."
          subtitle="An honest student trajectory centered on practical technical exposure, mentorship, and impactful engineering contributions."
        />

        {/* Clean, Stable Internship Objective Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm dark:shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-6 shadow-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>CURRENT STATUS: SEEKING INTERNSHIP OPPORTUNITIES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white font-display uppercase leading-tight tracking-tight">
              &ldquo;Currently looking for opportunities to apply my technical knowledge, learn from experienced developers and contribute to meaningful projects.&rdquo;
            </h3>

            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed font-sans">
              As a 2nd-year B.E. student specializing in Data Science at BIET Davangere, I am eager to transition theoretical problem solving into real-world production environments. I seek teams that value curiosity, rigorous fundamentals, and collaborative innovation.
            </p>

            {/* Target Roles */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold block mb-3">
                Targeted Internship Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {targetRoles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-mono font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* What I bring to teams */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50"
                >
                  <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pl-5.5 font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Trigger */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 group"
              >
                <span>LET'S CONNECT</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                Available for remote or in-person student internships
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
