import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { personalInfo } from '../data/personalInfo';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="03"
            category="VERIFIED REPOSITORIES"
            title="SELECTED WORK."
            subtitle="Real, verified projects sourced directly from my GitHub repositories, featuring clean frontend code, responsive design, and active version control."
          />

          <div className="hidden md:block pb-16">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-white/5 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub (@{personalInfo.contact.githubUsername})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile GitHub Button */}
        <div className="mt-12 text-center md:hidden">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-white/5 text-zinc-900 dark:text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-sm"
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
