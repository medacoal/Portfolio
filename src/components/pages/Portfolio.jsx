import React, { useContext, useEffect } from "react";
import Wrapper from "../reuseables/Wrapper";
import git from "../../assets/icons/Vector (7).png";
import advice from "../../assets/images/advice.jpg";
import carddetails from "../../assets/images/card details.jpg";
import homepro from "../../assets/images/Rectangle 1.png";
import healthyyou from "../../assets/images/healthyyou.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing React Icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress 
} from "react-icons/si";

const Portfolio = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <Wrapper>
      <section id="portfolio" className="py-8">
        {/* HEADER ANIMATION */}
        <div 
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col justify-center items-center mb-6 my-12"
        >
          <h3 
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-blue-600 font-outfit text-xl font-medium italic"
          >
            Projects
          </h3>
          <p 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            className={`mt-2 text-center font-poppins transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-black'
            }`}
          >
            Some remarkable projects I’ve worked on:
          </p>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col gap-10">

          {/* ================= Healthy You ================= */}
          <div 
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
            className={`w-full p-6 rounded-lg flex flex-col md:flex-row shadow-lg transition-all duration-700 items-center gap-8 ${
              isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
            }`}
          >
            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="w-full md:w-1/2 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className={`uppercase font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Healthy You
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/medacoal/Healthy-you"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="700"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://healthy-you-ochre.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em">
                      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="900"
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-black'
                }`}
              >
                Healthy You connects you with expert doctors for personalized care, anytime, anywhere. No stress, just quality healthcare made simple for you
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {[
                  { icon: <FaHtml5 size={16} />, delay: 1000 },
                  { icon: <FaReact size={16} />, delay: 1100 },
                  { icon: <FaNodeJs size={16} />, delay: 1200 },
                  { icon: <FaJs size={16} />, delay: 1300 },
                  { icon: <SiTailwindcss size={16} />, delay: 1400 },
                  { icon: <SiMongodb size={16} />, delay: 1500 },
                  { icon: <SiExpress size={16} />, delay: 1600 }
                ].map((item, index) => (
                  <span 
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay={item.delay}
                    className={`border-2 px-3 py-3 rounded-full text-sm flex items-center gap-1 transition-colors duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'border-blue-400 text-blue-400' 
                        : 'border-[#2663eb] text-[#2663eb]'
                    }`}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
            
            <div 
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="500"
              className="w-full md:w-1/2 h-70 overflow-hidden rounded-xl"
            >
              <img
                src={healthyyou}
                alt="Healthy You"
                className="w-full h-full object-cover rounded-xl hover:scale-105 duration-500"
              />
            </div>
          </div>
          
          {/* ================= Home-Pro ================= */}
          <div 
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            className={`w-full p-6 rounded-lg flex flex-col md:flex-row shadow-lg transition-all duration-700 items-center gap-8 ${
              isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
            }`}
          >
            <div 
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
              className="w-full md:w-1/2 h-72 overflow-hidden rounded-xl"
            >
              <img
                src={homepro}
                alt="Home Pro"
                className="w-full h-full object-cover rounded-xl hover:scale-105 duration-500"
              />
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="w-full md:w-1/2 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className={`uppercase font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Home-Pro
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/medacoal/Home-PRO"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="700"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://home-pro-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em">
                      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="900"
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-black'
                }`}
              >
                HomePro is a cutting-edge real estate platform designed to connect buyers, sellers, and real estate professionals, Whether you're looking to find your dream home or a property.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {[
                  { icon: <FaHtml5 size={16} />, delay: 1000 },
                  { icon: <FaReact size={16} />, delay: 1100 },
                  { icon: <FaNodeJs size={16} />, delay: 1200 },
                  { icon: <FaJs size={16} />, delay: 1300 },
                  { icon: <SiTailwindcss size={16} />, delay: 1400 },
                  { icon: <SiMongodb size={16} />, delay: 1500 },
                  { icon: <SiExpress size={16} />, delay: 1600 }
                ].map((item, index) => (
                  <span 
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay={item.delay}
                    className={`border-2 px-3 py-3 rounded-full text-sm flex items-center gap-1 transition-colors duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'border-blue-400 text-blue-400' 
                        : 'border-[#2663eb] text-[#2663eb]'
                    }`}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Advice Generator ================= */}
          <div 
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
            className={`w-full p-6 rounded-lg flex flex-col md:flex-row shadow-lg transition-all duration-700 items-center gap-8 ${
              isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
            }`}
          >
            <div 
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="400"
              className="w-full md:w-1/2 h-72 overflow-hidden rounded-xl"
            >
              <img
                src={advice}
                alt="Advice App"
                className="w-full h-full object-cover rounded-xl hover:scale-105 duration-500"
              />
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="w-full md:w-1/2 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className={`uppercase font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Advice Generator App
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/medacoal/Adviser-Generator-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="700"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://adviser-generator-app-psi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em">
                      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="900"
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-black'
                }`}
              >
                Advice generator app fetches Advice Slip API to generate random
                quotes dynamically.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {[
                  { icon: <FaHtml5 size={16} />, delay: 1000 },
                  { icon: <FaCss3Alt size={16} />, delay: 1100 },
                  { icon: <FaJs size={16} />, delay: 1200 }
                ].map((item, index) => (
                  <span 
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay={item.delay}
                    className={`border-2 px-3 py-3 rounded-full text-sm flex items-center gap-1 transition-colors duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'border-blue-400 text-blue-400' 
                        : 'border-[#2663eb] text-[#2663eb]'
                    }`}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Interactive Card ================= */}
          <div 
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            className={`w-full p-6 rounded-lg flex flex-col md:flex-row shadow-lg transition-all duration-700 items-center gap-8 ${
              isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
            }`}
          >
            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="w-full md:w-1/2 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h3 
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className={`uppercase font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Interactive Card Details
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/medacoal/interactive-card-details"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="700"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://interactive-card-details-nine-mu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="800"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:text-purple-400' 
                        : 'bg-black text-gray-400 hover:text-purple-500'
                    }`}
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em">
                      <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <p 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="900"
                className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-black'
                }`}
              >
                Interactive card details allows users to input card number,
                CVV, expiry date and preview it dynamically.
              </p>

              <div className="flex flex-wrap gap-3 pt-3">
                {[
                  { icon: <FaHtml5 size={16} />, delay: 1000 },
                  { icon: <FaCss3Alt size={16} />, delay: 1100 },
                  { icon: <FaJs size={16} />, delay: 1200 },
                  { icon: <FaReact size={16} />, delay: 1300 }
                ].map((item, index) => (
                  <span 
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay={item.delay}
                    className={`border-2 px-3 py-3 rounded-full text-sm flex items-center gap-1 transition-colors duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'border-blue-400 text-blue-400' 
                        : 'border-[#2663eb] text-[#2663eb]'
                    }`}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>
            
            <div 
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="500"
              className="w-full md:w-1/2 h-72 overflow-hidden rounded-xl"
            >
              <img
                src={carddetails}
                alt="Card Details"
                className="w-full h-full object-cover rounded-xl hover:scale-105 duration-500"
              />
            </div>
          </div>

        </div>
      </section>
    </Wrapper>
  );
};

export default Portfolio;