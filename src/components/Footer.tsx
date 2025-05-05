
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/naolkecha", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/naolkecha-g", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/naolkecha", label: "Twitter" },
    { icon: Mail, href: "mailto:naolkecha@gmail.com", label: "Email" }
  ];
  
  return (
    <footer className="py-10 border-t border-white/10 bg-black/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-accent">NK</span>
            </h2>
            <p className="text-white/50 mt-2">Full-Stack Software Engineer</p>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 mb-6 md:mb-0 md:hidden"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/50 hover:text-accent transition"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-accent/10 hidden md:flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>© {currentYear} Naol Kecha. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
