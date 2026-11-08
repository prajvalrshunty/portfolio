import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, CheckCircle, Info } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumePreview() {
  const { resume, name, title, academics } = personalInfo;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Visual Document Mockup Preview (Left 7 cols) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 relative group"
      >
        <div className="relative rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950 dark:bg-zinc-950 light:bg-white p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle header bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 dark:border-white/10 light:border-black/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-sm border border-blue-500/20">
                PDF
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white dark:text-white light:text-zinc-900 font-mono">
                  {resume.filename}
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  Standard Academic &amp; Technical Curriculum Vitae
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified Details
            </span>
          </div>

          {/* Styled Document Body reflecting honest student profile */}
          <div className="space-y-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-sans text-sm">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white dark:text-white light:text-zinc-900 font-editorial">
                {name}
              </h3>
              <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mt-1">
                {title} • {personalInfo.academics.location}
              </p>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono mt-1">
                {personalInfo.contact.email} • {personalInfo.contact.github}
              </p>
            </div>

            {/* Objective */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold mb-2">
                Career Objective
              </h5>
              <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-400 light:text-zinc-600 bg-white/[0.02] dark:bg-white/[0.02] light:bg-black/[0.02] p-3 rounded-lg border border-white/5 dark:border-white/5 light:border-black/5">
                Data Science student seeking internship opportunities, technical exposure, industry experience, and avenues to grow as a Data Science and AI Developer. Passionate about machine learning, programming, and software engineering.
              </p>
            </div>

            {/* Education */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold mb-2">
                Education
              </h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between font-medium text-white dark:text-white light:text-zinc-900">
                  <span>{academics.degree}</span>
                  <span className="font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">{academics.duration}</span>
                </div>
                <div className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 flex justify-between">
                  <span>{academics.institution}</span>
                  <span className="text-blue-400 font-mono font-medium">CGPA: {academics.cgpa} ({academics.currentYear})</span>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold mb-2">
                Technical Stack
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-black/5">
                  <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block text-[10px] font-mono uppercase">Languages</span>
                  <span className="font-mono text-white dark:text-white light:text-zinc-900">Python, C Programming, Java</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/5 dark:border-white/5 light:border-black/5">
                  <span className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block text-[10px] font-mono uppercase">Web &amp; Backend</span>
                  <span className="font-mono text-white dark:text-white light:text-zinc-900">HTML, CSS, JavaScript, Node.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fade effect at bottom with quick button */}
          <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              Format: PDF (A4 Standard)
            </span>
            <a
              href={resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 underline"
            >
              <span>View Full Document</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Actions and Documentation Panel (Right 5 cols) */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="p-7 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white backdrop-blur-md">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-2">
            ACADEMIC CV ACCESS
          </span>
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 font-editorial">
            Download Curriculum Vitae
          </h3>
          <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
            My resume contains up-to-date academic records from BIET Davangere, coursework highlights, and verified technical competencies.
          </p>

          {/* Primary Action Button */}
          <div className="mt-7">
            <a
              href={resume.downloadUrl}
              download={resume.filename}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD RESUME PDF</span>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
            <span>Direct PDF download</span>
            <span>•</span>
            <span>Always up to date</span>
          </div>
        </div>

        {/* Developer Note / Replacement Instructions Box */}
        <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-950/20 dark:bg-blue-950/20 light:bg-blue-50">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="text-xs font-mono uppercase font-bold text-blue-300 dark:text-blue-300 light:text-blue-900 tracking-wider">
                How to update this resume
              </h5>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-700 leading-relaxed font-light">
                Simply replace the file located at:
                <code className="block my-1.5 px-2 py-1 rounded bg-black/40 dark:bg-black/40 light:bg-white text-blue-400 font-mono text-[11px] select-all border border-white/5 dark:border-white/5 light:border-black/10">
                  /public/resume/Prajval_R_Shunty_Resume.pdf
                </code>
                The download button and viewer will automatically serve your latest PDF without touching any code!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
