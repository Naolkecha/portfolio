
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
      ref={constraintsRef}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="hero-blob bg-indigo-600"
          style={{ 
            left: '10%',
            top: '30%'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="hero-blob bg-purple-700"
          style={{ 
            right: '15%',
            bottom: '20%'
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 z-10 pt-10">
        <div className="flex flex-col max-w-3xl">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-xl md:text-2xl font-medium text-accent mb-3"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-gradient">Naol Kecha</span>
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-white/80"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Full-Stack Software Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mt-6 max-w-2xl text-white/70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I build scalable, performant software — from backend APIs to responsive UIs.
          </motion.p>
          
          <div className="flex flex-wrap mt-8 gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-white flex items-center gap-2 hover:bg-accent/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="/assets/Naol_Kecha_CV.pdf"
              download
              className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Download CV
            </motion.a>
          </div>
          
          <motion.div 
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <a href="#about" className="text-white/30 hover:text-white transition">
              <div className="border-2 border-white/30 rounded-full p-2 hover:border-white">
                <div className="w-1 h-5 bg-white/30 rounded-full mx-auto animate-[bounce_2s_infinite]"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
