import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-[#212428] text-white py-8'>
      <Wrapper>
        <div className='container mx-auto w-11/12'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* Copyright Text */}
            <p className='mt-2 text-base'>© Hammed Ajeigbe 2026</p>
            
            {/* Social Icons */}
            <div className='flex space-x-4 mb-4 md:mb-0'>
              <a 
                href="https://github.com/medacoal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-designColor transition-colors duration-300'
              >
                <FaGithub className='h-6 w-6' />
              </a>
              
              <a 
                // href="https://x.com/Gharneeyart20?t=aE_FvOJyFgk9ocZTtX10iQ&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-designColor transition-colors duration-300'
              >
                <FaXTwitter className='h-6 w-6' />
              </a>
              
              <a 
                // href="https://www.linkedin.com/in/shuaib-ganiyat-a49482273" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-designColor transition-colors duration-300'
              >
                <FaLinkedin className='h-6 w-6' />
              </a>
              
              <a 
                // href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-gray-300 hover:text-designColor transition-colors duration-300'
              >
                <FaInstagram className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer