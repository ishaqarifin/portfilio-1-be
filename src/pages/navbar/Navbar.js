import React from 'react'

export default function Navbar({showup, handleShow, toggle}) {
  return (
    <div
      className="flex mb-10 items-center bg-stone-100 justify-between shadow-2xl h-[80px] px-20">
      <div className="flex items-center h-10">
        <img src="./assets/iconlogo.png" alt="" className="h-12 cursor-pointer" />
      </div>

      <div className="w-42 flex ">
        <button 
        onClick={handleShow}
        className='mr-4  p-1 w-24 rounded-md border-2 border-orange-900 font-bold text-orange-900'>
          Login
        </button>
        <button 
          onClick={showup}
          className='bg-orange-900 rounded-md w-24 p-1 border-none font-bold text-white'>
          Register
        </button>
      </div>
    </div>
  )
}
