import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

const ColorSwitcher = ({ isOpen, onClose }) => {
  const { theme, colorScheme, changeColorScheme, transitionDirection, changeTransitionDirection } = useTheme();
  const [activeTab, setActiveTab] = useState('colors');

  const colors = [
    { name: 'purple', value: '#9200ee', label: 'Purple' },
    { name: 'red', value: '#fe0000', label: 'Red' },
    { name: 'blueviolet', value: '#8a2be2', label: 'Blue Violet' },
    { name: 'blue', value: '#0000ff', label: 'Blue' },
    { name: 'goldenrod', value: '#daa520', label: 'Goldenrod' },
    { name: 'magenta', value: '#ff00ff', label: 'Magenta' },
    { name: 'yellowgreen', value: '#9acd32', label: 'Yellow Green' },
    { name: 'orange', value: '#ff9800', label: 'Orange' },
    { name: 'green', value: '#008000', label: 'Green' },
    { name: 'yellow', value: '#ffff00', label: 'Yellow' },
  ];

  const directions = [
    { name: 'fade', label: 'Fade Transition', icon: '✨' },
    { name: 'slide-left', label: 'Slide Left', icon: '👈' },
    { name: 'slide-right', label: 'Slide Right', icon: '👉' },
    { name: 'slide-down', label: 'Slide Down', icon: '👇' },
    { name: 'slide-up', label: 'Slide Up', icon: '👆' },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const panelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      }
    },
    exit: { 
      x: '100%', 
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      }
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const handleColorChange = (colorName) => {
    changeColorScheme(colorName);
  };

  const handleTransitionChange = (direction) => {
    changeTransitionDirection(direction);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          
          <motion.div
            className="fixed right-0 top-0 bottom-0 w-80 z-50 flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={`flex flex-col h-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
              {/* Header */}
              <div className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} flex justify-between items-center`}>
                <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Customize Theme</h3>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  <FaTimes className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
                </motion.button>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`flex-1 py-3 px-4 text-sm font-medium relative ${activeTab === 'colors' ? 'text-primary' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Colors
                  {activeTab === 'colors' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('transitions')}
                  className={`flex-1 py-3 px-4 text-sm font-medium relative ${activeTab === 'transitions' ? 'text-primary' : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Transitions
                  {activeTab === 'transitions' && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'colors' && (
                    <motion.div
                      key="colors"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="h-full"
                    >
                      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        Select your preferred accent color for buttons and interactive elements.
                      </p>
                      
                      <div className="grid grid-cols-5 gap-3 mb-8">
                        {colors.map((color, index) => (
                          <motion.button
                            key={color.name}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            onClick={() => handleColorChange(color.name)}
                            className={`w-full aspect-square rounded-full flex items-center justify-center`}
                            style={{ backgroundColor: color.value }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {colorScheme === color.name && (
                              <FaCheck className="text-white" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                      
                      <div className={`flex items-start p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="flex-1">
                          <div className={`mr-3 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <span className="text-primary text-lg">💡</span>
                          </div>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            The selected color will be applied throughout the website for buttons, links, and highlights to create a consistent experience.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'transitions' && (
                    <motion.div
                      key="transitions"
                      variants={tabVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="h-full"
                    >
                      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        Select how you want page transitions to animate when navigating between sections.
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {directions.map((direction, index) => (
                          <motion.button
                            key={direction.name}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ x: 5 }}
                            onClick={() => handleTransitionChange(direction.name)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                              transitionDirection === direction.name
                                ? `bg-primary/10 text-primary`
                                : theme === 'dark' ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center">
                              <span className="text-xl mr-3">{direction.icon}</span>
                              <span>{direction.label}</span>
                            </div>
                            
                            {transitionDirection === direction.name && (
                              <FaCheck className="text-primary" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                      
                      <div className={`flex items-center justify-between p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} mb-3`}>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          Navigate to another page to see the transition effect in action.
                        </p>
                        <FaArrowRight className="text-primary" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Footer */}
              <div className={`px-6 py-4 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Settings are automatically saved to your browser
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

ColorSwitcher.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ColorSwitcher;