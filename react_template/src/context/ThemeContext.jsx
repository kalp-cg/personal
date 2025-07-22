import React, { createContext, useState, useEffect, useContext } from "react";

// Create theme context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // States
  const [theme, setTheme] = useState("dark");
  const [colorScheme, setColorScheme] = useState("orange");
  const [transitionDirection, setTransitionDirection] = useState("slide-right");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isColorPanelOpen, setIsColorPanelOpen] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedColor = localStorage.getItem("colorScheme") || "orange";
    const savedDirection = localStorage.getItem("transitionDirection") || "slide-right";
    
    setTheme(savedTheme);
    setColorScheme(savedColor);
    setTransitionDirection(savedDirection);
    
    // Apply theme and color class to body
    document.body.className = `${savedTheme} ${savedColor}`;
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
  };

  // Color scheme handler
  const changeColorScheme = (color) => {
    setColorScheme(color);
    localStorage.setItem("colorScheme", color);
    
    // Remove all color classes and add the new one
    document.body.classList.remove(
      "purple", "red", "blueviolet", "blue", "goldenrod", 
      "magenta", "yellowgreen", "orange", "green", "yellow"
    );
    document.body.classList.add(color);
  };

  // Transition direction handler
  const changeTransitionDirection = (direction) => {
    setTransitionDirection(direction);
    localStorage.setItem("transitionDirection", direction);
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle color panel
  const toggleColorPanel = () => {
    setIsColorPanelOpen(!isColorPanelOpen);
  };

  // Context value
  const contextValue = {
    theme,
    toggleTheme,
    colorScheme,
    changeColorScheme,
    transitionDirection,
    changeTransitionDirection,
    isSidebarOpen,
    toggleSidebar,
    isColorPanelOpen,
    toggleColorPanel,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme context
export const useTheme = () => useContext(ThemeContext);