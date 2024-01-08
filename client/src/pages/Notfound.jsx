import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex flex-col gap-10 items-center w-full h-full justify-center'>
      <h2 className='font-bold text-xl text-blue-600'>404 Page Notfound</h2>
      <div className="flex items-center py-2 px-4 rounded-lg text-white  justify-center bg-blue-900">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
      
    
   ) 
}

export default Notfound;