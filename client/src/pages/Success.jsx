import React from 'react'
import { FaThumbsUp } from "react-icons/fa";

const Success = () => {
  return (
    <div className="container flex items-center justify-center">
    <div className='flex relative m-10 flex-col rounded-full bg-blue-200 w-60 h-60 items-center justify-center '>
        <FaThumbsUp className='text-4xl text-green-600' />
      <h1 className='font-bold text-3xl text-green-500'>Success!</h1>
      <p className='text-slate-600 font-bold text-md'>You Have Appliad Successfully!</p>
    </div>
    
  </div>
  )
}

export default Success