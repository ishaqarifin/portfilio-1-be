import React, { useState } from 'react'
import { useMutation } from 'react-query';
// import { useNavigate } from 'react-router-dom'
import { API } from '../../config/api';
// import { UserContext } from '../../context/userContext';

export default function Register({show, handleClose, handleShow, toggle}) {
  // let navigate = useNavigate()
  let api = API();

  // const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Configuration Content-type
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data user to database
      const response = await api.post("/register", config);

      console.log(response);

      // Notification
      if (response.status === "success") {
        const alert = (
          <alert variant="success" className="py-1">
            Success
          </alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <alert variant="danger" className="py-1">
            Failed
          </alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <alert variant="danger" className="py-1">
          Failed
        </alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  const close = (e)=> {
    if (e.target.id === "modalregister") handleClose()
  }

  return (
    <div id='modalregister' onClick={close}
    className="flex bg-opacity-25 bg-black justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          
          <div className="relative p-6 flex-auto">
            <h3 className="text-3xl text-amber-900 font-bold">Register</h3>
            {message && message}
            <form 
            className="rounded pt-6 pb-8 w-80">
              <input onSubmit={(e) => handleSubmit.mutate(e)}
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={handleChange}
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 text-black" />
              <input 
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleChange}
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 mt-6 text-black" />
              <input 
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChange}
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 my-6 text-black" />
            <button
              className="text-white w-full bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              // onClick={handleClose}
            >
              Register
            </button>
            </form>
            <p className='text-center'>Don't have an account? Klik <span onClick={toggle} className='font-bold cursor-pointer'>Here</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
