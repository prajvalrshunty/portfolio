import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, Users, BookOpen } from 'lucide-react';
import { Github } from './Icons';
import { useGitHub } from '../hooks/useGitHub';
import { personalInfo } from '../data/personalInfo';

export default function GitHubShowcase() {
  const { profile, repos, loading, error, username } = useGitHub();
  const profileUrl = personalInfo.contact.github;

  return (
    <div className="space-y-8">
      {/* Profile Overview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="relative">
            <img
              src={profile?.avatar_url || `https://github.com/${username}.png`}
              alt={username}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 object-cover bg-zinc-900"
              onError={(e) => {
                e.target.src = '/images/avatar-prajval.svg';
              }}
            />
            <div className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-zinc-900 border border-white/10 text-white">
              <Github className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-zinc-900 font-editorial">
                @{username}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Verified Student
              </span>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 font-light">
              {profile?.bio || 'Data Science & AI Developer exploring open source and practical algorithms.'}
            </p>

            {/* Quick Metrics (Only genuine data from API) */}
            <div className="flex items-center gap-5 mt-3 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              {profile?.public_repos !== null && profile?.public_repos !== undefined && (
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <strong className="text-white dark:text-white light:text-zinc-900 font-semibold">
                    {profile.public_repos}
                  </strong>{' '}
                  Repositories
                </span>
              )}

              {profile?.followers !== null && profile?.followers !== undefined && (
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  <strong className="text-white dark:text-white light:text-zinc-900 font-semibold">
                    {profile.followers}
                  </strong>{' '}
                  Followers
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full md:w-auto">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 dark:border-white/20 light:border-black/20 hover:border-blue-500 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-blue-500/10 text-white dark:text-white light:text-zinc-900 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            <span>EXPLORE MY GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Live Repositories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold">
            Public Repositories ({repos.length || (loading ? 'Loading...' : '0')})
          </h4>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
            Synced via GitHub API
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="p-5 rounded-xl border border-white/5 bg-zinc-950/40 animate-pulse h-36 flex flex-col justify-between"
              >
                <div className="h-4 bg-white/10 rounded w-2/3" />
                <div className="h-3 bg-white/5 rounded w-full" />
                <div className="h-3 bg-white/5 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-white hover:border-blue-500/50 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-sm font-semibold text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 shrink-0" />
                  </div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 line-clamp-2 font-light">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                      <Code2 className="w-3 h-3" />
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="p-8 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/40 text-center space-y-3">
            <Github className="w-8 h-8 mx-auto text-zinc-500" />
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light max-w-md mx-auto">
              Currently establishing new public repositories and code experiments. Visit my GitHub profile directly to view active contributions.
            </p>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 underline"
            >
              <span>View @{username} on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
