import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Award, ExternalLink, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificationsList, learningStatus, certificationCategories } from '../data/certifications';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCerts = activeTab === 'all'
    ? certificationsList
    : certificationsList.filter(c => c.category === activeTab);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="CONTINUOUS EDUCATION"
          title="LEARNING NEVER STOPS."
          subtitle="A transparent record of ongoing self-study, academic initiatives, and technical milestones."
        />

        {/* Current Learning State Banner (Honest representation as requested) */}
        {certificationsList.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white backdrop-blur-md shadow-xl text-center max-w-4xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center border border-blue-500/20 mb-6">
              <Compass className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 font-editorial uppercase">
              {learningStatus.message}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light">
              {learningStatus.subMessage}
            </p>

            {/* Learning Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
              {learningStatus.learningPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-50"
                >
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                    // Pillar 0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white dark:text-white light:text-zinc-900 font-mono mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Certificates, workshops, and hackathons will be updated dynamically upon completion.</span>
            </div>
          </motion.div>
        ) : (
          /* Reusable certificate grid for when certifications are added */
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {certificationCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    activeTab === cat.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-blue-400 hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
