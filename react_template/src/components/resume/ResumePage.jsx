import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';

const ResumePage = () => {
  const { theme } = useTheme();
  
  const workExperience = [
    {
      id: 1,
      position: 'Senior UI/UX Designer',
      company: 'Google',
      period: '2020 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    },
    {
      id: 2,
      position: 'UI/UX Designer',
      company: 'Facebook',
      period: '2018 - 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    },
    {
      id: 3,
      position: 'Junior UI/UX Designer',
      company: 'Envato',
      period: '2016 - 2018',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Master in Design',
      institution: 'Harvard University',
      period: '2014 - 2016',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    },
    {
      id: 2,
      degree: 'Bachelor in Design',
      institution: 'Stanford University',
      period: '2010 - 2014',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    },
    {
      id: 3,
      degree: 'Diploma in Design',
      institution: 'MIT',
      period: '2008 - 2010',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor metus, eget egestas arcu facilisis sit amet. Phasellus sodales feugiat nulla sed vestibulum.'
    }
  ];

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

  const TimelineItem = ({ item, icon }) => (
    <motion.div 
      variants={itemVariants}
      className="relative pl-8 pb-8 border-l border-gray-300 dark:border-gray-700 last:border-0 last:pb-0"
    >
      <div className={`absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center`}>
        {icon}
      </div>
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-6`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {item.position || item.degree}
          </h3>
          <span className="px-3 py-1 text-xs font-medium text-white rounded-full bg-primary">
            {item.period}
          </span>
        </div>
        <h4 className="text-primary text-lg mb-3">{item.company || item.institution}</h4>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );

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
        <div>
          <motion.h2 
            variants={itemVariants} 
            className={`text-2xl font-bold mb-8 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            <FaBriefcase className="text-primary" />
            Working Experience
          </motion.h2>
          
          <div className="space-y-6">
            {workExperience.map(item => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                icon={<FaBriefcase size={10} className="text-white" />} 
              />
            ))}
          </div>
        </div>
        
        <div>
          <motion.h2 
            variants={itemVariants} 
            className={`text-2xl font-bold mb-8 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          >
            <FaGraduationCap className="text-primary" />
            Educational Qualification
          </motion.h2>
          
          <div className="space-y-6">
            {education.map(item => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                icon={<FaGraduationCap size={10} className="text-white" />} 
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="mt-12 flex justify-center">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf" 
          target="_blank" 
          className="btn-primary flex items-center gap-2"
        >
          DOWNLOAD RESUME <FaDownload />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ResumePage;