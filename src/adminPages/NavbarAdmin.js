import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
  LogoutIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline"

export default function NavbarAdmin() {
  const [dropAdmin,setDropAdmin] = useState(false)
  const clickDropAdmin = ()=> {
    if (dropAdmin) {
      setDropAdmin(false)
    } else {
      setDropAdmin(true)
    }
  }
  return (
    <div
      className="flex items-center bg-stone-100 justify-between shadow-2xl h-[80px] px-20 mb-10">
      <div className="flex items-center h-10">
        <Link to='/dashboard'>
        <img src="./assets/iconlogo.png" alt="" className="h-12 cursor-pointer" />
        </Link>
      </div>

      <div className="w-42 relative item-center text-justify justify-center">
        <button 
      onClick={clickDropAdmin}
      className=''>
      <img src='./assets/photo.jpg' alt="" className='h-12 rounded-full' />
      {dropAdmin ? (
        <div className='z-10 absolute right-0 top-full w-max bg-white shadow-md mt-1 rounded'>
        <ul className='border rounded text-center w-48'>
          <Link to={'/addproduct'}>
          <li className='flex items-center font-semibold pl-4 py-3 hover:bg-gray-100 border-b-2'>
          <img src='./assets/vector.png' alt='dashboard' className="h-5 mr-3 " />
            Add Product
          </li>
          </Link>
          <Link to={'/complain-admin'}>
          <li className='flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2'>
          <ChatAlt2Icon className="h-6 text-sm mr-3" />
            Complaint
          </li>
          </Link>
          <Link to={'/'}>
          <li className='flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2'>
          <LogoutIcon className="h-6 text-sm mr-3 text-red-500" />
            Logout
          </li>
          </Link>
        </ul>
      </div>
      ) : null
      }
    </button>

      </div>
    </div>
  )
}
