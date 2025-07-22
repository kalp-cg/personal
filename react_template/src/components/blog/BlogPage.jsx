import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import BlogItem from './BlogItem';

const BlogPage = () => {
  const { theme } = useTheme();
  
  const blogPosts = [
    {
      id: 1,
      title: 'How to Own Your Audience by Creating an Email List',
      date: '23 March, 2022',
      category: 'Design',
      image: '/assets/images/blog-1.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Everything You Need to Know About Web Accessibility',
      date: '10 February, 2022',
      category: 'Development',
      image: '/assets/images/blog-2.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      title: 'The Future of Social Media Marketing for Small Businesses',
      date: '15 January, 2022',
      category: 'Marketing',
      image: '/assets/images/blog-3.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      title: 'Top 10 Tools for Modern Web Development',
      date: '5 December, 2021',
      category: 'Development',
      image: '/assets/images/blog-4.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      title: 'How to Create a Stunning Portfolio Website',
      date: '20 November, 2021',
      category: 'Design',
      image: '/assets/images/blog-5.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      title: 'The Rise of Remote Work and Its Impact on Tech Industry',
      date: '8 October, 2021',
      category: 'Business',
      image: '/assets/images/blog-6.jpg',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
          MY <span className="text-primary">BLOG</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="w-12 h-1 bg-primary"></span>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            ARTICLES
          </span>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <BlogItem post={post} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogPage;