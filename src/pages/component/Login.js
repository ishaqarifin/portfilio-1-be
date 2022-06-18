import React from 'react'

export default function Login({show, handleClose, handleShow, toggle}) {
  const close = (e)=> {
    if (e.target.id === "modal") handleClose()
  }
  return (
    <div onClick={close} id="modal"
    className="flex bg-opacity-25 bg-black justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          
          <div className="relative p-6 flex-auto">
            <h3 className="text-3xl text-amber-900 font-bold">Login</h3>
            <form className="rounded pt-6 pb-8 w-80">
              <input 
                placeholder='Email'
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 text-black" />
              <input 
                placeholder='Password'
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 my-6 text-black" />
            <button
              className="text-white w-full bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={handleClose}
            >
              Submit
            </button>
            </form>
            <p className='text-center'>Don't have an account? Klik <span onClick={toggle} className='font-bold cursor-pointer'>Here</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
