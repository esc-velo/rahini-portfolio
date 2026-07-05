export interface Skill {
  name: string
  level: number // percentage
}
export interface SkillCategory {
  title: string
  skills: Skill[]
}
export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}
export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
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
      period: "2025 - Present",
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
  projects: []
}