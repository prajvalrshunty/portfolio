import React from 'react';
import SectionHeading from '../components/SectionHeading';
import GitHubShowcase from '../components/GitHubShowcase';

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04B"
          category="OPEN SOURCE TELEMETRY"
          title="CODE ON GITHUB."
          subtitle="Real-time synchronization with my public repositories, technical explorations, and version control activity."
        />

        <GitHubShowcase />
      </div>
    </section>
  );
}
