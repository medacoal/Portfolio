import React from 'react'
import Wrapper from '../reuseables/Wrapper'
import mobile from "../../assets/images/Vector (5).png"
import tag from "../../assets/images/tag 1.png"
import testing from "../../assets/images/carbon_ibm-engineering-test-mgmt.png"
import pen from "../../assets/images/feather-pen 1.png"

const Skill = () => {
  return (
   <Wrapper>
     
<section id="skills">
<div className=' py-10'>
        <div className='text-center lg:text-start '>
            <h2 className='my-3' style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>My Skills</h2>
            <h1 className='' style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '64px',lineHeight:'76.8px'}}>My Expertise</h1>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-70 h-auto hover:bg-slate-300 my-7 text-center lg:text-start border-0 hover:border-b-4 hover:border-[#6348f3] '>
                <img src={mobile} alt='mobile' className='border bg-slate-50 rounded-2xl py-2 p-1 mx-auto lg:mx-0'/>
                <h1 className='' style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Responsive Design</h1>
                <p className=''style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>I have a solid expertise in responsive design, which is vital for creating user-friendly web applications that work well on any device. I focus on using fluid grids and flexible layouts to ensure that my designs adapt seamlessly to different screen sizes. By employing CSS media queries, I can customize styles based on the device's characteristics, enhancing the overall user experience. Additionally, I utilize frameworks like Tailwind CSS to streamline the design process and ensure that my applications are not only visually appealing but also accessible and easy to navigate across all platforms.</p>
            </div>
            <div className='bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-70 h-auto hover:bg-slate-300 my-7 text-center lg:text-start border-0 hover:border-b-4 hover:border-[#6348f3] '>
                <img src={tag} alt='logo' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto lg:mx-0 '/>
                <h1  style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Front-End Frameworks</h1>
                <p style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>I specialize in frontend frameworks, particularly React, which allows me to build dynamic and interactive user interfaces efficiently. My expertise includes leveraging component-based architecture to create reusable UI components, enhancing maintainability and scalability. I also have experience with state management libraries like Redux and integrating APIs to fetch and display data seamlessly. By utilizing Tailwind CSS, I can design responsive and visually appealing layouts that improve user experience across devices. My focus on performance optimization and best practices ensures that the applications I develop are not only functional but also fast and user-friendly.</p>
            </div>
            <div className='bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-70 h-auto hover:bg-slate-300 my-7 text-center lg:text-start border-0 hover:border-b-4 hover:border-[#6348f3]'>
                <img src={testing} alt='ux' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto lg:mx-0'/>
                <h1  style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Testing and Debugging</h1>
                <p style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>
                I have a solid expertise in responsive design, which is vital for creating user-friendly web applications that work well on any device. I focus on using fluid grids and flexible layouts to ensure that my designs adapt seamlessly to different screen sizes. By employing CSS media queries, I can customize styles based on the device's characteristics, enhancing the overall user experience. Additionally, I utilize frameworks like Tailwind CSS to streamline the design process and ensure that my applications are not only visually appealing but also accessible and easy to navigate across all platforms.</p>
            </div>
            <div className='bg-[#F5FCFF] rounded-xl p-5 w-full lg:w-70 h-auto hover:bg-slate-300 my-7 text-center lg:text-start border-0 hover:border-b-4 hover:border-[#6348f3]'>
                <img src={pen} alt='dev' className='border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto lg:mx-0'/>
                <h1  style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '32px',lineHeight:'44.8px'}}>Cloud Services</h1>
                <p style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>
                I have a strong expertise in cloud services, which allows me to build scalable and reliable applications. I am familiar with platforms like AWS and Azure, enabling me to deploy applications efficiently while managing resources effectively. My experience includes using cloud storage solutions for data management and leveraging serverless architecture to optimize performance and reduce costs. By integrating cloud services into my projects, I ensure that applications are not only robust but also easily maintainable and adaptable to changing user needs.</p>
            </div>
        </div>
     </div>
</section>

   </Wrapper>
  )
}

export default Skill

