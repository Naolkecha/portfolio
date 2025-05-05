
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/30">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey"
        />
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              
              <div>
                <motion.h3 
                  className="text-xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  {experience.role}
                </motion.h3>
                
                <motion.div
                  className="flex flex-wrap items-center gap-x-3 text-white/70 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <span className="font-medium text-accent">{experience.company}</span>
                  <span>•</span>
                  <span>{experience.duration}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </motion.div>
                
                <motion.p
                  className="mt-3 text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {experience.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap gap-2 mt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  {experience.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
