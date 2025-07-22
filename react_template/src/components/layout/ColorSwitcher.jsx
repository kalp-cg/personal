import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaTimes } from 'react-icons/fa';

const ColorSwitcher = () => {
  const { isColorPanelOpen, toggleColorPanel, changeColorScheme, changeTransitionDirection } = useTheme();

  const colors = [
    { name: 'purple', color: '#9200ee' },
    { name: 'red', color: '#fe0000' },
    { name: 'blueviolet', color: '#8a2be2' },
    { name: 'blue', color: '#0000ff' },
    { name: 'goldenrod', color: '#daa520' },
    { name: 'magenta', color: '#ff00ff' },
    { name: 'yellowgreen', color: '#9acd32' },
    { name: 'orange', color: '#ff9800' },
    { name: 'green', color: '#008000' },
    { name: 'yellow', color: '#ffff00' },
  ];

  const directions = [
    { name: 'slide-right', label: 'Right to Left' },
    { name: 'slide-left', label: 'Left to Right' },
    { name: 'slide-top', label: 'Top to Bottom' },
    { name: 'slide-bottom', label: 'Bottom to Top' },
  ];

  const containerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      } 
    },
    exit: { 
      x: '100%',
      transition: { 
        duration: 0.3 
      } 
    }
  };

  return (
    <AnimatePresence>
      {isColorPanelOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 right-0 w-64 h-full bg-[#222] z-50 p-6 overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">COLOR SWITCHER</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleColorPanel}
              className="text-white hover:text-primary"
            >
              <FaTimes />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mb-8">
            {colors.map((color) => (
              <motion.button
                key={color.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeColorScheme(color.name)}
                className="w-8 h-8 rounded-full border-2 border-gray-700"
                style={{ backgroundColor: color.color }}
                title={color.name}
              />
            ))}
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">TRANSITION DIRECTION</h3>
            <p className="text-sm text-gray-400 mb-4">Navigate between sections to see the effect.</p>
            
            <div className="space-y-2">
              {directions.map((direction) => (
                <motion.button
                  key={direction.name}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => changeTransitionDirection(direction.name)}
                  className="w-full text-left px-3 py-2 text-white text-sm hover:text-primary rounded"
                >
                  {direction.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ColorSwitcher;