export interface Skill {
  name: string
  level: number // percentage
}
export interface SkillCategory {
  title: string
  skills: Skill[]
}
export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  github?: string
  live?: string
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
  about: "I'm a Computer Science student at Manipal University Jaipur with interests in machine learning, full-stack development, AI automation, and intelligent systems. I enjoy building projects that combine software engineering with practical AI, ranging from predictive ML models and REST APIs to production-grade automation workflows. I'm currently exploring multi-agent systems, neurotechnology, and scalable AI applications.",
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
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C", level: 75 },
        { name: "Java", level: 70 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "PyTorch", level: 75 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 90 },
        { name: "SciPy", level: 80 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React / Next.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Framer Motion", level: 75 },
        { name: "Python / FastAPI", level: 82 },
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Docker", level: 75 },
        { name: "n8n", level: 90 }
      ]
    }
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
    title: "Sleep Stage Classification",
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