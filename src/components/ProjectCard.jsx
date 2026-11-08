import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Hammer, CheckCircle2, Clock } from 'lucide-react';
import { Github } from './Icons';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

export default function ProjectCard({ project }) {
  const isUpcoming = project.isUpcoming;

  return (
    <CardContainer containerClassName="w-full py-2">
      <CardBody className="group relative rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white overflow-hidden backdrop-blur-md hover:border-blue-500/50 hover:shadow-[0_25px_50px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7">
        
        {/* Top Media Representation with 3D Depth */}
        <CardItem
          translateZ="50"
          className="w-full relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 mb-6 shadow-md"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />

          {/* Status pill badge on thumbnail */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            {isUpcoming ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-medium backdrop-blur-md">
                <Hammer className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>WORK IN PROGRESS</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-medium backdrop-blur-md">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>LIVE PROJECT</span>
              </span>
            )}
          </div>

          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="text-[10px] font-mono text-zinc-300 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/5">
              {project.year || "2026"}
            </span>
          </div>
        </CardItem>

        {/* Content Section with 3D Pop */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <CardItem
              translateZ="40"
              className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2 block"
            >
              {project.category}
            </CardItem>

            <CardItem
              translateZ="60"
              as="h3"
              className="text-xl sm:text-2xl font-bold font-display text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors leading-snug tracking-tight"
            >
              <Link to={`/project/${project.slug}`} className="hover:underline">
                {project.title}
              </Link>
            </CardItem>

            <CardItem
              translateZ="30"
              as="p"
              className="mt-3 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light leading-relaxed font-sans"
            >
              {project.shortDescription}
            </CardItem>
          </div>

          {/* Tech Stack Chips & Action Links */}
          <div className="mt-6 pt-5 border-t border-white/5 dark:border-white/5 light:border-black/5">
            <CardItem translateZ="40" className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 border border-white/5 dark:border-white/5 light:border-black/5"
                >
                  {tech}
                </span>
              ))}
            </CardItem>

            <div className="flex items-center justify-between pt-2">
              <CardItem translateZ="70">
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white dark:text-white light:text-zinc-900 hover:text-blue-400 font-semibold group/btn"
                >
                  <span>{isUpcoming ? "View Architecture" : "View Case Study"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </CardItem>

              <CardItem translateZ="70" className="flex items-center gap-2">
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
              </CardItem>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
