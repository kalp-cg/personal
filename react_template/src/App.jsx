import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import ColorSwitcher from './components/shared/ColorSwitcher';
import PageLoader from './components/shared/PageLoader';

// Page Components
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ResumePage from './components/resume/ResumePage';
import ProjectsPage from './components/projects/ProjectsPage';
import ClicksPage from './components/clicks/ClicksPage';
import ContactPage from './components/contact/ContactPage';

// ScrollToTop component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
  
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle page visibility for accessibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? 'Come Back to Portfolio' : 'Kalp Patel | Portfolio';
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen]);

  if (isLoading) {
    return (
      <ThemeProvider>
        <PageLoader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Sidebar */}
          <Sidebar 
            isMobileNavOpen={isMobileNavOpen} 
            setIsMobileNavOpen={setIsMobileNavOpen}
            handleNavigation={handleNavigation}
          />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col w-full md:ml-20 lg:ml-72 transition-all duration-300 relative">
            {/* Header */}
            <Header 
              isMobileNavOpen={isMobileNavOpen}
              setIsMobileNavOpen={setIsMobileNavOpen}
              showSettings={showSettings}
              setShowSettings={setShowSettings}
            />
            
            {/* Main Content Area */}
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/clicks" element={<ClicksPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </AnimatePresence>
            </main>
            
            {/* Color Switcher Settings Panel */}
            <ColorSwitcher isOpen={showSettings} onClose={() => setShowSettings(false)} />
            
            {/* Footer - only on specific pages */}
            <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400 mt-auto">
              © {new Date().getFullYear()} Steve Milner. All rights reserved.
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;