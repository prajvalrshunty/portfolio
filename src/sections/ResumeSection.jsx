import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ResumePreview from '../components/ResumePreview';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 sm:py-32 relative bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          category="FORMAL QUALIFICATIONS"
          title="MY RESUME."
          subtitle="Direct access to verified academic credentials, technical coursework, and foundational competencies."
        />

        <ResumePreview />
      </div>
    </section>
  );
}
