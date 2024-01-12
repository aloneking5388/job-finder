import React from 'react'
import { JobImg } from "../assets";

const ContsctUs = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
    <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
      <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Contact Us</h1>
        <p className='text-justify leading-7'>
        Address:- 1129, RajaJi Puram Lucknow India
        </p>
        <p className='text-justify leading-7'>
        Email Address:- kaamyabjobportal@gmail.com
        </p>
        <p className='text-justify leading-7'>
          Phone Numbur:- +91 5224959793
        </p>
      </div>
      <img src={JobImg} alt='About' className='w-auto h-[300px]' />
    </div>
  </div>
  )
}

export default ContsctUs