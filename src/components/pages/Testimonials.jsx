import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import stars from '../../assets/icons/Stars (1).png'
import avatar from '../../assets/images/Avatar Image (1).png'
import avatar2 from '../../assets/images/Avatar Image (2).png'
import avatar3 from '../../assets/images/Avatar Image (3).png'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <div className='pt-20 pb-10 bg-[#F5FCFF]'>
<Wrapper>
<div className='text-center lg:text-start '>
            <h2 className='my-3 text-[#282938]'style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Clients Feedback</h2>
            <h1 className='text-[#282938]' style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '64px',lineHeight:'76.8px'}}>Customer Testimonials</h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        <div className= 'border-2 border-[#325d5d] bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-auto h-auto  my-7 text-center lg:text-start'>
                <img src={stars} alt='stars' style={{ width: '150px', height: '25.19px' }}/>
                <p className='text-[#1C1E53] py-10' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>"Working with MedacoalDev to create my website was an amazing experience! Their expertise in frontend frameworks and responsive design truly shone through. They listened to my ideas and transformed them into a beautiful, functional site that looks great on all devices. The project was completed on time, and their communication was top-notch. I couldn't be happier with the final result.</p>
                <div className='flex items-center space-x-4'>
              <img src={avatar} alt=""  className="w-16 h-16 rounded-full" />
             <div>
             <h3 className='text-[#282938]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Dianne Russell</h3>
             <p className='text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>starbucks</p>
             </div>
            </div>
            </div>
        <div className= 'border-2 border-[#325d5d] bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-auto h-auto  my-7 text-center lg:text-start'>
                <img src={stars} alt='stars' style={{ width: '150px', height: '25.19px' }}/>
                <p className='text-[#1C1E53] py-10' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}} >"I had the pleasure of collaborating with MedacoalDev on my website, and I am thrilled with the outcome! Their knowledge of cloud services made the deployment process smooth and efficient. They provided valuable insights throughout the project and ensured that everything was optimized for performance. I highly recommend their services.</p>
                <div className='flex items-center space-x-4'>
              <img src={avatar2} alt=""  className="w-16 h-16 rounded-full" />
             <div>
             <h3 className='text-[#282938]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Kristin Watson</h3>
             <p className='text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Louis Vuitton</p>
             </div>
            </div>
            </div>
        <div className= 'border-2 border-[#325d5d] bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-auto h-auto  my-7 text-center lg:text-start'>
                <img src={stars} alt='stars' style={{ width: '150px', height: '25.19px' }}/>
                <p className='text-[#1C1E53] py-10' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}} >⁠"MedacoalDev helped me bring my vision to life with my new website. Their expertise in testing and debugging ensured that everything worked flawlessly before launch. They were patient and attentive to my needs, making the whole process enjoyable. I’m extremely satisfied with the final product.</p>
                <div className='flex items-center space-x-4'>
              <img src={avatar3} alt=""  className="w-16 h-16 rounded-full" />
             <div>
             <h3 className='text-[#282938]' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Kathryn Murphy</h3>
             <p  className='text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>McDonald's</p>
             </div>
            </div>
            </div>
           
</div>
</Wrapper>
    </div>
    </section>
  )
}

export default Testimonials