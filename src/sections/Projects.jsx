import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, upcomingProjects, completedProjects } from '../data/projects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'upcoming' | 'showcase'

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'upcoming'
    ? upcomingProjects
    : completedProjects;

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          category="PORTFOLIO & BLUEPRINTS"
          title="SELECTED WORK."
          subtitle="A transparent showcase of active implementations and carefully architected upcoming machine learning & data engineering projects."
        />

        {/* Section View Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              All Initiatives ({projects.length})
            </button>

            <button
              onClick={() => setActiveTab('showcase')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'showcase'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Showcase ({completedProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'upcoming'
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Upcoming Ideas ({upcomingProjects.length})</span>
            </button>
          </div>

          <div className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Clearly tagged as IDEA / PLANNED vs ACTIVE</span>
          </div>
        </div>

        {/* Subsection A & B Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Scalability Notice for Prajval */}
        <div className="mt-16 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/40 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            Dynamic Architecture Note
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light leading-relaxed">
            As planned projects are implemented, they can be seamlessly switched from <code className="text-amber-400">isUpcoming: true</code> to <code className="text-emerald-400">isUpcoming: false</code> in <code className="text-white">projects.js</code> to reflect live demo links and GitHub repositories.
          </p>
        </div>
      </div>
    </section>
  );
}
