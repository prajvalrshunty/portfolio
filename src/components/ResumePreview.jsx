import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, CheckCircle, Info, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumePreview() {
  const { resume, name, title, academics } = personalInfo;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${resume.downloadUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

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
        <div className="relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 p-6 sm:p-10 shadow-lg dark:shadow-2xl overflow-hidden">
          {/* Subtle header bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm border border-blue-500/20">
                PDF
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white font-mono">
                  {resume.filename}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Standard Academic &amp; Technical Curriculum Vitae
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified Details
            </span>
          </div>

          {/* Styled Document Body reflecting honest student profile */}
          <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-sans text-sm">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-zinc-900 dark:text-white font-editorial">
                {name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-wider mt-1">
                {title} • {personalInfo.academics.location}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono mt-1">
                {personalInfo.contact.email} • {personalInfo.contact.github}
              </p>
            </div>

            {/* Objective */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold mb-2">
                Career Objective
              </h5>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-white/[0.02] p-3 rounded-lg border border-zinc-200 dark:border-white/5">
                Data Science student seeking internship opportunities, technical exposure, industry experience, and avenues to grow as a Data Science and AI Developer. Passionate about machine learning, programming, and software engineering.
              </p>
            </div>

            {/* Education */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold mb-2">
                Education
              </h5>
              <div className="text-xs space-y-3">
                <div className="space-y-0.5">
                  <div className="flex justify-between font-medium text-zinc-900 dark:text-white">
                    <span>{academics.degree}</span>
                    <span className="font-mono text-zinc-600 dark:text-zinc-400">{academics.duration}</span>
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 flex justify-between">
                    <span>{academics.institution}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-mono font-medium">CGPA: {academics.cgpa} ({academics.currentYear})</span>
                  </div>
                </div>

                <div className="space-y-0.5 pt-2 border-t border-zinc-100 dark:border-white/5">
                  <div className="flex justify-between font-medium text-zinc-900 dark:text-white">
                    <span>{academics.puc?.degree || "Pre-University Education (PUC / Science)"}</span>
                    <span className="font-mono text-zinc-600 dark:text-zinc-400">{academics.puc?.duration || "2023 – 2025"}</span>
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 flex justify-between">
                    <span>{academics.puc?.institution || "Alva's Pre-University College"}</span>
                    <span className="font-mono text-zinc-500">{academics.puc?.location || "Mudbidre, Karnataka"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className="pt-2">
              <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold mb-2">
                Technical Stack
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] font-mono uppercase">Languages</span>
                  <span className="font-mono text-zinc-900 dark:text-white">Python, C Programming, Java</span>
                </div>
                <div className="p-2.5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] font-mono uppercase">Web &amp; Backend</span>
                  <span className="font-mono text-zinc-900 dark:text-white">HTML, CSS, JavaScript, Node.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fade effect at bottom with quick button */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
              Format: PDF (A4 Standard)
            </span>
            <a
              href={resume.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 hover:text-blue-500 underline"
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
        <div className="p-7 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/70 backdrop-blur-md shadow-sm dark:shadow-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-2">
            ACADEMIC CV ACCESS
          </span>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-editorial">
            Download Curriculum Vitae
          </h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            My resume contains up-to-date academic records from BIET Davangere, coursework highlights, and verified technical competencies.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-7 space-y-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={resume.downloadUrl}
              download={resume.filename}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400 select-none cursor-pointer"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>DOWNLOAD RESUME PDF</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopyLink}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs uppercase tracking-wider transition-all select-none"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Resume Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-blue-500" />
                  <span>Copy Resume PDF Link</span>
                </>
              )}
            </motion.button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span>Direct PDF download</span>
            <span>•</span>
            <span>Mobile &amp; Desktop optimized</span>
          </div>
        </div>

        {/* Developer Note / Replacement Instructions Box */}
        <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-50/80 dark:bg-blue-950/20">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="text-xs font-mono uppercase font-bold text-blue-900 dark:text-blue-300 tracking-wider">
                How to update this resume
              </h5>
              <p className="text-xs text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
                Simply replace the file located at:
                <code className="block my-1.5 px-2 py-1 rounded bg-white dark:bg-black/40 text-blue-700 dark:text-blue-400 font-mono text-[11px] select-all border border-zinc-200 dark:border-white/5">
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
