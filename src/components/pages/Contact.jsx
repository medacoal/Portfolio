import React, { useState, useContext, useEffect } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa';
import Wrapper from '../reuseables/Wrapper';
import me from "../../assets/images/IMG_5559.JPG";
import { ThemeContext } from "../../context/ThemeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Simple validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        const response = await fetch('https://formspree.io/f/mojneqaq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New contact form submission from ${formData.name}`,
            _replyto: formData.email,
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          // Clear form
          setFormData({ name: '', email: '', message: '' });
          // setIsChecked(false);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        // Clear status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  return (
    <Wrapper>
      <section id="contact" className="py-16">
        <div 
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={`container mx-auto w-11/12 py-10 rounded-xl shadow-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-[#202327]' : 'bg-[#cbd5e1]'
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-12 px-6">
            {/* LEFT SIDE — IMAGE + TEXT */}
            <div 
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="lg:w-1/2 flex flex-col gap-6 mt-20"
            >
              <img
                src={me}
                alt="Hammed Ajeigbe"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
                className={`rounded-full w-60 h-60 object-cover shadow-2xl border-4 transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'border-gray-600' : 'border-gray-900'
                }`}
              />

              <div>
                <h3 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className={`font-outfit text-xl font-medium transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Contact <span className="italic text-blue-600">Me</span>
                </h3>

                <h2 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 font-semibold mt-2"
                >
                  Enjoyed my work? Let's work together
                </h2>

                <p 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="1000"
                  className={`font-k2d mt-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-black'
                  }`}
                >
                  I'm always open to discussing new projects or opportunities.
                  Feel free to drop an email at hammedajeigbe@gmail.com.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div 
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="300"
              className="lg:w-1/2"
            >
              <form
                onSubmit={handleSubmit}
                className="w-full p-8 rounded-xl flex flex-col gap-6"
              >
                {/* Honeypot for spam prevention */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                {/* Form status messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                    <p className="font-medium">✓ Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                    <p className="font-medium">✗ Something went wrong.</p>
                    <p className="text-sm">Please try again or email me directly.</p>
                  </div>
                )}

                {/* Name */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  className="flex flex-col gap-2"
                >
                  <label className="text-blue-500 uppercase text-sm font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 border rounded-lg text-lg transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-800 text-black placeholder-gray-500'
                    } ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  className="flex flex-col gap-2"
                >
                  <label className="text-blue-500 uppercase text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 border rounded-lg text-lg transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-800 text-black placeholder-gray-500'
                    } ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="700"
                  className="flex flex-col gap-2"
                >
                  <label className="text-blue-500 uppercase text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 border rounded-lg text-lg transition-colors duration-300 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-800 text-black placeholder-gray-500'
                    } ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Checkbox */}
                {/* <div 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setIsChecked(!isChecked)}
                >
                  <span className="text-xl text-blue-500">
                    {isChecked ? <FaCheckSquare /> : <FaRegSquare />}
                  </span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    I agree to the privacy policy and consent to being contacted
                  </span>
                </div> */}

                {/* Submit Button */}
                <div 
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                     isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed hover:scale-100'
                        : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;