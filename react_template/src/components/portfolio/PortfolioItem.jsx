import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaLink, FaPlay } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const PortfolioItem = ({ item }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    if (item.category === 'video') {
      return <FaPlay />;
    } else {
      return <FaLink />;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`overflow-hidden rounded-lg shadow-lg ${theme === 'dark' ? 'shadow-gray-800' : 'shadow-gray-200'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden w-full h-64">
        {/* Placeholder for image - using a background color */}
        <div 
          className="w-full h-full bg-gray-300"
          style={{ backgroundColor: theme === 'dark' ? '#333' : '#e5e7eb' }}
        ></div>

        <motion.div 
          className="absolute inset-0 bg-primary/80 flex flex-col items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl font-bold text-white mb-2"
          >
            {item.title}
          </motion.span>
          
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm text-white capitalize mb-4"
          >
            {item.category}
          </motion.span>
          
          <motion.a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            {getIcon()}
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;