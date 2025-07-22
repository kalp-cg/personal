import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ContactForm = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (in real app, you'd handle this better)
    alert('Thank you for your message! We will get back to you soon.');
  };

  const inputClasses = `w-full px-4 py-3 border rounded-lg outline-none transition-all
    ${theme === 'dark' 
      ? 'bg-gray-800 border-gray-700 text-white focus:border-primary' 
      : 'bg-white border-gray-300 text-gray-800 focus:border-primary'}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="YOUR NAME"
            required
            className={inputClasses}
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="YOUR EMAIL"
            required
            className={inputClasses}
          />
        </div>
      </div>
      
      <div>
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="YOUR SUBJECT"
          required
          className={inputClasses}
        />
      </div>
      
      <div>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="YOUR MESSAGE"
          required
          rows={5}
          className={inputClasses}
        />
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="btn-primary"
      >
        SEND MESSAGE <FaPaperPlane />
      </motion.button>
    </form>
  );
};

export default ContactForm;