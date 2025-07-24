import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import ImageViewer from '../shared/ImageViewer';

const ClicksPage = () => {
  const { theme } = useTheme();
  
  const naturePosts = [
    {
      id: 1,
      title: 'Sunset at Mountain Valley',
      date: '23 March, 2022',
      category: 'Landscape',
      image: '/assets/images/nature-1.jpg',
      description: 'Beautiful sunset captured at the mountain valley during my hiking trip. The golden hour light created a magical atmosphere.'
    },
    {
      id: 2,
      title: 'Misty Forest Morning',
      date: '10 February, 2022',
      category: 'Forest',
      image: '/assets/images/nature-2.jpg',
      description: 'Early morning fog in the dense forest creates a mystical atmosphere. The sunlight filtering through the trees was breathtaking.'
    },
    {
      id: 3,
      title: 'Coastal Waves at Dusk',
      date: '15 January, 2022',
      category: 'Seascape',
      image: '/assets/images/nature-3.jpg',
      description: 'The powerful waves crashing against the rocky coastline during dusk. The colors of the sky reflected in the water were stunning.'
    },
    {
      id: 4,
      title: 'Spring Wildflowers',
      date: '5 December, 2021',
      category: 'Flora',
      image: '/assets/images/nature-4.jpg',
      description: 'A field of colorful wildflowers blooming in early spring. The variety of colors and textures created a beautiful natural tapestry.'
    },
    {
      id: 5,
      title: 'Frozen Lake Reflection',
      date: '20 November, 2021',
      category: 'Winter',
      image: '/assets/images/nature-5.jpg',
      description: 'A perfectly still frozen lake reflecting the surrounding mountains. The winter scene was peaceful and serene.'
    },
    {
      id: 6,
      title: 'Desert Sunset Dunes',
      date: '8 October, 2021',
      category: 'Desert',
      image: '/assets/images/nature-6.jpg',
      description: 'The golden sand dunes of the desert during sunset. The shadows and light created fascinating patterns across the landscape.'
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full overflow-y-auto py-16 px-6 md:px-12"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          MY <span className="text-primary">CLICKS</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="w-12 h-1 bg-primary"></span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            PERSONAL CLICKED PHOTOS OF NATURE
          </span>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="w-full">
        <ImageViewer images={naturePosts} />
      </motion.div>
    </motion.div>
  );
};

export default ClicksPage;