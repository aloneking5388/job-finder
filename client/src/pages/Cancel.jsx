import React from 'react'
import { FcCancel } from "react-icons/fc";

const Cancel = () => {
  return (
    <>
      <div className="container flex items-center justify-center">
        <div className='flex relative m-10 flex-col rounded-full bg-red-200 w-60 h-60 items-center justify-center '>
            <FcCancel className='text-4xl text-red-600' />
          <h1 className='font-bold text-3xl text-red-500'>Canceled!</h1>
          <p className='text-slate-600 font-bold text-sm'>Something Went Wrong!</p>
        </div>
      </div>
    </>
  )
}

export default Cancel;