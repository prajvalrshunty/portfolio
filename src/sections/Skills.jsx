import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(skill => ({ ...skill, category: cat.title, categoryId: cat.id }))
  );

  const displayedSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.categoryId === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-slate-50/60 dark:bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          category="COMPETENCIES & TOOLS"
          title="TECHNICAL SKILLS."
          subtitle="Honest proficiency across core programming languages, modern web primitives, and version control workflows in interactive 3D cards."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 select-none ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-slate-200/90 dark:border-white/5 shadow-xs'
            }`}
          >
            All Skills ({allSkills.length})
          </motion.button>

          {skillCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 select-none ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-slate-200/90 dark:border-white/5 shadow-xs'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </motion.button>
          ))}
        </div>

        {/* Dynamic 3D Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-12 p-5 rounded-xl border border-slate-200/80 bg-white/80 dark:bg-zinc-950/40 text-center shadow-sm dark:shadow-none">
          <p className="text-xs font-mono text-slate-600 dark:text-zinc-400 font-sans">
            Technical skills are continuously exercised through academic laboratory sessions, open-source reading, and active algorithmic problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}
