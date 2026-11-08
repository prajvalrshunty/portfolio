# Prajval R Shunty — Premium Personal Portfolio

> **Data Science & AI Developer**  
> Undergrad in Computer Science & Engineering (Data Science)  
> BIET — Bapuji Institute of Engineering and Technology, Davangere, Karnataka, India

---

## ✦ Overview

An award-winning, Awwwards-inspired personal portfolio designed and engineered with an editorial dark aesthetic. Built with **React 19**, **Vite**, **Tailwind CSS**, **Framer Motion**, and client-side integration for **GitHub API** and **EmailJS**.

- **Live Production URL:** `https://prajvalrshunty.vercel.app` (or custom domain)
- **Local Preview Port:** `http://localhost:4173`
- **Development Server:** `http://localhost:5173`

---

## ⚡ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Frontend Framework** | React.js (v19) |
| **Tooling & Bundler** | Vite (v6) |
| **Styling Engine** | Tailwind CSS (v3) + PostCSS + Autoprefixer |
| **Animation Physics** | Framer Motion (Spring physics, entrance reveals, scroll observer) |
| **Routing** | React Router DOM (v7) with dynamic route parameters |
| **Icons** | Custom high-precision SVG icons & Lucide React |
| **Telemetry & Data** | GitHub Public REST API with in-memory & session caching |
| **Contact Delivery** | EmailJS Client SDK with spam honeypot & confetti |

---

## 📁 Repository Directory Architecture

```text
prajval-portfolio/
├── public/
│   ├── favicon.svg                  # Monogram vector favicon
│   ├── robots.txt                   # Search crawler directives
│   ├── sitemap.xml                  # Dynamic sitemap index
│   ├── images/
│   │   ├── avatar-prajval.svg       # Editorial portrait & vector silhouette
│   │   ├── portfolio-preview.svg    # Digital identity showcase graphic
│   │   └── project-*.svg            # Architectural diagrams for upcoming projects
│   └── resume/
│       └── Prajval_R_Shunty_Resume.pdf  # Downloadable PDF curriculum vitae
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CustomCursor.jsx         # Responsive desktop pointer physics
│   │   ├── Navbar.jsx               # Sticky navigation with section highlights
│   │   ├── Footer.jsx               # Editorial footer with back-to-top
│   │   ├── ThemeToggle.jsx          # Dark/Light mode switcher
│   │   ├── SectionHeading.jsx       # Standardized numbered editorial headings
│   │   ├── StatusBadge.jsx          # Live opportunity status indicator
│   │   ├── SkillCard.jsx            # Dynamic category-filtered skill badges
│   │   ├── ProjectCard.jsx          # Reusable project showcase card
│   │   ├── ResumePreview.jsx        # Document viewer and direct PDF downloader
│   │   ├── ContactForm.jsx          # EmailJS form with validation & feedback
│   │   ├── GitHubShowcase.jsx       # Live synced GitHub repositories and profile
│   │   └── Icons.jsx                # Pixel-perfect SVG brand and tech icons
│   ├── data/
│   │   ├── personalInfo.js          # Central dossier (name, bio, contact, CGPA)
│   │   ├── skills.js                # Categorized technical competencies
│   │   ├── projects.js              # Active showcase and upcoming idea blueprints
│   │   ├── education.js             # Timeline milestones and coursework
│   │   └── certifications.js        # Expandable certificate structure
│   ├── hooks/
│   │   ├── useTheme.js              # Theme manager with localStorage persistence
│   │   └── useGitHub.js             # API sync hook with rate-limit mitigation
│   ├── pages/
│   │   ├── Home.jsx                 # Single-page editorial landing
│   │   ├── ProjectDetails.jsx       # Deep-dive project case study / blueprint
│   │   └── NotFound.jsx             # 404 handler
│   ├── styles/
│   │   └── index.css                # Base Tailwind directives, grain & custom styling
│   ├── App.jsx                      # App root with hash-scroll restoration
│   └── main.jsx                     # Browser mount point
├── .env.example                     # Environment template
├── vercel.json                      # Vercel SPA routing rewrite config
└── tailwind.config.js               # Editorial theme tokens and font definitions
```

---

## 🛠️ Step-by-Step Customization Guide

### 1. How to Replace Your Resume PDF
Place your new resume PDF file directly at:
```text
public/resume/Prajval_R_Shunty_Resume.pdf
```
> **Tip:** Keep the filename exactly `Prajval_R_Shunty_Resume.pdf`. The download button and viewer in the web app will automatically serve the new file without needing to change any code!

---

### 2. How to Replace Your Profile Photo
Place your real photo (PNG, JPG, or SVG) at:
```text
public/images/avatar-prajval.png
```
Then open `src/data/personalInfo.js` or `src/sections/Hero.jsx` and update the `src` attribute from `/images/avatar-prajval.svg` to `/images/avatar-prajval.png`.

---

### 3. How to Configure EmailJS for Direct Messages
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and register for a free account.
2. Under **Email Services**, click **Add New Service** (select Gmail) and copy your **Service ID** (e.g., `service_xxxxxxx`).
3. Under **Email Templates**, click **Create New Template**.
   - Set the email recipient to `prajvalrshunty@gmail.com`.
   - Use these template fields:
     - `{{name}}`
     - `{{email}}`
     - `{{subject}}`
     - `{{message}}`
   - Copy your **Template ID** (e.g., `template_xxxxxxx`).
4. Go to **Account** -> **API Keys** and copy your **Public Key** (e.g., `user_xxxxxxx` or random alphanumeric string).
5. Create a `.env` file in the root folder (or add them in the Vercel dashboard):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

---

### 4. How to Add Completed Projects
Open `src/data/projects.js` and add or modify items:
```javascript
{
  id: "your-project-id",
  slug: "your-project-id",
  title: "Title of Your Project",
  category: "Machine Learning",
  status: "COMPLETED",
  isUpcoming: false, // Set to false to move from Idea to Active Showcase!
  shortDescription: "One-sentence overview of the solution.",
  fullDescription: "Detailed description of problem, methodology and results.",
  techStack: ["Python", "FastAPI", "React", "Docker"],
  githubUrl: "https://github.com/prajvalrshunty/your-repo",
  liveUrl: "https://your-demo.vercel.app",
  image: "/images/your-project-thumbnail.png",
  year: "2026",
  role: "Lead Developer",
  highlights: ["Feature A", "Performance metric B"],
  architecture: ["Step 1 pipeline...", "Step 2 model inference..."]
}
```

---

## 🚀 Deployment Instructions

### Method A: Deploy via GitHub & Vercel (Recommended)

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Awwwards-inspired portfolio website"
   ```

2. **Push to Your GitHub Profile**:
   Create a new public repository named `portfolio` on [github.com/new](https://github.com/new) under `@prajvalrshunty`, then run:
   ```bash
   git branch -M main
   git remote add origin https://github.com/prajvalrshunty/portfolio.git
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **Add New Project**.
   - Select your GitHub repository: `prajvalrshunty/portfolio`.
   - Framework Preset: **Vite**.
   - Under **Environment Variables**, add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Click **Deploy**. Vercel will automatically build and assign your free live URL (`https://prajval-portfolio.vercel.app` or similar)!

---

## 💻 Local Development Commands

```bash
# Install dependencies
npm install

# Start Vite hot-reloading development server (default port 5173)
npm run dev

# Run a clean production build
npm run build

# Preview the production build locally (port 4173)
npm run preview
```
