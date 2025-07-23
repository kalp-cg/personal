import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';

const ColorSwitcher = () => {
  const { theme, isColorPanelOpen, toggleColorPanel, changeColorScheme, changeTransitionDirection, colorScheme, transitionDirection } = useTheme();
  const [activeTab, setActiveTab] = useState('colors');

  const colors = [
    { name: 'purple', color: '#9200ee', label: 'Purple' },
    { name: 'red', color: '#fe0000', label: 'Red' },
    { name: 'blueviolet', color: '#8a2be2', label: 'Blue Violet' },
    { name: 'blue', color: '#0000ff', label: 'Blue' },
    { name: 'goldenrod', color: '#daa520', label: 'Gold' },
    { name: 'magenta', color: '#ff00ff', label: 'Magenta' },
    { name: 'yellowgreen', color: '#9acd32', label: 'Green' },
    { name: 'orange', color: '#ff9800', label: 'Orange' },
    { name: 'green', color: '#008000', label: 'Dark Green' },
    { name: 'cyan', color: '#00bcd4', label: 'Cyan' },
  ];

  const directions = [
    { name: 'slide-right', label: 'Right to Left', icon: '→' },
    { name: 'slide-left', label: 'Left to Right', icon: '←' },
    { name: 'slide-top', label: 'Top to Bottom', icon: '↓' },
    { name: 'slide-bottom', label: 'Bottom to Top', icon: '↑' },
  ];

  const containerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      } 
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: { 
        duration: 0.3 
      } 
    }
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: custom * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <AnimatePresence>
      {isColorPanelOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleColorPanel}
          />
          
          {/* Settings panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed top-0 right-0 w-72 h-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl z-50 overflow-hidden rounded-l-2xl`}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className={`flex justify-between items-center px-6 py-5 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Customize
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleColorPanel}
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  aria-label="Close settings"
                >
                  <FaTimes size={14} />
                </motion.button>
              </div>
              
              {/* Tabs */}
              <div className={`flex border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
                <button
                  onClick={() => setActiveTab('colors')}
                  className={`flex-1 py-3 text-sm font-medium relative ${
                    activeTab === 'colors' 
                      ? 'text-primary' 
                      : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Theme Colors
                  {activeTab === 'colors' && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('transitions')}
                  className={`flex-1 py-3 text-sm font-medium relative ${
                    activeTab === 'transitions' 
                      ? 'text-primary' 
                      : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
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
              
              {/* Tab content */}
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
                        Choose your preferred accent color for the entire website.
                      </p>
                      
                      <div className="grid grid-cols-5 gap-4 mb-8">
                        {colors.map((color, index) => (
                          <motion.button
                            key={color.name}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => changeColorScheme(color.name)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              colorScheme === color.name 
                                ? `ring-2 ${theme === 'dark' ? 'ring-white' : 'ring-gray-800'} ring-offset-2 ${theme === 'dark' ? 'ring-offset-gray-900' : 'ring-offset-white'}` 
                                : ''
                            }`}
                            style={{ backgroundColor: color.color }}
                            title={color.label}
                            aria-label={`Select ${color.label} theme color`}
                          >
                            {colorScheme === color.name && (
                              <FaCheck className="text-white text-xs" />
                            )}
                          </motion.button>
                        ))}
                      </div>
                      
                      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="flex items-start">
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
                            onClick={() => changeTransitionDirection(direction.name)}
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

export default ColorSwitcher;