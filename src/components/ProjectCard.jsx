import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, index }) {
  const isUpcoming = project.isUpcoming;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white overflow-hidden backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Media Representation */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border-b border-white/10 dark:border-white/10 light:border-black/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Status pill badge on thumbnail */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          {isUpcoming ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-medium backdrop-blur-md">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{project.status || "IDEA / PLANNED"}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{project.status || "ACTIVE"}</span>
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 z-10">
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
            {project.year || "2026"}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
            {project.category}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors leading-snug">
            <Link to={`/project/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Chips & Action Links */}
        <div className="mt-6 pt-5 border-t border-white/5 dark:border-white/5 light:border-black/5">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5 dark:border-white/5 light:border-black/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              to={`/project/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white dark:text-white light:text-zinc-900 hover:text-blue-400 font-medium group/btn"
            >
              <span>{isUpcoming ? "View Blueprint" : "Case Study"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Source on GitHub"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Live Project"
                  className="p-2 rounded-lg text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
