export interface Project {
  id: string
  title: string
  image: string
  subtitle: string
  description: string
  tech: string[]
  github?: string
  live?: string
}
export interface Skill {
  name: string
  summary: string
  projectIds?: Project["id"][]
  status: "Core" | "Comfortable" | "Learning";
}
export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
}
export interface AboutCard {
  title: string
  description: string
  image: string
}
export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}
export interface PortfolioData {
  name: string
  title: string
  tagline: string
  avatar: string
  about: string
  email: string
  aboutCards: AboutCard[]
  github: string
  linkedin: string
  twitter: string
  skills: SkillCategory[]
  projects: Project[]
  experience: Experience[]
}
export const portfolioData: PortfolioData = {
  name: "Rahini Raneru",
  title: "Computer Science Student | Full Stack Web & AI Developer",
  tagline: "I build responsive web applications and design intelligent systems.",
  avatar: "/avatar-photo.png",
  about: "I build things that I wish existed. My work spans machine learning, full-stack development, and AI automation, with a growing interest in multi-agent systems and brain-inspired computing.",
  email: "[rahiniraneru@gmail.com]",
  aboutCards: [
  {
    title: "Hi, I'm Rahini",
    description:
      "A Computer Science student passionate about building AI-powered software, automation workflows, and thoughtful digital experiences.",
    image: "/images/about/me.jpeg",
  },
  {
    title: "Hyderabad Roots",
    description:
      "Originally from Hyderabad, a city that sparked my curiosity for technology while keeping me grounded in culture.",
    image: "/images/about/hyd.jpeg",
  },
  {
    title: "Currently @ MUJ",
    description:
      "Pursuing Computer Science at Manipal University Jaipur while exploring AI, full-stack development, and systems engineering.",
    image: "/images/about/muj.jpeg",
  },
  {
    title: "Dean's List",
    description:
      "Two-time Dean's List Awardee, reflecting consistent academic performance alongside projects and extracurriculars.",
    image: "/images/about/deans.jpeg",
  },
  {
    title: "Hackathons",
    description:
      "Three-time hackathon finalist. I enjoy transforming ideas into working prototypes under tight deadlines.",
    image: "/images/about/hackathon.jpeg",
  },
  {
    title: "What I Build",
    description:
      "From machine learning models and REST APIs to AI agents and automation workflows, I love solving practical problems with software.",
    image: "/images/about/build.jpeg",
  },
  {
    title: "Beyond Code",
    description:
      "I'm also a trained classical dancer. It has taught me discipline, patience, and attention to detail that carry into engineering.",
    image: "/images/about/dance.jpeg",
  },
  {
    title: "Creative Side",
    description:
      "Sketching and design help me think visually, influencing how I approach interfaces, layouts, and user experience.",
    image: "/images/about/sketch.jpeg",
  },
],
  github: "https://github.com/esc-velo",
  linkedin: "https://linkedin.com/in/rahiniraneru",
  twitter: "https://twitter.com/rxhini_",
  skills: [
  {
    title: "Frontend",
    description: "Crafting responsive, interactive interfaces with a focus on performance, accessibility, and polished user experiences.",
    skills: [
      {
        name: "React",
        summary:
          "Building interactive component-based user interfaces with reusable architecture.",
        projectIds: ["rentman"],
        status: "Comfortable",
      },
      {
        name: "Next.js",
        summary:
          "My primary framework for building modern web applications with App Router and TypeScript.",
        projectIds: ["notifymail"],
        status: "Core",
      },
      {
        name: "Tailwind CSS",
        summary:
          "Creating responsive interfaces with utility-first styling and custom design systems.",
        projectIds: ["rentman", "notifymail"],
        status: "Core",
      },
      {
        name: "Framer Motion",
        summary:
          "Adding polished interactions and smooth animations to improve user experience.",
        projectIds: ["notifymail"],
        status: "Comfortable",
      },
      {
        name: "TypeScript",
        summary:
          "Developing type-safe frontend applications with maintainable component architecture.",
        projectIds: ["rentman", "notifymail"],
        status: "Core",
      },
    ],
  },

  {
    title: "Backend",
    description: "Building scalable APIs, data-driven applications, and backend systems that prioritize clean architecture and reliability.",
    skills: [
      {
        name: "Node.js",
        summary:
          "Building backend services and REST APIs using the JavaScript ecosystem.",
        projectIds: ["rentman", "notifymail"],
        status: "Core",
      },
      {
        name: "Express.js",
        summary:
          "Developing RESTful APIs with structured routing and middleware.",
        projectIds: ["rentman"],
        status: "Core",
      },
      {
        name: "FastAPI",
        summary:
          "Building lightweight Python APIs for machine learning and automation workflows.",
        projectIds: ["goalcast", "sleep-stage"],
        status: "Comfortable",
      },
      {
        name: "PostgreSQL",
        summary:
          "Working with relational databases for production applications and persistent storage.",
        projectIds: ["notifymail"],
        status: "Comfortable",
      },
      {
        name: "MySQL",
        summary:
          "Designing normalized relational databases and writing efficient SQL queries.",
        projectIds: ["rentman"],
        status: "Core",
      },
    ],
  },

  {
    title: "AI & Data",
    description: "Transforming data into intelligent applications through machine learning, feature engineering, and predictive modeling.",
    skills: [
      {
        name: "Python",
        summary:
          "My primary language for machine learning, automation, backend scripting, and data analysis.",
        projectIds: ["goalcast", "sleep-stage", "notifymail"],
        status: "Core",
      },
      {
        name: "NumPy",
        summary:
          "Performing numerical computation and efficient array operations for ML pipelines.",
        projectIds: ["goalcast", "sleep-stage"],
        status: "Core",
      },
      {
        name: "Pandas",
        summary:
          "Cleaning, transforming, and analyzing structured datasets for machine learning.",
        projectIds: ["goalcast", "sleep-stage"],
        status: "Core",
      },
      {
        name: "Scikit-learn",
        summary:
          "Training, evaluating, and optimizing classical machine learning models.",
        projectIds: ["goalcast", "sleep-stage"],
        status: "Core",
      },
      {
        name: "PyTorch",
        summary:
          "Exploring deep learning workflows and neural network development.",
        status: "Learning",
      },
    ],
  },

  {
    title: "Tools",
    description: "Automating workflows, streamlining development, and deploying production-ready applications with modern tooling.",
    skills: [
      {
        name: "Git",
        summary:
          "Using version control for collaborative development and project management.",
        projectIds: ["goalcast", "rentman", "notifymail"],
        status: "Core",
      },
      {
        name: "Docker",
        summary:
          "Containerizing applications for reproducible development and deployment.",
        projectIds: ["notifymail"],
        status: "Learning",
      },
      {
        name: "GitHub",
        summary:
          "Managing repositories, pull requests, and collaborative software development.",
        projectIds: [
          "goalcast",
          "rentman",
          "notifymail",
          "sleep-stage",
        ],
        status: "Core",
      },
      {
        name: "n8n",
        summary:
          "Designing AI-powered automation workflows integrating APIs and external services.",
        projectIds: ["notifymail"],
        status: "Core",
      },
    ],
  },
],
    experience: [
    {
      role: "Webmaster",
      company: "IEEE Computational Intelligence Society, MUJ",
      period: "June 2025 - April 2026",
      description: [
        "Maintain and improve the chapter website using HTML, CSS, TypeScript and JavaScript.",
        "Improved website accessibility and responsive layouts.",
        "Co-organized Prompt401, managing registrations, communications and event coordination."
      ]
    },

    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      period: "2025",
      description: [
        "Contributed UI improvements to a browser-based video editor.",
        "Submitted multiple pull requests with merged contributions.",
        "Worked using collaborative Git workflows."
      ]
    },
  ],
  projects: [
  {
    id: "goalcast",
    title: "GoalCast",
    image: "/images/projects/goalcast.png",
    subtitle: "Football Goal Probability Prediction using Machine Learning",
    description:
      "Developed an end-to-end machine learning pipeline trained on over 1.3 million football player-match records to predict goal-scoring probability. The project tackled real-world challenges including feature leakage, severe class imbalance, and missing data while engineering domain-specific features such as expected goals (xG), market valuation, positional roles, and international experience. The final CatBoost model achieved an Average Precision of 47.74, within 10% of the competition-leading score.",
    tech: [
      "Python",
      "CatBoost",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning"
    ],
    github: "https://github.com/esc-velo/offside-datathon",
  },

  {
    id: "notifymail",
    title: "NotifyMail",
    image: "/images/projects/notifymail.png",
    subtitle: "Production AI Email Triage & Notification System",
    description:
      "Built a production-deployed AI automation platform that continuously monitors Gmail inboxes, classifies emails using Groq's Llama 3.1 model, and delivers structured Discord notifications for internships, hackathons, and career opportunities. The workflow integrates Gmail OAuth2, n8n automation, Docker deployment, PostgreSQL persistence, and GitHub Actions scheduling to create a reliable, always-running assistant.",
    tech: [
      "n8n",
      "Groq API",
      "Llama 3.1",
      "Docker",
      "Render",
      "Neon PostgreSQL",
      "GitHub Actions",
      "JavaScript"
    ],
    github: "https://github.com/esc-velo/notifymail",
  },

  {
    id: "rentman",
    title: "RentMan",
    image: "/images/projects/rentman.png",
    subtitle: "Full Stack Rental Management System",
    description:
      "Designed and developed a complete rental management platform with a normalized relational database, RESTful backend, and interactive frontend. The system manages owners, tenants, properties, rental agreements, payments, and maintenance requests through a clean CRUD architecture built using Express.js and Sequelize ORM.",
    tech: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "HTML",
      "CSS",
      "JavaScript",
      "Postman"
    ],
    github: "https://github.com/esc-velo/rentman",
  },

  {
    id: "sleep-stage",
    title: "Sleep Stage \n Classification",
    image: "/images/projects/sleep-stage.png",
    subtitle: "EEG Signal Analysis with Machine Learning",
    description:
      "Developed a machine learning pipeline for automatic sleep stage classification using nearly 200 hours of EEG recordings from the Sleep-EDF dataset. The project included signal preprocessing with MNE-Python, frequency-domain feature extraction, and Random Forest classification, achieving 82% accuracy and a macro F1-score of 0.71 on imbalanced sleep-stage data.",
    tech: [
      "Python",
      "MNE-Python",
      "NumPy",
      "SciPy",
      "Pandas",
      "Scikit-learn",
      "Random Forest"
    ],
  }
]

  
}