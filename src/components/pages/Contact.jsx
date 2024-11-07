import React, { useState } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa'; 
import Wrapper from '../reuseables/Wrapper';

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Simple validation
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!isChecked) newErrors.terms = 'You must accept the terms';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <Wrapper>
      <section id="contact">
        <div className='py-12'>
          <div className='text-center '>
            <h2  className='text-[#282938]'  style={{ fontFamily: 'Roboto', fontWeight: '600', fontSize: '21.33px',lineHeight:'32px'}}>Get in touch</h2>
            <h1 className='text-[#282838]' style={{ fontFamily: 'Roboto', fontWeight: '700', fontSize: '64px',lineHeight:'76.8px'}}>Contact me</h1>
            <p className='pt-2 text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '24px',lineHeight:'36px'}}>(+234) 8116485127</p>
            <p className='pt-2 cursor-pointer text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '24px',lineHeight:'36px'}}>
              <a href="mailto:hammedajeigbe@gmail.com" className='hover:underline text-[#1C1E53]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '24px',lineHeight:'36px'}} >
                hammedajeigbe@gmail.com
              </a>
            </p>
          </div>
          <div className=''>
            <div className='lg:mx-64 pt-6 lg:p-0 p-2 mx-auto'>
              <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col lg:gap-10 gap-5">
                  <div>
                    <h1 className='text-[#282938]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>First name</h1>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full md:w-[390px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                    />
                    {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <h1 className='text-[#282938]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Last name</h1>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full md:w-[390px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                    />
                    {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="flex md:flex-row flex-col lg:gap-10 gap-5 py-4">
                  <div>
                    <h1 className='text-[#282938]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Email</h1>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full md:w-[390px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <h1 className='text-[#282938]'  style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>Phone number</h1>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={11}
                      className=" font-[roboto] w-full md:w-[390px] py-4 border border-gray-800 rounded-lg pl-5 text-xl"
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className='pt-5 '>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows="4"
                    className=" font-[roboto] lg:w-[820px] w-full pl-5 max-h-56 py-3 border border-gray-800 rounded-lg text-xl"
                  />
                  {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>

                <div className='w-[200px] pb-4 text-[#282938] flex items-center cursor-pointer' onClick={handleCheckboxClick}>
                  {isChecked ? (
                    <FaCheckSquare className="text-green-500" />
                  ) : (
                    <FaRegSquare className="text-gray-500" />
                  )}
                  <h1 className='px-3 text-[#282938]' style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}}>I accept the terms</h1>
                </div>
                {errors.terms && <p className="text-red-500">{errors.terms}</p>}

                <div className="justify-center">
                  <button
                    type="submit"
                    className=" lg:w-[820px] w-full p-5 bg-[#5E3BEE] text-white  rounded-xl hover:bg-[#5f3beee3] "
                    style={{ fontFamily: 'Roboto', fontWeight: '400', fontSize: '21.33px',lineHeight:'32px'}} >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;