import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

export default function ProjectCard({ project }) {
  const prefersReducedMotion = useReducedMotion();
  const primaryUrl = project.liveUrl || project.githubUrl;

  return (
    <CardContainer containerClassName="w-full">
      <CardBody className="group relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-950/80 overflow-hidden backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_16px_36px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.02)]">
        
        {/* Top Media Representation with Cinematic Scroll Reveal */}
        <CardItem
          translateZ="20"
          className="w-full relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-white/10 mb-6 shadow-xs"
        >
          <motion.img
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 opacity-75 group-hover:opacity-50 transition-opacity duration-300" />

          {/* Status pill badge on thumbnail */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-medium backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{project.badge || 'VERIFIED'}</span>
            </span>
          </div>

          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="text-[10px] font-mono text-white bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
              {project.year || '2026'}
            </span>
          </div>
        </CardItem>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <CardItem
              translateZ="15"
              className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-2 block"
            >
              {project.category}
            </CardItem>

            <CardItem
              translateZ="25"
              as="h3"
              className="text-xl sm:text-2xl font-bold font-display text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug tracking-tight"
            >
              {primaryUrl ? (
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              ) : (
                <span>{project.title}</span>
              )}
            </CardItem>

            <CardItem
              translateZ="10"
              as="p"
              className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed font-sans"
            >
              {project.shortDescription}
            </CardItem>
          </div>

          {/* Tech Stack Chips & Action Links */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
            <CardItem translateZ="15" className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100/90 dark:bg-zinc-900 text-slate-800 dark:text-zinc-300 border border-slate-200/80 dark:border-white/5 font-medium"
                >
                  {tech}
                </span>
              ))}
            </CardItem>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.githubUrl && (
                <CardItem translateZ="25">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-zinc-900 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white text-zinc-800 dark:text-zinc-300 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </CardItem>
              )}

              {project.liveUrl && (
                <CardItem translateZ="25">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs shadow-blue-500/20"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </CardItem>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
