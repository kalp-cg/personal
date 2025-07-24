import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Skills = ({ showTitle = true }) => {
  const { theme } = useTheme();
  
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'WordPress', percentage: 75 },
    { name: 'Flutter', percentage: 70 },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div>
      {showTitle && (
        <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          My Skills
        </h3>
      )}
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="w-full"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {skill.name}
              </span>
              <span className="text-primary text-sm font-semibold">
                {skill.percentage}%
              </span>
            </div>
            <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;