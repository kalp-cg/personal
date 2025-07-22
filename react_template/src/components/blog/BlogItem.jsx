import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const BlogItem = ({ post }) => {
  const { theme } = useTheme();
  
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className={`rounded-lg overflow-hidden shadow-lg ${
        theme === 'dark' ? 'bg-gray-800 shadow-gray-900' : 'bg-white shadow-gray-200'
      }`}
    >
      <div className="relative h-48">
        {/* Placeholder for image */}
        <div 
          className="w-full h-full bg-gray-300"
          style={{ backgroundColor: theme === 'dark' ? '#333' : '#e5e7eb' }}
        ></div>
        
        <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium text-white rounded-full bg-primary`}>
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-primary">
            <FaCalendarAlt /> 
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-primary">
            <FaFolderOpen /> 
            <span>{post.category}</span>
          </div>
        </div>
        
        <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-800'
        }`}>
          {post.title}
        </h3>
        
        <p className={`mb-4 line-clamp-3 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {post.excerpt}
        </p>
        
        <a 
          href={`/blog/${post.id}`} 
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Read More <FaArrowRight className="text-sm" />
        </a>
      </div>
    </motion.article>
  );
};

export default BlogItem;