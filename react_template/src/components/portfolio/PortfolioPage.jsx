import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import PortfolioItem from './PortfolioItem';

const PortfolioPage = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'logo', name: 'LOGO' },
    { id: 'video', name: 'VIDEO' },
    { id: 'graphic', name: 'GRAPHIC DESIGN' },
    { id: 'mockup', name: 'MOCKUP' }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'YouTube Video',
      category: 'video',
      image: '/assets/images/portfolio-1.jpg',
      link: 'https://www.youtube.com/watch?v=7e90gBu4pas'
    },
    {
      id: 2,
      title: 'Soundcloud Audio',
      category: 'mockup',
      image: '/assets/images/portfolio-2.jpg',
      link: 'https://soundcloud.com/'
    },
    {
      id: 3,
      title: 'Detailed Project',
      category: 'logo',
      image: '/assets/images/portfolio-3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'External Link',
      category: 'graphic',
      image: '/assets/images/portfolio-4.jpg',
      link: 'https://themeforest.net/'
    },
    {
      id: 5,
      title: 'Image Project',
      category: 'video',
      image: '/assets/images/portfolio-5.jpg',
      link: '#'
    },
    {
      id: 6,
      title: 'Image Gallery',
      category: 'mockup',
      image: '/assets/images/portfolio-6.jpg',
      link: '#'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full overflow-y-auto py-16 px-6 md:px-12"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          MY <span className="text-primary">PORTFOLIO</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="w-12 h-1 bg-primary"></span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            WORKS
          </span>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === category.id 
                ? 'bg-primary text-white' 
                : theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-primary/20' 
                  : 'bg-gray-200 text-gray-700 hover:bg-primary/20'}`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;