import React from 'react'
import {Link} from 'react-router-dom'

export default function CardProduct({item}) {
  return (
    <div className="overflow-hidden m-auto bg-red-100">
      <Link to={'/detail/'+ item.id}
      // key={index}
      >
      <img className="w-fit" src={item.image} alt="Mountain" />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">
          Rp. {item.price}
        </p>
        <p className="text-gray-700 text-base">
          Stock : {item.qty}
        </p>
      </div>
    </Link>
    </div>
  )
}
