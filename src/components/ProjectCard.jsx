import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Github } from './Icons';
import { CardContainer, CardBody, CardItem } from './ThreeDCard';

export default function ProjectCard({ project }) {
  return (
    <CardContainer containerClassName="w-full">
      <CardBody className="group relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950/80 overflow-hidden backdrop-blur-md hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)] transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-sm">
        
        {/* Top Media Representation */}
        <CardItem
          translateZ="20"
          className="w-full relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 mb-6 shadow-sm"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-zinc-950 dark:via-zinc-950/40 opacity-75 group-hover:opacity-60 transition-opacity" />

          {/* Status pill badge on thumbnail */}
          <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-medium backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{project.badge || "VERIFIED"}</span>
            </span>
          </div>

          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="text-[10px] font-mono text-white bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
              {project.year || "2026"}
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
              <Link to={`/project/${project.slug}`} className="hover:underline">
                {project.title}
              </Link>
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
          <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-white/5">
            <CardItem translateZ="15" className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </CardItem>

            <div className="flex items-center justify-between pt-2">
              <CardItem translateZ="30">
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-semibold group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </CardItem>

              <CardItem translateZ="30" className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Source on GitHub"
                    className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
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
                    className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
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
