import React from 'react';
import Wrapper from '../reuseables/Wrapper';
import me from "../../assets/images/IMG_5195.JPG";

const Home = () => {
  return (
    <div className='pt-20 pb-10 bg-[#F5FCFF]'>
      <Wrapper>
      <section id="home">
      <div className='flex flex-col md:flex-row gap-20'>  
<div className=' flex flex-col lg:flex-row gap-10 '>
    <div className='md:py-20 text-black  '>
      <h1 className='text-3xl font-semibold text-center md:text-start' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',}}>
        Hey, I am Hammed
      </h1>
     
     <h1 className='lg:text-5xl text-2xl font-bold text-center md:text-start lg:w-[600px]' >
        I develop dynamic and User-Centered Web Applications.
      </h1>
     
      <p className='lg:text-[21.33px] lg:font-semibold lg:font-[Roboto] md:text-start w-full' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '26px', Lineheight:'39px',}}>
        My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.
      </p>
      <div className='bg-[#6348f3] md:w-36 rounded-xl hover:border py-2 text-center justify-center lg:justify-between'>
        <div className=' text-[#FFFFFF]'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Get in Touch</div>
      </div>
    </div>
  </div>

  <div className='md:py-12'>
    <img src={me} alt='face' className='w-[917.33px] h-[550px] rounded-3xl'/>
  </div>

</div> 
</section>

      </Wrapper>
    </div>
  );
};

export default Home;

