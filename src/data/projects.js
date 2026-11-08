export const projects = [
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    title: "Personal Portfolio & Editorial Digital Identity",
    category: "Web Engineering & Design Systems",
    status: "COMPLETED & LIVE",
    badge: "ACTIVE",
    isUpcoming: false,
    shortDescription: "An Awwwards and Aceternity-inspired 3D editorial portfolio featuring smooth spring physics, live GitHub synchronization, and dark editorial aesthetic.",
    fullDescription: "Designed and engineered as a bespoke digital presence reflecting an honest, high-standard engineering mindset. Features 3D parallax cards, dynamic GitHub API telemetry, dark/light theme switching, EmailJS messaging architecture, and scalable modular components.",
    techStack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "GitHub REST API", "EmailJS"],
    featured: true,
    githubUrl: "https://github.com/prajvalrshunty",
    liveUrl: "https://prajvalrshunty.vercel.app/",
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
    id: "student-performance-prediction",
    slug: "student-performance-prediction",
    title: "AI Student Academic Performance Analyzer",
    category: "Machine Learning & Predictive Modeling",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "A machine learning pipeline currently under active development to model multi-factor academic indicators and provide early risk warnings.",
    fullDescription: "A predictive analytics application designed to assist educators and students in identifying learning bottlenecks. By ingesting historical assessment records, attendance patterns, and study habits, the ML model flags students at risk of underperforming and suggests targeted interventions.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit"],
    featured: true,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-student-perf.svg",
    year: "In Progress",
    role: "Lead Developer (Research & Model Training)",
    highlights: [
      "Data preprocessing pipeline normalizing attendance, internal assessment scores, and assignment submission latencies",
      "Benchmarking Random Forest, Gradient Boosting, and Logistic Regression models",
      "Model interpretability using SHAP values to isolate actionable performance indicators",
      "Interactive dashboard prototype for student cohort analysis"
    ],
    architecture: [
      "Data Ingestion & Cleaning: Automated handling of missing tabular values, outliers, and categorical encoding.",
      "Model Training & Evaluation: Cross-validated hyperparameter tuning evaluated via precision, recall, and ROC-AUC.",
      "Inference Service: Lightweight REST API serving predictions to a modern dashboard interface."
    ]
  },
  {
    id: "intelligent-resume-analyzer",
    slug: "intelligent-resume-analyzer",
    title: "Intelligent Resume Skill Matcher using NLP",
    category: "Natural Language Processing",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "An NLP-powered text processing engine currently in development that parses candidate resumes, extracts technical entities, and highlights skill gaps.",
    fullDescription: "Leveraging Natural Language Processing and vector embeddings to solve candidate-job matching inefficiencies. The system extracts entity spans (skills, degrees, years of experience), calculates semantic cosine similarity against targeted roles, and generates an honest skill deficiency report.",
    techStack: ["Python", "spaCy", "NLTK", "TF-IDF", "FastAPI"],
    featured: true,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-resume-analyzer.svg",
    year: "In Progress",
    role: "NLP Pipeline Developer",
    highlights: [
      "Automated PDF and DOCX text extraction with robust section segmentation",
      "Named Entity Recognition (NER) fine-tuned for tech skills, frameworks, and academic degrees",
      "Semantic similarity scoring comparing candidate profile embeddings against target job specs",
      "Constructive feedback generator identifying missing high-frequency keywords and missing prerequisites"
    ],
    architecture: [
      "Document Parser: Tokenization, sentence boundary detection, and structured entity extraction.",
      "Embedding Generator: Transforming parsed text into dense vector representations.",
      "Scoring & Feedback Engine: Cosine distance calculation paired with rule-based gap analysis."
    ]
  },
  {
    id: "personal-finance-dashboard",
    slug: "personal-finance-dashboard",
    title: "Automated Personal Expense Analysis Tool",
    category: "Data Analytics & Visualization",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "An exploratory data platform being built to categorize bank transactions, analyze burn-rates, and project monthly savings trajectories.",
    fullDescription: "A practical financial intelligence tool built to transform messy bank statements into intuitive, visual insights. Uses clustering and rule-based categorization to uncover spending leakages, forecast monthly burn rates, and track savings targets.",
    techStack: ["Python", "Pandas", "Matplotlib", "Plotly", "Node.js"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-finance.svg",
    year: "In Progress",
    role: "Data Analyst & Backend Developer",
    highlights: [
      "Automated statement ingestion supporting CSV and spreadsheet export formats",
      "Dynamic expense categorization using text heuristics and clustering techniques",
      "Interactive breakdown charts by merchant, category, and month-over-month trajectory",
      "Threshold-based spending alerts and predictive next-month expense forecasts"
    ],
    architecture: [
      "ETL Pipeline: Cleans raw transaction logs and normalizes descriptions into standardized merchant categories.",
      "Analytics Engine: Computes running averages, variance, and liquidity metrics.",
      "Visual Interface: Modern reactive charts featuring interactive drill-down filtering."
    ]
  },
  {
    id: "realtime-data-visualization",
    slug: "realtime-data-visualization",
    title: "Real-Time Sensor & Telemetry Visualizer",
    category: "Data Streaming & Reactive Web",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "A high-frequency streaming telemetry dashboard currently being engineered to visualize real-time time-series data with zero frame drops.",
    fullDescription: "Designed to explore asynchronous data streams and real-time frontend rendering. The platform subscribes to live mock sensor/system telemetry feeds via WebSockets and visualizes temporal trends without dropping frame rates.",
    techStack: ["JavaScript", "Node.js", "WebSockets", "Chart.js", "Tailwind CSS"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-realtime.svg",
    year: "In Progress",
    role: "Frontend & WebSocket Developer",
    highlights: [
      "WebSocket streaming connection with automatic reconnection and heartbeat pinging",
      "Canvas-accelerated chart rendering capable of displaying 1,000+ data points smoothly",
      "Customizable metric alerts triggering visual notifications on anomaly detection",
      "Playback controls to pause, rewind, and export temporal telemetry snapshots"
    ],
    architecture: [
      "WebSocket Producer: Lightweight Node server dispatching time-series packets at fixed intervals.",
      "Client Buffer: Circular memory buffer maintaining rolling window frames.",
      "Renderer: Highly optimized reactive charts with virtualized rendering techniques."
    ]
  },
  {
    id: "ai-recommendation-system",
    slug: "ai-recommendation-system",
    title: "Hybrid Recommendation Algorithm Prototype",
    category: "Machine Learning & Recommenders",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "An exploration into recommender algorithms, currently prototyping matrix factorization and cosine similarity on benchmark movie/book datasets.",
    fullDescription: "An exploration into recommender algorithms, addressing cold-start challenges through hybrid modeling. Uses matrix factorization (SVD) alongside cosine similarity of content attributes to surface accurate, serendipitous item recommendations.",
    techStack: ["Python", "Surprise", "Scikit-Learn", "Pandas", "Flask"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-recommendation.svg",
    year: "In Progress",
    role: "Machine Learning Researcher",
    highlights: [
      "Implementation of collaborative filtering via Matrix Factorization (SVD)",
      "Content-based similarity weighting using item tags and descriptive metadata",
      "Evaluation using precision@k, recall@k, and Mean Average Precision (MAP)",
      "Web interface allowing users to rate items and view live personalized recommendations"
    ],
    architecture: [
      "Rating Matrix Engine: Sparse matrix generation and user-item interaction modeling.",
      "Hybrid Scorer: Blended scoring function balancing popular trends with niche user affinities.",
      "Client Showcase: Card-based interactive UI with instantaneous recommendation updates."
    ]
  },
  {
    id: "predictive-analytics-ml",
    slug: "predictive-analytics-ml",
    title: "Supervised Learning Benchmark Framework",
    category: "Machine Learning Foundations",
    status: "STILL BUILDING / WORK IN PROGRESS",
    badge: "WORK IN PROGRESS",
    isUpcoming: true,
    shortDescription: "An automated benchmarking suite to evaluate classical estimators (Ridge, Random Forest, XGBoost) across structured tabular datasets.",
    fullDescription: "A comprehensive benchmarking testbed developed to sharpen core machine learning fundamentals. Evaluates preprocessing strategies, dimensionality reduction, feature selection, and model generalization across structured tabular datasets.",
    techStack: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-predictive.svg",
    year: "In Progress",
    role: "ML Developer & Experimenter",
    highlights: [
      "Standardized data preprocessing pipeline: imputation, scaling, one-hot encoding",
      "Comparative analysis of Ridge, Lasso, Random Forest, and Gradient Boosting models",
      "Comprehensive diagnostic curves: Learning Curves, Residuals, and Confusion Matrices",
      "Automated Markdown report generator summarizing hyperparameter configurations and test set results"
    ],
    architecture: [
      "Data Pipeline: Sklearn ColumnTransformer and Pipeline objects for leak-free transformations.",
      "Model Grid: Systematic GridSearchCV exploration with K-Fold cross validation.",
      "Reporting Suite: Visual artifact export and metric collation."
    ]
  }
];

export const upcomingProjects = projects.filter(p => p.isUpcoming);
export const completedProjects = projects.filter(p => !p.isUpcoming);
