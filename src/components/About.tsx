import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const techStack = [
  { name: "Python", icon: "/assets/icons/python.png" },
  { name: "React", icon: "/assets/icons/react.png" },
  { name: "Flutter", icon: "/assets/icons/flutter.png" },
  { name: "Node.js", icon: "/assets/icons/nodejs.png" },
  { name: "MySQL", icon: "/assets/icons/mysql.png" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know my background and skills"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p className="text-lg mb-6">
              I'm a passionate Full-Stack Software Engineer with expertise in building modern web and mobile applications. My journey in software development started with a deep curiosity about how digital products work and evolved into a career creating elegant solutions to complex problems.
            </motion.p>
            <motion.p className="text-lg mb-6">
              With experience across the entire development stack, I excel in crafting robust backend systems and intuitive user interfaces. I'm committed to writing clean, maintainable code and constantly expanding my technical knowledge to build better software.
            </motion.p>
            <motion.p className="text-lg">
              When I'm not coding, I enjoy contributing to open-source projects, mentoring upcoming developers, and exploring new technologies that can enhance the products I build.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.2)"
                }}
                className="glass-morphism p-6 rounded-xl flex flex-col items-center justify-center aspect-square"
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-16 h-16 mb-3"
                />
                <h3 className="font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
