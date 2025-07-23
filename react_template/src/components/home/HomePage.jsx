import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const HomePage = ({ setActivePage }) => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.2,
      color: 'var(--color-primary)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  const backgroundCircleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 0.1, scale: 1, transition: { delay: 0.6, duration: 1.2, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-[calc(100vh-65px)] flex flex-col lg:flex-row items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div 
        variants={backgroundCircleVariants} 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary opacity-5 hidden md:block"
      />
      <motion.div 
        variants={backgroundCircleVariants} 
        className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-primary opacity-5 hidden md:block"
      />
      
      {/* Social links (vertical) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6"
      >
        <motion.a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover="hover"
          variants={socialIconVariants}
          className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover="hover"
          variants={socialIconVariants}
          className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="https://dribbble.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover="hover"
          variants={socialIconVariants}
          className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
        >
          <FaDribbble />
        </motion.a>
        <motion.a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover="hover"
          variants={socialIconVariants}
          className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
        >
          <FaTwitter />
        </motion.a>
        <div className="h-20 w-px bg-primary"></div>
      </motion.div>
      
      {/* Main content */}
      <div className="max-w-7xl w-full px-6 sm:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2">
          <motion.span 
            variants={itemVariants}
            className="inline-block text-primary text-lg font-medium mb-4 border-b-2 border-primary pb-1"
          >
            WELCOME TO MY WORLD
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className={`block ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Hi, I'm</span>
            <span className="block text-primary mt-2">Kalp Patel</span>
            <span className={`block mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              <span className="inline typing-text relative">
                UI/UX Designer
                <span className="absolute -right-1 top-0 h-full w-1 bg-primary animate-blink"></span>
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className={`text-lg mb-8 max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            I'm a Tunisian based web designer & front‑end developer passionate about creating intuitive, 
            immersive digital experiences that solve real problems and delight users.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                EXPLORE MY WORK <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded font-medium border-2 border-primary ${theme === 'dark' ? 'text-white' : 'text-gray-800'} hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2`}
              >
                CONTACT ME
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Profile image or graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="w-full h-full rounded-full bg-primary/20 overflow-hidden flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-primary/30 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-gray-200 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  {/* Replace with actual profile image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/60 to-blue-400/60"></div>
                </div>
              </div>
            </div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className={`absolute -bottom-4 -right-4 md:bottom-0 md:right-0 rounded-full py-2 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <p className="text-primary font-bold">5+ YEARS</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>EXPERIENCE</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden lg:flex flex-col items-center absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <span className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>SCROLL DOWN</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-primary rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-1 rounded-full bg-primary"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;