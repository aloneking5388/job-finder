import React from 'react'
import { JobImg } from "../assets";
import { MdLocationCity } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";

const ContsctUs = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
    <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
      <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Contact Us</h1>
        <p className='flex gap-3 justify-center relative py-3 my-2 items-center rounded-xl w-80 bg-slate-200 px-2 font-bold leading-7'>
        <MdLocationCity className='text-2xl' /> 1129, RajaJi Puram Lucknow
        </p>
        <p className='flex gap-3 justify-center relative py-3 my-2 items-center rounded-xl w-80 bg-slate-200 px-2 font-bold leading-7'>
        <AiTwotoneMail className='text-2xl' /> kaamyabjobportal@gmail.com
        </p>
        <p className='flex gap-3 justify-center relative py-3 my-2 items-center rounded-xl w-80 bg-slate-200 px-2 font-bold leading-7'>
        <FaPhoneVolume className='text-2xl' /> +91 5224959793
        </p>
      </div>
      <img src={JobImg} alt='About' className='w-auto h-[300px]' />
    </div>
  </div>
  )
}

export default ContsctUs