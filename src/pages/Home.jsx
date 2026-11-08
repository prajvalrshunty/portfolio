import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import GitHubSection from '../sections/GitHubSection';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Experience from '../sections/Experience';
import ResumeSection from '../sections/ResumeSection';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Education />
      <Certifications />
      <Experience />
      <ResumeSection />
      <Contact />
    </main>
  );
}
