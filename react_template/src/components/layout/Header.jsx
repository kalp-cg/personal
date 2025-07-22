import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaCog, FaBars } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ isMobileNavOpen, setIsMobileNavOpen, showSettings, setShowSettings }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 w-full z-40 px-5 py-4 flex justify-between items-center
        ${theme === 'dark' ? 'bg-[#222]/80 text-white backdrop-blur-sm' : 'bg-white/80 text-gray-800 backdrop-blur-sm shadow-sm'}`}
    >
      {/* Mobile Menu Button - only visible on mobile */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="text-xl md:hidden"
      >
        <FaBars />
      </motion.button>
      
      {/* Empty div for desktop to maintain space */}
      <div className="hidden md:block"></div>
      
      {/* Right Side Controls */}
      <div className="flex items-center gap-4">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl hover:text-primary transition-colors duration-300"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </motion.button>
        <motion.button
          onClick={() => setShowSettings(!showSettings)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`text-xl transition-colors duration-300 ${showSettings ? 'text-primary' : 'hover:text-primary'} settings-button`}
        >
          <FaCog className={showSettings ? 'animate-spin-slow' : 'animate-none'} />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;