import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const HomePage = ({ setActivePage }) => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex items-center justify-center"
    >
      <div className="max-w-3xl px-8 sm:px-0">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-2"
        >
          <span className="block text-primary mb-2">I'M STEVE MILNER.</span>
          <span className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>WEB DESIGNER</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        >
          I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, 
          I am passionate about building excellent software that improves the lives of those around me.
        </motion.p>
        
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActivePage('about')}
          className="btn-primary"
        >
          MORE ABOUT ME <FaArrowRight />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HomePage;