import React from 'react'
import {Link} from 'react-router-dom'

export default function CardProduct() {
  return (
    <div className="overflow-hidden m-auto bg-red-100">
      <Link to={'/detail'}>
      <img className="w-fit" src="./assets/product1.png" alt="Mountain" />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Rp. 200.000
        </p>
        <p className="text-gray-700 text-base">
          Stock : 3
        </p>
      </div>
    </Link>
    </div>
  )
}
