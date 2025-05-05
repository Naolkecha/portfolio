
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 100);
    y.set(yPct * 100);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="project-card flex flex-col h-full"
    >
      <h3 
        className="text-xl font-bold mb-3"
        style={{ transform: "translateZ(20px)" }}
      >
        {project.title}
      </h3>
      
      <p 
        className="text-white/70 mb-6 flex-grow"
        style={{ transform: "translateZ(15px)" }}
      >
        {project.description}
      </p>
      
      <div 
        className="flex flex-wrap gap-2 mb-6"
        style={{ transform: "translateZ(25px)" }}
      >
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div 
        className="flex gap-4"
        style={{ transform: "translateZ(30px)" }}
      >
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white/70 hover:text-white"
          aria-label="GitHub Repository"
        >
          <Github size={20} />
        </motion.a>
        
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/70 hover:text-white"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
      
      {project.featured && (
        <div 
          className="absolute -top-2 -right-2 bg-accent px-2 py-1 rounded text-xs font-semibold"
          style={{ transform: "translateZ(40px)" }}
        >
          Featured
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
