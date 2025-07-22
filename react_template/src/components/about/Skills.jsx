import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'WordPress', percentage: 75 },
    { name: 'Flutter', percentage: 70 },
  ];

  return (
    <div>
      <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        My Skills
      </h3>
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="w-full">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;