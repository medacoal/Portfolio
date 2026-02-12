import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", link: "#about", color: "#61a5fa" },
    { name: "Skills", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  // Fixed navbar background - doesn't change with theme
  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-[#212428] backdrop-blur-md shadow-lg" 
      : "bg-[#212428]"
  }`;

  // Text color changes based on theme for better visibility
  const textColor = isDarkMode ? "text-white" : "text-gray-200";
  const mobileMenuBg = "bg-[#212428]"; // Fixed dark blue background
  const mobileTextColor = isDarkMode ? "text-white" : "text-gray-200";
  const logoTextColor = "text-white"; // Always white for logo

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center py-5">
          {/* Logo - Always white */}
          <a href="/" className="flex items-center space-x-2">
            <div className="font-outfit text-2xl">
              <span className="font-outfit text-2xl text-white">
                Hammed <span className="text-[#61a5fa]">Ajeigbe</span>
              </span>
            </div>
          </a>

          {/* Desktop Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8 mr-10">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                style={{ color: item.color }}
                className={`relative text-white text-xl hover:text-[#5E3BEE] transition duration-300 group`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px]  transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2  transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? "" 
                  : ""
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 384 512" 
                  className="text-blue-400" 
                  height="25" 
                  width="25" 
                >
                  <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"></path>
                </svg>
              ) : (
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 512 512" 
                  className="text-yellow-400" 
                  height="25" 
                  width="25" 
                >
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.3c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Toggle and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? "bg-gray-700 hover:bg-gray-600" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            >
              {isDarkMode ? (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-blue-400" height="20" width="20">
                  <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"></path>
                </svg>
              ) : (
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-yellow-400" height="20" width="20">
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.3c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1z"></path>
                </svg>
              )}
            </button>
            <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <IoMdClose className="text-white" /> : <GiHamburgerMenu className="text-white" />}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 bg-[#212438] rounded-lg shadow-lg">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                style={{ color: item.color }}
                onClick={() => setMenuOpen(false)}
                className="text-center text-white hover:text-[#5E3BEE] transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;