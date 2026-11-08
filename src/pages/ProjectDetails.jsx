import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Lightbulb, CheckCircle2, Layers } from 'lucide-react';
import { Github } from '../components/Icons';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug || p.id === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 text-blue-400 mx-auto flex items-center justify-center font-mono">
            404
          </div>
          <h2 className="text-2xl font-bold font-editorial text-white dark:text-white light:text-zinc-900 uppercase">
            Project Blueprint Not Found
          </h2>
          <p className="text-sm text-zinc-400 font-light">
            The project blueprint you requested could not be located in the central archive.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Selected Work</span>
          </Link>
        </div>
      </div>
    );
  }

  const isUpcoming = project.isUpcoming;

  return (
    <div className="min-h-screen pt-28 pb-24 relative bg-grain">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10">
              {project.category}
            </span>

            {isUpcoming ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-medium">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{project.status || 'IDEA / PLANNED'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{project.status || 'ACTIVE WORK'}</span>
              </span>
            )}

            <span className="text-xs font-mono text-zinc-400 ml-auto">
              Timeline: {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-editorial tracking-tight text-white dark:text-white light:text-zinc-950 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-light leading-relaxed">
            {project.fullDescription || project.shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code on GitHub</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-white/5 text-zinc-400 text-xs font-mono">
                <Github className="w-3.5 h-3.5" />
                <span>Repository: Planned for release</span>
              </span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all"
              >
                <span>Launch Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Visual Display */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl bg-zinc-950"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </motion.div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-16">
          {/* Main technical content (8 cols) */}
          <div className="md:col-span-8 space-y-12">
            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Key Architectural Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="p-4 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-light flex items-start gap-3"
                    >
                      <span className="font-mono text-xs text-blue-500 font-bold mt-0.5">0{i + 1}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Concept */}
            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-blue-400 font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Implementation Architecture
                </h3>
                <div className="space-y-3">
                  {project.architecture.map((arch, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Metadata (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white backdrop-blur-md space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  Designated Role
                </span>
                <span className="text-sm font-mono font-semibold text-white dark:text-white light:text-zinc-900">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  Status Category
                </span>
                <span className="text-xs font-mono font-medium text-emerald-400">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
