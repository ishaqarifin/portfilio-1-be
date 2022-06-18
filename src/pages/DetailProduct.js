import React from 'react'
import NavbarLogin from './NavbarLogin'

export default function DetailProduct() {
  return (
    <>
      <NavbarLogin />
      <div className="flex justify-center mt-16">
        <div className="mr-8">
          <div className="h-96">
            <img className="object-fill h-full" src="./assets/product1.png" alt="" />
          </div>
        </div>
        <div className="">
          <div className="w-96">
            <h5 className="text-red-500 text-3xl font-bold">Title</h5>
            <p className=" text-base mb-3">Stock : 23</p>
            <p className="h-32 bg-slate-300  overflow-hidden text-sm text-justify my-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat, ea repellendus aut excepturi eveniet sunt deserunt quod voluptates quidem nulla sed magnam asperiores expedita deleniti? Sit autem dolor rerum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat, ea repellendus aut excepturi eveniet sunt deserunt quod voluptates quidem nulla sed magnam asperiores expedita deleniti? Sit autem dolor rerum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat, ea repellendus aut excepturi eveniet sunt deserunt quod voluptates quidem nulla sed magnam asperiores expedita deleniti? Sit autem dolor rerum.
            </p>
            <br />
            <p className="text-red-500 text-xl text-right font-bold mb-3">Rp. 100000</p>
          </div>
            <div 
              // onClick={(e) => handleBuy.mutate(e)}
              className="bg-yellow-500 text-center w-full py-1 mt-5 cursor-pointer font-bold rounded-sm">
                Add To Cart
            </div>
        </div>
      </div>
    </>
  )
}
