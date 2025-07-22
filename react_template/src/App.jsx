import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ColorSwitcher from './components/layout/ColorSwitcher';

// Page Components
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ResumePage from './components/resume/ResumePage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Close mobile nav when route changes
  const handleNavigation = () => {
    if (isMobileNavOpen) setIsMobileNavOpen(false);
  };

  // Close settings menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSettings && !e.target.closest('.settings-panel') && !e.target.closest('.settings-button')) {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSettings]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Sidebar */}
          <Sidebar 
            isMobileNavOpen={isMobileNavOpen} 
            setIsMobileNavOpen={setIsMobileNavOpen}
            handleNavigation={handleNavigation}
          />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col ml-0 md:ml-72 transition-all duration-300 relative">
            {/* Header */}
            <Header 
              isMobileNavOpen={isMobileNavOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            
            {/* Main Content Area */}
            <main className="flex-1 p-4">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </AnimatePresence>
            </main>
            
            {/* Color Switcher Settings Panel */}
            <ColorSwitcher showSettings={showSettings} />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;