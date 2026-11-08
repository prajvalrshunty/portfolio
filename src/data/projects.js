export const projects = [
  {
    id: "personal-portfolio",
    slug: "personal-portfolio",
    title: "Personal Portfolio & Editorial Digital Identity",
    category: "Web & Creative Development",
    status: "COMPLETED",
    badge: "ACTIVE & LIVE",
    isUpcoming: false,
    shortDescription: "An Awwwards-inspired, high-performance dark editorial portfolio showcasing data science focus, technical skills, and dynamic GitHub integration.",
    fullDescription: "Designed and engineered as a bespoke digital presence reflecting an honest, high-standard engineering mindset. Features an editorial layout, responsive custom cursor, dynamic GitHub API synchronization, theme toggling, EmailJS messaging architecture, and scalable data-driven sections.",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "GitHub REST API", "EmailJS"],
    featured: true,
    githubUrl: "https://github.com/prajvalrshunty",
    liveUrl: "https://prajvalrshunty.vercel.app/",
    image: "/images/portfolio-preview.svg",
    year: "2026",
    role: "Design & Frontend Architecture",
    highlights: [
      "Zero-latency theme toggle with persisted user preference across sessions",
      "Dynamic GitHub profile and repository fetching with graceful offline fallbacks",
      "EmailJS contact pipeline with validation, spam guards, and real-time response states",
      "Full mobile-first responsiveness with custom desktop cursor and reduced motion support"
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
    title: "AI-Powered Student Performance Prediction System",
    category: "Machine Learning & Education",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "A machine learning pipeline to analyze multi-factor academic indicators and provide early risk warnings and personalized study recommendations.",
    fullDescription: "A predictive analytics application designed to assist educators and students in identifying learning bottlenecks. By ingesting historical assessment records, attendance patterns, and study habits, the ML model flags students at risk of underperforming and suggests targeted interventions.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit / React"],
    featured: true,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-student-perf.svg",
    year: "Upcoming",
    role: "Planned / Machine Learning Pipeline",
    highlights: [
      "Feature engineering on attendance rates, assignment completion timestamps, and quiz performance",
      "Comparison between Random Forest, Gradient Boosting, and Logistic Regression baselines",
      "Interpretability module using SHAP values to explain individual risk factors transparently",
      "Interactive educator dashboard for cohort analysis and actionable intervention plans"
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
    title: "Intelligent Resume Analyzer Using NLP",
    category: "Natural Language Processing",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "An NLP-powered text processing engine that parses candidate resumes, computes semantic alignment with job descriptions, and highlights skill gaps.",
    fullDescription: "Leveraging Natural Language Processing and vector embeddings to solve candidate-job matching inefficiencies. The system extracts entity spans (skills, degrees, years of experience), calculates semantic cosine similarity against targeted roles, and generates an honest skill deficiency report.",
    techStack: ["Python", "spaCy / NLTK", "TF-IDF / Hugging Face", "FastAPI"],
    featured: true,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-resume-analyzer.svg",
    year: "Upcoming",
    role: "Planned / NLP Engineering",
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
    title: "Personal Finance Analysis Dashboard",
    category: "Data Analytics & Visualization",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "An interactive exploratory data platform providing granular expense categorization, cash-flow trends, and spending anomaly detection.",
    fullDescription: "A practical financial intelligence tool built to transform messy bank statements into intuitive, visual insights. Uses clustering and rule-based categorization to uncover spending leakages, forecast monthly burn rates, and track savings targets.",
    techStack: ["Python", "Pandas", "Plotly", "Node.js / React", "Tailwind CSS"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-finance.svg",
    year: "Upcoming",
    role: "Planned / Full-Stack Analytics",
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
    title: "Real-Time Data Visualization Platform",
    category: "Web Sockets & Streaming Data",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "A high-throughput streaming telemetry dashboard rendering real-time metrics with zero browser lag and dynamic threshold monitoring.",
    fullDescription: "Designed to explore asynchronous data streams and real-time frontend rendering. The platform subscribes to live mock sensor/system telemetry feeds via WebSockets and visualizes temporal trends without dropping frame rates.",
    techStack: ["JavaScript / Node.js", "WebSockets", "Chart.js / D3.js", "Tailwind CSS"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-realtime.svg",
    year: "Upcoming",
    role: "Planned / Real-time Frontend",
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
    title: "AI-Based Recommendation System",
    category: "Machine Learning & Recommenders",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "A hybrid recommendation engine combining collaborative filtering with content-based metadata to generate personalized content suggestions.",
    fullDescription: "An exploration into recommender algorithms, addressing cold-start challenges through hybrid modeling. Uses matrix factorization (SVD) alongside cosine similarity of content attributes to surface accurate, serendipitous item recommendations.",
    techStack: ["Python", "Surprise", "Scikit-Learn", "Pandas", "Flask / React"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-recommendation.svg",
    year: "Upcoming",
    role: "Planned / Machine Learning",
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
    title: "Machine Learning-Based Predictive Analytics",
    category: "Supervised Learning & Forecasting",
    status: "IDEA / PLANNED",
    badge: "PLANNED",
    isUpcoming: true,
    shortDescription: "End-to-end regression and classification framework comparing classical estimators across benchmark datasets with automated performance reports.",
    fullDescription: "A comprehensive benchmarking testbed developed to sharpen core machine learning fundamentals. Evaluates preprocessing strategies, dimensionality reduction, feature selection, and model generalization across structured tabular datasets.",
    techStack: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    featured: false,
    githubUrl: null,
    liveUrl: null,
    image: "/images/project-predictive.svg",
    year: "Upcoming",
    role: "Planned / ML Experimentation",
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
