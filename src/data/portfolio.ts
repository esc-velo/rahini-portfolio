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
  status: "Core" | "Comfortable" | "Learning";
}
export interface Experience {
  role: string
  type: string
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
  github: string
  linkedin: string
  twitter: string
  instagram: string
  resume: string
  aboutCards: AboutCard[]
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
  email: "rahiniraneru@gmail.com",
  github: "https://github.com/esc-velo",
  linkedin: "https://www.linkedin.com/in/rahiniraneru",
  twitter: "https://twitter.com/rxhini_",
  instagram: "https://instagram.com/rahiniraneruu",
  resume: "/resume.pdf",
  aboutCards: [
  {
    title: "Hi! I'm Rahini",
    description:
      "A Computer Science student passionate about building AI-powered software, automation workflows, and thoughtful digital experiences.",
    image: "/images/about/me.jpeg",
  },
  {
    title: "Native",
    description:
      "Originally from Hyderabad",
    image: "/images/about/hyd.jpeg",
  },
  {
    title: "Currently @ MUJ",
    description:
      "Pursuing CS @ MUJ while exploring AI, full-stack development, and systems engineering.",
    image: "/images/about/muj.jpeg",
  },
  {
    title: "Dean's List",
    description:
      "2x Dean's List Awardee, demonstrates consistency in academics alongside projects and extra-curriculars.",
    image: "/images/about/deans.jpeg",
  },
  {
    title: "Hackathons",
    description:
      "3x hackathon finalist. I enjoy vibecoding ideas into working prototypes under tight deadlines.",
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
      "I'm also training in Kuchipudi, has taught me discipline, patience, and attention to detail.",
    image: "/images/about/dance.jpeg",
  },
  {
    title: "Creative End",
    description:
      "Sketching and design help me think visually, influencing how I approach interfaces, layouts, and user experience.",
    image: "/images/about/sketch.jpeg",
  },
],
  skills: [
      {
    title: "Languages",
    description: "",
    skills: [
      {
        name: "Python",
        status: "Core",
      },
      {
        name: "Java",
        status: "Comfortable",
      },
      {
        name: "C",
        status: "Comfortable",
      },
      {
        name: "JavaScript (ES6+)",
        status: "Core",
      },
    ],
  },
  {
    title: "Frontend",
    description: "Crafting responsive, interactive interfaces with a focus on performance, accessibility, and polished user experiences.",
    skills: [
      {
        name: "React",
        status: "Comfortable",
      },
      {
        name: "Next.js",
        status: "Core",
      },
      {
        name: "Tailwind CSS",
        status: "Core",
      },
      {
        name: "Framer Motion",
        status: "Comfortable",
      },
      {
        name: "TypeScript",
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
        status: "Core",
      },
      {
        name: "Express.js",
        status: "Core",
      },
      {
        name: "FastAPI",
        status: "Comfortable",
      },
      {
        name: "Postman",
        status: "Comfortable",
      },
      {
        name: "PostgreSQL",
        status: "Comfortable",
      },
      {
        name: "MySQL",
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
        status: "Core",
      },
      {
        name: "NumPy",
        status: "Core",
      },
      {
        name: "Pandas",
        status: "Core",
      },
      {
        name: "Scikit-learn",
        status: "Core",
      },
      {
        name: "PyTorch",
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
        status: "Core",
      },
      {
        name: "Docker",
        status: "Learning",
      },
      {
        name: "GitHub",
        status: "Core",
      },
      {
        name: "n8n",
        status: "Core",
      },
      {
        name: "LangChain",
        status: "Learning",
      },
      {
        name: "LangGraph",
        status: "Learning",
      },
    ],
  },
  {
    title: "Deployment",
    description: "Automating workflows, streamlining development, and deploying production-ready applications with modern tooling.",
    skills: [
      {
        name: "Vercel",
        status: "Core",
      },
      {
        name: "Render",
        status: "Core",
      },
    ],
  },
],
    experience: [
    {
      role: "Webmaster",
      type: "leadership",
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
      type: "opensource",
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