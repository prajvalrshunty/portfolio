export const projects = [
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    title: "Personal Portfolio & Editorial Digital Identity",
    category: "Web Engineering & Design Systems",
    status: "COMPLETED & LIVE",
    badge: "ACTIVE",
    isUpcoming: false,
    shortDescription: "An Awwwards and Aceternity-inspired 3D editorial portfolio featuring smooth spring physics, live GitHub telemetry, and dark editorial aesthetic.",
    fullDescription: "Designed and engineered as a bespoke digital presence reflecting an honest, high-standard engineering mindset. Features 3D parallax cards, dynamic GitHub API telemetry, dark/light theme switching, EmailJS messaging architecture, and scalable modular components.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "GitHub REST API", "EmailJS"],
    featured: true,
    githubUrl: "https://github.com/prajvalrshunty/portfolio",
    liveUrl: "https://prajval-portfolio-ruddy.vercel.app",
    image: "/images/portfolio-preview.svg",
    year: "2026",
    role: "Frontend Architect & Developer",
    highlights: [
      "Aceternity-style 3D tilt perspective cards with dynamic cursor spotlight shaders",
      "Dynamic GitHub profile and repository telemetry synchronization with session caching",
      "EmailJS contact pipeline with validation, spam guards, and real-time response states",
      "Full mobile-first responsiveness with custom desktop spring cursor and reduced motion support"
    ],
    architecture: [
      "Component-driven modular React architecture organized into atomic components, sections, and dedicated pages.",
      "Centralized data layer enabling one-touch updates for education, skills, projects, and contact channels.",
      "Tailwind-powered design tokens adhering to strict typography, contrast ratios, and dark editorial aesthetic."
    ]
  },
  {
    id: "amazon-clone",
    slug: "amazon-clone",
    title: "Amazon Storefront Interface Clone",
    category: "Frontend Web Development",
    status: "COMPLETED",
    badge: "GITHUB REPO",
    isUpcoming: false,
    shortDescription: "A faithful frontend recreation of the Amazon e-commerce storefront featuring multi-level navigation headers, hero banners, and responsive product category grids.",
    fullDescription: "A frontend engineering project hosted on GitHub that replicates the core UI layout of Amazon's e-commerce platform. Built with semantic HTML5 and custom CSS3, focusing on CSS Grid and Flexbox alignment, accessible markup, and multi-tier product card layouts.",
    techStack: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    featured: true,
    githubUrl: "https://github.com/prajvalrshunty/amzon-clone",
    liveUrl: null, // As documented in Prajval's GitHub profile: "No live demo is currently available"
    image: "/images/project-amazon-clone.svg",
    year: "2026",
    role: "Frontend Developer",
    highlights: [
      "Faithful multi-tiered Amazon header with search bar, delivery location, and category links",
      "Responsive promotional hero banner showcasing featured product deals",
      "Modular product category boxes arranged with CSS Flexbox and Grid layouts",
      "Pure vanilla implementation demonstrating foundational DOM structure and CSS mastery"
    ],
    architecture: [
      "Structural Markup: Semantic HTML5 hierarchy utilizing headers, navigation bars, and section containers.",
      "Styling Engine: Pure CSS3 styling leveraging flexbox alignment for navbar components and multi-column grid arrays.",
      "Asset Management: Local imagery assets organized for hero promotions and multi-box category sections."
    ]
  },
  {
    id: "developer-profile",
    slug: "developer-profile",
    title: "Developer Profile & Automated Telemetry",
    category: "Open Source & Developer Presence",
    status: "COMPLETED",
    badge: "GITHUB REPO",
    isUpcoming: false,
    shortDescription: "A dynamic GitHub profile and developer telemetry repository featuring real-time streak analytics, automated stats cards, and technology skill badges.",
    fullDescription: "Specialized GitHub repository powering the @prajvalrshunty developer presence. Integrates real-time GitHub streak analytics, top languages metrics, custom animated header banners, and structured technology badges.",
    techStack: ["Markdown", "GitHub Actions", "Workflow Automation", "API Cards"],
    featured: true,
    githubUrl: "https://github.com/prajvalrshunty/prajvalrshunty",
    liveUrl: "https://github.com/prajvalrshunty",
    image: "/images/project-developer-profile.svg",
    year: "2026",
    role: "Open Source Contributor",
    highlights: [
      "Integrated dynamic GitHub streak stats and language usage breakdowns",
      "Automated capsule header banner with twinkling particle animations",
      "Custom skill icon matrix representing verified languages and developer tools",
      "Direct open-source collaboration hub connecting recruiters and fellow students"
    ],
    architecture: [
      "Dynamic Markdown: Structured GitHub Flavored Markdown with embedded SVG cards.",
      "Automation Integrations: Third-party metric generators updating profile stats on push events.",
      "Repository Configuration: Profile-level special repository configuration."
    ]
  }
];

export const upcomingProjects = projects.filter(p => p.isUpcoming);
export const completedProjects = projects.filter(p => !p.isUpcoming);
