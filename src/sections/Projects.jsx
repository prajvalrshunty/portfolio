import React, { useState } from 'react';
import { Hammer, Sparkles, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, upcomingProjects, completedProjects } from '../data/projects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'wip' | 'live'

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'wip'
    ? upcomingProjects
    : completedProjects;

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          category="PORTFOLIO & BLUEPRINTS"
          title="SELECTED WORK."
          subtitle="Explore active implementations and 3D architectural blueprints for machine learning and data engineering projects currently in progress."
        />

        {/* Section View Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              All Projects ({projects.length})
            </button>

            <button
              onClick={() => setActiveTab('live')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'live'
                  ? 'bg-emerald-600 text-white font-semibold shadow-md'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Project ({completedProjects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('wip')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === 'wip'
                  ? 'bg-amber-600 text-white font-semibold shadow-md'
                  : 'bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <Hammer className="w-3.5 h-3.5" />
              <span>Still Building / In Progress ({upcomingProjects.length})</span>
            </button>
          </div>

          <div className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Interactive 3D Cards • Tilt on hover</span>
          </div>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Progress Notice */}
        <div className="mt-16 p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/40 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Active Engineering Pipeline
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light leading-relaxed font-sans">
            These project blueprints represent active technical explorations currently being coded in Python, scikit-learn, and React. As repositories and prototypes reach beta release, their live repositories will be synced here automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
