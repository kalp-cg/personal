import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const PersonalInfo = ({ showTitle = true }) => {
  const { theme } = useTheme();
  
  const personalDetails = [
    { label: 'First Name', value: 'Steve' },
    { label: 'Last Name', value: 'Milner' },
    { label: 'Age', value: '27 Years' },
    { label: 'Nationality', value: 'Tunisian' },
    { label: 'Freelance', value: 'Available' },
    { label: 'Address', value: 'Tunis' },
    { label: 'Phone', value: '+21621184010' },
    { label: 'Email', value: 'you@mail.com' },
    { label: 'Skype', value: 'steve.milner' },
    { label: 'Languages', value: 'English, French' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div>
      {showTitle && (
        <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Personal Info
        </h3>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalDetails.map((detail, index) => (
          <motion.div 
            key={index} 
            className="flex"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
          >
            <span className={`font-medium mr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {detail.label}:
            </span>
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {detail.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;