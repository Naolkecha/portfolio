
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment processing, admin dashboard, and inventory management.",
    techStack: ["React", "Flask", "MongoDB", "Express"],
    githubUrl: "https://github.com/nashurgessa/ecom_buyer_frontend",
    liveUrl: "www.shopnan.com",
    featured: true
  },
  {
    id: 2,
    title: "Ecommerce mobile application",
    description: "A cross-platform mobile application for an e-commerce platform with product browsing, cart management, chat, and order tracking.",
    techStack: ["Flutter", "Dart", "Flask", "RESTful APIs"],
    githubUrl: "https://github.com/nashurgessa/E_commerce-flutter"  
  },

  {
    id: 5,
    title: "Patient registration and Appointment scheduling system",
    description: "Patient registration and Appointment scheduling system is mobile application in which a patient can schedule his or her medical appointment.",
    techStack:  ["Flutter", "Node.js", "MySQL"],
    githubUrl: "https://github.com/naolkecha"
  },
  {
    id: 6,
    title: "Tariff Control System",
    description: "A web-based solution designed to help passengers in Ethiopia check official transportation tariffs, report illegal fare hikes, and enable traffic officers to manage records.",
    techStack: ["HTML", "Javascript", "CSS", "MySQL", "Spring Boot"],
    githubUrl: "https://github.com/jebessaD/tariff-control-system",
    liveUrl: "https://project-demo.com"
  },
  {
    id: 7,
    title: "Jupiter Technology Institute Website",
    description: "A responsive website for Jupiter Technology Institute, showcasing courses, and student resources and providing information about the institute.",
    techStack: ["React", "Node js", "MySQL","JWT"],
    githubUrl: "https://github.com/Naolkecha/jupiter-tech-institute"
  },
];
