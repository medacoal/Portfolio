import React, { useContext } from 'react';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/pages/Portfolio';
import AboutMe from './components/pages/aboutMe';
import Skill from './components/pages/Skill';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

    
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 120, // Offset from original trigger point
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // Refresh AOS when theme changes (optional - for smoother animations)
  useEffect(() => {
    AOS.refresh();
  }, [isDarkMode]);
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#212428]' : 'bg-gradient-to-r from-blue-300 to-purple-500'
    }`}>
      <Navbar />
      <Home />
      <AboutMe />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;