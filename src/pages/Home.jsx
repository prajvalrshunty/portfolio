import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
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
      <Education />
      <Experience />
      <ResumeSection />
      <Contact />
    </main>
  );
}
