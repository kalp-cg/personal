import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

const Logo = ({ size = 'default', showText = true }) => {
  const { theme } = useTheme();
  
  // Define size classes
  const sizeClasses = {
    small: 'w-10 h-10 text-lg',
    default: 'w-16 h-16 text-2xl',
    large: 'w-20 h-20 text-3xl'
  };
  
  // SVG path for a stylized 'K' logo
  const svgPath = "M8,4 L8,16 M8,10 L14,4 M8,10 L14,16";
  
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <motion.div 
        className={`flex items-center justify-center ${sizeClasses[size]} rounded-full bg-primary/10 relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <motion.div
          className="absolute inset-0 bg-primary/10 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* SVG Logo */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full p-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: 'var(--color-primary)' }}
        >
          <path d={svgPath} />
        </svg>
        
        {/* Animated ring effect */}
        <motion.div 
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />
      </motion.div>
      
      {showText && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="hidden lg:block"
        >
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Kalp Patel
          </h1>
          <p className="text-primary font-medium text-sm">Web Developer & UI/UX Designer</p>
        </motion.div>
      )}
    </Link>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  showText: PropTypes.bool
};

export default Logo;