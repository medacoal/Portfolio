import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import me from '../../assets/images/IMG_5910.JPG'

const aboutMe = () => {
  return (
    <section id='about'>
      <div className='pt-20 pb-10 bg-white'>
 <Wrapper>
      <section id="aboutme">
      <div className='flex flex-col md:flex-row gap-20'>  
<div className=' flex flex-col lg:flex-row gap-10 '>

<div className='md:py-12'>
    <img src={me} alt='face' className='w-[1000px] h-[350px]  rounded-3xl'/>
  </div>

    <div className='md:py-20 text-black  '>
    <div className='text-center lg:text-start '>
            <h2 style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>About</h2>
            <h1 style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '64px',lineHeight:'76.8px'}}>About Me</h1>
        </div>
      <p className='md:text-start w-full text-[#1C1E53] ' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '24px',lineHeight:'36px'}}>
      Hi, I'm HAMMED AJEIGBE, a Fullstack Web Developer and a passionate tech enthusiast.I enjoy building dynamic web applications using technologies like JavaScript, React, Node.js,Tailwind CSS, Bootstrap, and more. I've been working on various projects that allow me to apply my skills, solve real-world problems, and continuously expand my knowledge. I'm always excited to create new things and share my experiences with others along the way.


      </p>
    </div>
  </div>


</div> 
</section>

      </Wrapper>
    </div>
    </section>
  )
}

export default aboutMe