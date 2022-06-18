import React from 'react'
import {
  TrashIcon,
  PlusSmIcon,
  MinusSmIcon
} from "@heroicons/react/outline"
import NavbarLogin from './NavbarLogin'

export default function Cart() {
  return (
    <>
      <NavbarLogin />
          <div className="ml-24 font-bold text-orange-900 mt-5">My Cart</div>
      <div className="flex px-24 space-x-6 py-6">
        <div className="basis-8/12">
          <div className="border-orange-900 border-b pb-2 w-full ">
            <p className="text-sm font-medium">preview your order</p>
          </div>
          <div className="flex w-full justify-between my-3 items-center">
            <div className='flex items-center'>
              <img className="h-20 object-cover" src="./assets/photo.jpg" alt="" />
              <div className="flex-col space-y-5 ml-3">
                <p className="text-sm text-orange-900 font-bold">GUETEMALA Beans</p>
                <div className='flex'>
                <MinusSmIcon className='h-6 cursor-pointer' />
                <p className="text-md bg-red-100 px-3 font-medium">1</p>
                <PlusSmIcon className='h-6 cursor-pointer' />
                </div>
              </div>
            </div>
            <div className="flex-col space-y-5 ">
              <p className="text-sm text-orange-900 text-right">Rp. 300.000</p>
              <TrashIcon className="text-xl text-right text-orange-900  h-6 ml-16" />
            </div>
          </div>
          <div className="border-orange-900 border-b px-3 w-full">
            <p className="text-sm font-medium"></p>
          </div>
        </div>

        <div className="basis-4/12 relative">
          <div className="flex-col space-y-3">
            <div className="py-2 border-orange-900 border-y mt-8">
              <p className="text-orange-900 text-sm">Sub Tota  : Rp.500.000</p>
              <p className="text-orange-900 text-sm">Qty       : 2</p>
            </div>
            <p className="text-orange-900 text-sm">Total : Rp.500.000</p>
            <button 
              className='bg-orange-900 absolute right-0 rounded-md w-44 border-none font-bold text-white'>
              <p>Pay</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
