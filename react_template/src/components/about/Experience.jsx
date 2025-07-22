import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  
  const experiences = [
    {
      period: '2020 - Present',
      title: 'Web Developer',
      company: 'Envato',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere in dolor non dictum. Integer congue libero vel leo porttitor, quis finibus mi feugiat.'
    },
    {
      period: '2018 - 2020',
      title: 'UI/UX Designer',
      company: 'Themeforest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere in dolor non dictum. Integer congue libero vel leo porttitor, quis finibus mi feugiat.'
    },
    {
      period: '2016 - 2018',
      title: 'Front-End Developer',
      company: 'Dribbble',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere in dolor non dictum. Integer congue libero vel leo porttitor, quis finibus mi feugiat.'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        Experience
      </h3>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`relative pl-10 pb-6 border-l-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} last:border-0`}
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <FaBriefcase className="text-xs text-white" />
            </div>
            
            <span className="inline-block px-4 py-1 mb-3 text-xs rounded-full bg-primary/10 text-primary font-medium">
              {exp.period}
            </span>
            
            <h4 className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {exp.title} - <span className="text-primary">{exp.company}</span>
            </h4>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;