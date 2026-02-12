import React, { useContext, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";
import Wrapper from "../reuseables/Wrapper";
import me from "../../assets/images/IMG_5559.JPG";
import { ThemeContext } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.isDarkMode ?? true;

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

  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Blockchain Developer"
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section 
      id="home" 
      className={`pt-28 pb-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#212428]' : 'bg-[#cbd5e1]'
      }`}
    >
      <Wrapper>
        <div className="container mx-auto w-11/12 flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* LEFT CONTENT - FADE RIGHT ANIMATION */}
          <div 
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="w-full lg:w-2/3 flex flex-col space-y-8"
          >

            <div>
              <h1 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Hi, I'm Hammed 👋
              </h1>

              <h2 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5E3BEE] to-purple-500 mt-2"
              >
                a {text}
                <Cursor cursorColor="#5E3BEE" />
              </h2>

              <p 
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className={`text-base md:text-lg mt-4 leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                A creative developer passionate about building sleek,
                interactive, and scalable web applications. I combine clean UI
                design with powerful backend logic to deliver seamless digital
                experiences that solve real-world problems.
              </p>
            </div>

            {/* Location + Availability */}
            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
              className={`flex flex-col md:flex-row md:gap-8 gap-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center">
                📍 <span className="ml-2">Lagos, Nigeria</span>
              </div>

              <div className="flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </div>
            </div>

            {/* Socials + Resume */}
            <div 
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="flex flex-col md:flex-row gap-6"
            >

              <div>
                <h3 className={`uppercase font-semibold text-sm mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  Find me on
                </h3>

                <div className="flex gap-4 text-2xl">
                  <a 
                    href="https://github.com/medacoal" 
                    target="_blank" 
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1100"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-[#5E3BEE]' 
                        : 'text-gray-700 hover:text-[#5E3BEE]'
                    }`}
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="#" 
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1200"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-[#5E3BEE]' 
                        : 'text-gray-700 hover:text-[#5E3BEE]'
                    }`}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="#" 
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1300"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-[#5E3BEE]' 
                        : 'text-gray-700 hover:text-[#5E3BEE]'
                    }`}
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="#" 
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="1400"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-[#5E3BEE]' 
                        : 'text-gray-700 hover:text-[#5E3BEE]'
                    }`}
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1500"
              >
            <a
  href="/resumee.pdf"
  download="Hammed_Ajeigbe_Resume.pdf"
  className="flex items-center gap-2 px-6 py-3 bg-[#5E3BEE] text-white rounded-lg font-semibold shadow-md hover:scale-105 transition duration-300"
>
  <FaDownload />
  My Resume
</a>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE - FADE LEFT ANIMATION */}
          <div 
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
            className="w-full lg:w-1/3 flex justify-center"
          >
            <img
              src={me}
              alt="Hammed"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-8 border-[#5E3BEE]"
            />
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default Home;