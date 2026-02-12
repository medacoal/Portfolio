import React, { useContext, useEffect } from "react";
import Wrapper from "../reuseables/Wrapper";
import me from "../../assets/images/IMG_5559.JPG";
import { ThemeContext } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode ?? true;
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animation only happens once
      mirror: false,
      offset: 100,
      easing: 'ease-out',
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="py-16"
    >
      <Wrapper>
        <div className={`flex flex-col lg:flex-row items-center lg:space-x-16 space-y-8 lg:space-y-0 rounded-xl py-10 px-6 shadow-lg transition-colors duration-300 ${
          isDarkMode ? 'bg-[#202327]' : 'bg-slate-200'
        }`}>
          
          {/* IMAGE - ZOOM IN ANIMATION */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="100"
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={me}
              alt="Hammed"
              className="h-96 w-80 object-cover rounded-lg shadow-xl border-b-4 border-black/20 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* TEXT CONTENT - FADE UP ANIMATION */}
          <div 
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className={`w-full lg:w-1/2 space-y-5 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            <h3 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-xl font-semibold"
            >
              About <span className="text-blue-600 italic">Me</span>
            </h3>

            <p 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              className="leading-relaxed text-base md:text-lg"
            >
              I'm Hammed Ajeigbe, a results-driven developer who enjoys
              transforming ideas into scalable and interactive digital
              products. I specialize in building modern web applications
              that combine clean user interfaces with efficient backend
              architecture.
            </p>

            <p 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              className="leading-relaxed text-base md:text-lg"
            >
              My experience spans across technologies like React,
              JavaScript, Node.js, and Tailwind CSS, allowing me to work
              confidently across both client-side and server-side
              development. I focus on writing maintainable code, optimizing
              performance, and delivering solutions that feel smooth and
              intuitive to users.
            </p>

            <p 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              className="leading-relaxed text-base md:text-lg"
            >
              Beyond coding, I’m constantly exploring new tools and
              frameworks to stay ahead in the evolving tech landscape.
              When I’m not building applications, I enjoy learning about
              emerging technologies and refining my craft to become a
              better engineer every day.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutMe;