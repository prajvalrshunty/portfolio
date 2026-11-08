import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import SectionWatermark from '../components/SectionWatermark';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <SectionWatermark number="03" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="03"
            category="VERIFIED REPOSITORIES"
            title="SELECTED WORK."
            subtitle="Real, verified projects sourced directly from my GitHub repositories, featuring clean frontend code, responsive design, and active version control."
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block pb-16"
          >
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-white/5 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub (@{personalInfo.contact.githubUsername})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* 3D Projects Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile GitHub Button */}
        <div className="mt-12 text-center md:hidden">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-white/5 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>Explore All on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
