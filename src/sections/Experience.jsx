import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Send, Hammer } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { CardContainer, CardBody, CardItem } from '../components/ThreeDCard';
import { personalInfo } from '../data/personalInfo';

export default function Experience() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const capabilities = [
    {
      title: "Strong Analytical Discipline",
      description: "Rooted in undergraduate Computer Science and Data Science coursework at BIET Davangere with a 7.5 CGPA."
    },
    {
      title: "Hands-on Programming Skills",
      description: "Active coding experience in Python, C, Java, HTML, CSS, JavaScript, and Node.js with disciplined Git version control."
    },
    {
      title: "AI & ML Curiosity",
      description: "Eager to explore practical machine learning pipelines, feature extraction, and real-time visualization frameworks."
    },
    {
      title: "Receptive & Collaborative",
      description: "High willingness to take feedback, study production codebases, and adapt rapidly to engineering standards."
    }
  ];

  const targetRoles = [
    "Data Science Intern",
    "Machine Learning Intern",
    "AI / Python Developer Intern",
    "Software Engineering Intern"
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          category="INDUSTRY OBJECTIVE"
          title="MY PROFESSIONAL JOURNEY."
          subtitle="An honest student trajectory centered on practical technical exposure, mentorship, and impactful engineering contributions."
        />

        {/* 3D Primary Internship Objective Card */}
        <CardContainer containerClassName="w-full">
          <CardBody className="p-8 sm:p-12 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <CardItem
                translateZ="30"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 font-semibold mb-6 shadow-sm"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>CURRENT STATUS: SEEKING INTERNSHIP OPPORTUNITIES</span>
              </CardItem>

              <CardItem
                translateZ="60"
                as="h3"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white dark:text-white light:text-zinc-900 font-display uppercase leading-tight tracking-tight"
              >
                &ldquo;Currently looking for opportunities to apply my technical knowledge, learn from experienced developers and contribute to meaningful projects.&rdquo;
              </CardItem>

              <CardItem
                translateZ="40"
                as="p"
                className="mt-5 text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-normal leading-relaxed font-sans"
              >
                As a 2nd-year B.E. student specializing in Data Science at BIET Davangere, I am eager to transition theoretical problem solving into real-world production environments. I seek teams that value curiosity, rigorous fundamentals, and collaborative innovation.
              </CardItem>

              {/* Target Roles */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10">
                <CardItem
                  translateZ="30"
                  className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-bold block mb-3"
                >
                  Targeted Internship Roles
                </CardItem>
                <CardItem translateZ="50" className="flex flex-wrap gap-2">
                  {targetRoles.map((role, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/20 text-xs font-mono font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </CardItem>
              </div>

              {/* What I bring to teams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {capabilities.map((item, idx) => (
                  <CardItem
                    key={idx}
                    translateZ={30 + idx * 5}
                    className="p-4 rounded-xl border border-white/5 dark:border-white/5 light:border-black/5 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-50"
                  >
                    <h4 className="text-xs font-mono font-bold text-white dark:text-white light:text-zinc-900 uppercase flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-light leading-relaxed pl-5.5 font-sans">
                      {item.description}
                    </p>
                  </CardItem>
                ))}
              </div>

              {/* CTA Trigger */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CardItem translateZ="70">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-200 group"
                  >
                    <span>LET'S CONNECT</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </CardItem>

                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                  Available for remote or in-person student internships
                </span>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
