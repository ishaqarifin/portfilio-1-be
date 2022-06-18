import React from 'react'
import NavbarLogin from './NavbarLogin'

export default function Profile() {
  return (
    <>
      <NavbarLogin />
      <div className="flex px-20">
      {/* Profile */}
        <div className="basis-6/12">
          <div className="ml-16 font-bold text-orange-900 mt-5">My Profile</div>
          <div className="flex w-full ml-16 mt-4">
            <div className="flex rounded-lg shadow-lg max-w-sm h-44 mr-4">
              <img className="rounded h-auto object-cover" src="./assets/photo.jpg" alt="" />
            </div>
            <div className="flex-col space-y-5 ">
              <div className="px-3">
                <p className="text-orange-900 text-sm font-medium">Name</p>
                <p className="text-sm">ishaq</p>
              </div>
              <div className="px-3">
                <p className="text-orange-900 text-sm font-medium">Email</p>
                <p className="text-sm">ishaq@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Transaction */}
        <div className="basis-6/12">
          <div className="font-bold text-orange-900 mt-5">My Transaction</div>
          <div className="flex mt-4 bg-stone-200 items-center justify-between py-3 px-8">

            <div className="flex items-center">
              <div className="rounded-lg w-20 mr-4">
                <img className="rounded" src="./assets/product1.png" alt="" />
              </div>
              <div className="px-3">
                <p className="text-md font-bold">Mouse</p>
                <p className="text-xs"><b>Saturday</b>, 14 Juli 2021</p>
                <p className="text-xs mb-2">Price : Rp.500.000</p>
                <p className="text-xs">Qty : 4</p>
                <p className="text-xs font-bold">Sub Total : 500.000</p>
              </div>
            </div>

            <div className="w-20">
              <img className="" src="./assets/product1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
