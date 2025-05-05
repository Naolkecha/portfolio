
export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Nanosoft PLC",
    role: "Senior Full Stack Developer",
    duration: "Sep 2024 - Present",
    location: "Addis Ababa, Ethiopia",
    description: "Lead development of enterprise-scale web applications. Architect and implement scalable backend services and responsive frontend interfaces. Mentor junior developers and conduct code reviews.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Docker", "Flutter", "Flask"]
  },

  {
    id: 2,
    company: "eTech",
    role: "Intern Cyber Security Engineer",
    duration: "Feb 2023 - June 2023",
    location: "Addis Ababa, Ethiopia",
    description: "Created cross-platform mobile applications using Flutter. Built and maintained backend services to support mobile apps. Implemented authentication, data synchronization, and push notifications.",
    skills: ["Flutter", "Dart", "Firebase", "RESTful APIs", "iOS", "Android"]
  },
  {
    id: 4,
    company: "Jupiter technology inistitute",
    role: "Full-Stack Developer",
    duration: "Jan 2022 - May 2023",
    location: "Burayu, Ethiopia",
    description: "Designed and developed responsive web interfaces. Collaborated with UX designers to implement user-friendly experiences. Optimized website performance and accessibility.",
    skills: ["JavaScript", "React", "CSS/SCSS", "HTML5", "Webpack", "Performance Optimization"]
  }
];
