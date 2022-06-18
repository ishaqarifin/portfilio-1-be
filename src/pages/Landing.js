import React, { useState } from 'react'
import CardProduct from './component/CardProduct'
import Login from './component/Login';
import Register from './component/Register';
import Navbar from './Navbar';
import NavbarLogin from './NavbarLogin';

export default function Landing() {
  const [ showSignup, setShowSignup] = useState(false)
  const [ showSignin, setShowSignin] = useState(false)
  const [ isLogin] = useState(false)

  const handleShowSignup = () => setShowSignup(true)
  const handleShowSignin = () => setShowSignin(true)

  const handleCloseSignup = () => setShowSignup(false)
  const handleCloseSignin = () => setShowSignin(false)

  const toggleToSignin = (() => {
    setShowSignup(false)
    setShowSignin(true)
  })

  const toggleToSignup = (() => {
    setShowSignin(false)
    setShowSignup(true)
  })
  
  return (
    <div className=''>
    {isLogin ? (
      <Navbar showup={handleShowSignup} handleShow={handleShowSignin} />
    ) : <NavbarLogin />
    }

    <div className='p-10 grid grid-cols-2 lg:grid-cols-4 gap-10 md:grid-cols-4 sd:grid-cols-2 sm:grid-cols-3'>
      <div className='col-span-full m-auto'>
          <img src="./assets/jumbotron.png" alt="" className="m-auto mt-10" />
      </div>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  
    {showSignin ? (
        <Login show={showSignin} handleShow={handleShowSignin} handleClose={handleCloseSignin} toggle={toggleToSignup} />
      ) :
      (showSignup) ? (
        <Register show={showSignup} handleShow={handleShowSignin} handleClose={handleCloseSignup} toggle={toggleToSignin} />
      ) : null
    }
    </div>
  )
}
