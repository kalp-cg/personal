import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes, FaExpand } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import PropTypes from 'prop-types';

const ImageViewer = ({ images }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      {/* Main Featured Image */}
      <div className="relative w-full h-96 mb-6 overflow-hidden rounded-xl">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-cover bg-center cursor-pointer"
          style={{ 
            backgroundImage: `url(${currentImage.image})`,
            backgroundColor: theme === 'dark' ? '#333' : '#e5e7eb'
          }}
          onClick={() => openModal(currentIndex)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-center p-6"
            >
              <h2 className="text-3xl font-bold mb-2">{currentImage.title}</h2>
              <p className="text-lg">{currentImage.category}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all"
          aria-label="Previous image"
        >
          <FaArrowLeft />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all"
          aria-label="Next image"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-8">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${index === currentIndex ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${image.image})`,
                backgroundColor: theme === 'dark' ? '#333' : '#e5e7eb'
              }}
            ></div>
            {index === currentIndex && (
              <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Image Details */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`p-6 rounded-xl mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
      >
        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {currentImage.title}
        </h3>
        <div className="flex items-center gap-4 mb-4">
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {currentImage.date}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-white rounded-full bg-primary">
            {currentImage.category}
          </span>
        </div>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {currentImage.description}
        </p>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
              aria-label="Toggle fullscreen"
            >
              <FaExpand />
            </button>

            <div className="relative w-full max-w-5xl">
              <motion.div
                key={`modal-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`w-full ${isFullscreen ? 'h-screen' : 'h-auto max-h-[80vh]'} flex items-center justify-center`}
              >
                <img 
                  src={currentImage.image} 
                  alt={currentImage.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all"
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-70 transition-all"
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded-lg text-white text-center">
              <h3 className="font-bold">{currentImage.title}</h3>
              <p className="text-sm">{currentImage.category} - {currentImage.date}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ImageViewer;