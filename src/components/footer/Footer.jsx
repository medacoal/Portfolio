import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import logo from "../../assets/icons/image 1.png";
import face from "../../assets/icons/Vector (9).png"
import ig from "../../assets/icons/Vector (10).png"
import twitter from "../../assets/icons/Vector (11).png"
import link from "../../assets/icons/Vector (12).png"


const Footer = () => {
  return (
   <div className='bg-slate-300 '>
    <Wrapper>
     <div className='py-8'>
        <div className='flex md:justify-between text-center flex-col justify-center md:flex-row'>
        <div className='flex items-center justify-center lg:justify-start '>
        <a href='/' className=''>
          <img src={logo} alt='logo' className='w-8 h-7' />
        </a>
        <h1 className='ml-2 text-[#394149]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '25.21px',lineHeight:'37.82px'}}>MedacoalDev,</h1>
        </div>  
        <div className='md:flex space-x-2 lg:space-x-9'>
        <a href="#home" className='text-[#000000] hover:text-[#5E3BEE]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Home</a>
        <a href="#skills" className='text-[#000000] hover:text-[#5E3BEE]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>My Skills</a>
              <a href="#portfolio" className='text-[#000000] hover:text-[#5E3BEE]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Portfolio</a>
              <a href="#about" className='text-[#000000] hover:text-[#5E3BEE]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>About Me</a>
              <a href="#testimonials" className='text-[#000000] hover:text-[#5E3BEE]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Testimonials</a>
        </div>
        <div className='flex w-5 md:mx-16 justify-center mx-auto items-center gap-2 pt-5'>
            <img src={face} alt='book'/>
            <img src={ig}alt='ig'/>
            <img src={twitter} alt='twitter'/>
            <img src={link}alt='linkedin'/>
        </div>
        </div>
     </div>
   </Wrapper>

   <div className="w-full bg-inherit border-t border-t-slate-400 text-sm py-6">
        <div className="bg-inherit flex flex-col justify-center items-center">
          <p className="text-center text-sm bg-inherit text-slate-300">
            Copyright&copy;2024&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved.
          </p>
          <small className="text-center bg-inherit text-[#000000] mt-3" style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '18.67px',lineHeight:'28px'}}>
         
            | Coded by @Medacoal
          </small>
        </div>
        <div  className="flex justify-end gap-5 px-10 pb-14">
          <p className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '18.67px',lineHeight:'28px'}}>Privacy Policy</p>
          <p className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '18.67px',lineHeight:'28px'}}>Terms of Service</p>
          <p className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '18.67px',lineHeight:'28px'}}>Cookies Setting</p>
        </div>
      </div>

   </div>
   
  )
}

export default Footer