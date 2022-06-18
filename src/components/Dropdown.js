import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
  UserIcon,
  LogoutIcon,
  ChatAlt2Icon
} from "@heroicons/react/outline"

export default function Dropdown() {
  const [drop,setDrop] = useState(false)
  const clickDrop = ()=> {
    if (drop) {
      setDrop(false)
    } else {
      setDrop(true)
    }
  }
  return (
    <button 
      onClick={clickDrop}
      classNameName=''>
      <img src='./assets/photo.jpg' alt="" className='h-12 rounded-full' />
      {drop ? (
        <div className='z-10 absolute right-0 top-full w-max bg-white shadow-md mt-1 rounded'>
        <ul className='border rounded text-center w-48'>
          <Link to={'/profile'}>
          <li className='flex items-center font-semibold pl-4 py-3 hover:bg-gray-100 border-b-2'>
          <UserIcon className="h-6 text-sm mr-2 text-orange-900" />
            Profile
          </li>
          </Link>
          <Link to={'/complain'}>
          <li className='flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2'>
          <ChatAlt2Icon className="h-6 text-sm mr-2" />
            Complaint
          </li>
          </Link>
          <Link to={'/'}>
          <li className='flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2'>
          <LogoutIcon className="h-6 text-sm mr-2 text-red-500" />
            Logout
          </li>
          </Link>
        </ul>
      </div>
      ) : null
      }
    </button>
    
  )
}
