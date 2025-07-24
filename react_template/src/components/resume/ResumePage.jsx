import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Experience from '../shared/Experience';
import Education from '../shared/Education';
import ResumeButton from '../shared/ResumeButton';

const ResumePage = () => {
  const { theme } = useTheme();
  
  // Container and item variants for animations

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

  // Using shared components for timeline items

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full overflow-y-auto py-16 px-6 md:px-12"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          MY <span className="text-primary">RESUME</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="w-12 h-1 bg-primary"></span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            EXPERIENCE & EDUCATION
          </span>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={itemVariants}>
          <Experience isResumePage={true} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Education isResumePage={true} />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-12 flex justify-center">
        <ResumeButton className="flex items-center gap-2" />
      </motion.div>
    </motion.div>
  );
};

export default ResumePage;