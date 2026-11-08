import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const { contact } = personalInfo;

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          category="COMMUNICATION PIPELINE"
          title="LET'S BUILD SOMETHING TOGETHER."
          subtitle="Interested in discussing an internship, technical challenge, or collaborative data science project? Send a transmission below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details & Social Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-2">
                DIRECT CHANNELS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-zinc-900 font-editorial uppercase">
                Open to Dialogue
              </h3>
              <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
                Whether you are an engineering lead, recruiter, or fellow student developer, my inbox is monitored daily.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="group p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white hover:border-blue-500/50 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-50 transition-all duration-200 flex items-center gap-4 block"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
                    Direct Email
                  </span>
                  <span className="text-sm font-mono font-medium text-white dark:text-white light:text-zinc-900 truncate block group-hover:text-blue-400 transition-colors">
                    {contact.email}
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white hover:border-blue-500/50 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-50 transition-all duration-200 flex items-center gap-4 block"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
                    Professional Network
                  </span>
                  <span className="text-sm font-mono font-medium text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/prajval-r-shunty-139a47385
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-white hover:border-blue-500/50 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-50 transition-all duration-200 flex items-center gap-4 block"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-500/20">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
                    Code Repository
                  </span>
                  <span className="text-sm font-mono font-medium text-white dark:text-white light:text-zinc-900 group-hover:text-blue-400 transition-colors">
                    github.com/prajvalrshunty
                  </span>
                </div>
              </a>

              {/* Geographic Location */}
              <div className="p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-zinc-950/40 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-zinc-400 border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-600 block">
                    Current Location
                  </span>
                  <span className="text-sm font-mono font-medium text-white dark:text-white light:text-zinc-900">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EmailJS Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
