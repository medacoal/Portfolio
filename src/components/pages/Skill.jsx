import React, { useContext, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { ThemeContext } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode ?? true;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      offset: 100,
      easing: 'ease-out',
    });
    AOS.refresh();
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={45} className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt size={45} className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs size={45} className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact size={45} className="text-[#61DAFB]" /> },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs size={45} className={isDarkMode ? "text-white" : "text-black"} /> 
    },
    { name: "Node.js", icon: <FaNodeJs size={45} className="text-[#339933]" /> },
    { 
      name: "Express.js", 
      icon: <SiExpress size={45} className={isDarkMode ? "text-white" : "text-black"} /> 
    },
    { name: "MongoDB", icon: <SiMongodb size={45} className="text-[#47A248]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={45} className="text-[#06B6D4]" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={45} className="text-[#7952B3]" /> },
    { name: "Git", icon: <FaGitAlt size={45} className="text-[#F05032]" /> },
    { 
      name: "GitHub", 
      icon: <FaGithub size={45} className={isDarkMode ? "text-white" : "text-black"} /> 
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 w-full"
    >
      <div className={`w-full transition-colors duration-300 py-10 ${
        isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
      }`}>
        
        {/* HEADER */}
        <div 
          data-aos="fade-down"
          data-aos-duration="800"
          className="flex flex-col items-center text-center my-10 px-6"
        >
          <h3 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-xl font-semibold"
          >
            My <span className="text-blue-600 italic">Skills</span>
          </h3>
          <p 
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            className={`mt-2 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 font-medium px-6 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 50}
              className="flex flex-col items-center justify-center py-6 transition duration-300 hover:scale-105"
            >
              <div className="mb-3 hover:scale-150 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;