import React from 'react'
import {
  ShoppingCartIcon
} from "@heroicons/react/outline"
import {Link} from 'react-router-dom'
import Dropdown from '../components/Dropdown'

export default function NavbarLogin() {
  return (
    <div
      className="flex items-center bg-stone-100 justify-between shadow-2xl h-[80px] px-20 mb-10">
      <div className="flex items-center h-10">
        <Link to='/'>
        <img src="./assets/iconlogo.png" alt="" className="h-12 cursor-pointer" />
        </Link>
      </div>

      <div className="w-42 relative item-center text-justify justify-center">
        <Link to="/cart">
        <button 
          onClick=''
          className='mr-10'>
          <ShoppingCartIcon className="text-4xl text-center h-8" />
          <span className="absolute inset-0 object-right-top mr-14">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              6
            </div>
          </span>
        </button>
        </Link>

        <Dropdown />
        {/* <button 
          onClick=''
          className=''>
          <img src='./assets/photo.jpg' alt="" className='h-12 rounded-full' />
        </button> */}

      </div>
    </div>
  )
}
