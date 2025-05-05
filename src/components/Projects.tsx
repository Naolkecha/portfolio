
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.techStack.includes(filter))
    : projects;
    
  // Get unique tech stacks
  const techStacks = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  ).sort();
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore some of my recent work"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm ${
              !filter 
                ? "bg-accent text-white" 
                : "bg-white/10 text-white/70 hover:bg-white/20"
            } transition`}
          >
            All
          </motion.button>
          
          {techStacks.map(tech => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tech 
                  ? "bg-accent text-white" 
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              } transition`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
