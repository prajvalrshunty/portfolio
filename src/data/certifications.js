export const certificationCategories = [
  { id: "all", label: "All Items" },
  { id: "certifications", label: "Certifications" },
  { id: "workshops", label: "Workshops" },
  { id: "hackathons", label: "Hackathons" },
  { id: "competitions", label: "Competitions" },
  { id: "academic", label: "Academic" }
];

// Initially empty to present honestly as requested.
// Prajval can easily add new certificates by appending objects here.
export const certificationsList = [
  /* Example template structure for future additions:
  {
    id: "sample-cert-1",
    title: "Example: Python for Data Science",
    category: "certifications",
    issuer: "Issuing Organization",
    date: "2026",
    credentialId: "XYZ-12345",
    verificationUrl: "https://example.com/verify",
    image: "/images/cert-placeholder.png",
    skills: ["Python", "Pandas"]
  }
  */
];

export const learningStatus = {
  message: "Currently exploring new learning opportunities and building my technical foundation.",
  subMessage: "Actively studying foundational data science libraries, preparing for industry certifications, and gearing up for upcoming student hackathons and technical symposiums.",
  learningPillars: [
    {
      title: "Foundations First",
      description: "Focusing on strong data structures, algorithmic complexity, and mathematical underpinnings before rushing to surface-level abstractions."
    },
    {
      title: "Active Practice",
      description: "Writing real code, dissecting open-source repositories, and building modular scripts on GitHub."
    },
    {
      title: "Academic Excellence",
      description: "Balancing engineering coursework at BIET Davangere with hands-on technical experiments."
    }
  ]
};
