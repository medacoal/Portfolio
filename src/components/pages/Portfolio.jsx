import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import git from "../../assets/icons/Vector (7).png"
import advice from "../../assets/images/advice.jpg"
import carddetails from "../../assets/images/card details.jpg"
import homepro from "../../assets/images/Rectangle 1.png"


import arrow from "../../assets/icons/Vector (8).png"

const Portfolio = () => {
  return (
   <Wrapper>
     
<section id="portfolio">
<div>
<div className="my-12">
      <h2 className='text-center text-[#282938] md:text-start' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Recent Projects</h2>
      <div className='flex justify-between flex-col md:flex-row'>
      <h1 className='text-[#282938] md:text-4xl text-2xl text-center py-2' style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '64px',lineHeight:'76.8px'}} >My Portfolio</h1>
      <a href="https://github.com/medacoal" target='_blank' className='hover:border rounded-xl bg-[#7b69bf]  px-2 flex justify-center lg:justify-between'>
        <img src={git} alt='hub' className='  py-3'/>
        <h2 className='text-[#FFFF] py-3 m-2' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Visit My GitHub</h2>
      </a>
      </div>
    </div>
    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 py-5 gap-5'>
    
      <div className='border rounded-xl p-2'>
        <img src={advice} alt='dash' className='h-[300px] rounded-2xl'/>
        <h1 style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Advice Generator App</h1>
        <p className='py-2' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Advice generator app fetch Advice Slip API to generate random quotes of advice.</p>
        <a href='https://adviser-generator-app.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '18.67px',lineHeight:'28px'}}>View Website</h1>
        <img src={arrow} alt='arrow' className='p-2 py-2'/>
        </a>
      </div>
   
      <div className='border rounded-xl p-2'>
        <img src={carddetails} alt='dash' className=' w-[440px] h-[300px] rounded-2xl'/>
        <h1 style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Interactive card Details</h1>
        <p className='py-2' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Interactive card details is use to fill card details such as the card number, CVV, expiry date and save it.</p>
        <a href='https://interactive-card-details-plum.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '18.67px',lineHeight:'28px'}}>View Website</h1>
        <img src={arrow} alt='arro' className='p-2 py-2'/>
        </a>
      </div>
   
      <div className='border rounded-xl p-2 '>
        <img src={homepro} alt='dash' className='h-[300px] rounded-2xl'/>
        <h1 style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Home-Pro</h1>
        <p className='py-2'style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}> HomePro is a cutting-edge real estate platform designed to connect buyers, sellers, and real estate professionals, Whether you're looking to find your dream home or a property.</p>
        <a href=' https://home-pro-grfy.vercel.app/' className='flex hover:border lg:w-48 hover:bg-slate-100 rounded-xl px-3 justify-center lg:justify-between'>
        <h1 className='text-[#000000]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '18.67px',lineHeight:'28px'}}>View Website</h1>
        <img src={arrow} alt='arro' className='p-2 py-2'/>
        </a>
      </div>
    </div>
   
    </div>
</section>

   </Wrapper>
  )
}

export default Portfolio