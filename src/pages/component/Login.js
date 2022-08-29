import React, {useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { API } from '../../config/api'

export default function Login({show, handleClose, handleShow, toggle}) {
  let navigate = useNavigate()
  let api = API()

  const [state, dispatch] = useContext(UserContext)
  console.log(state);
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const {email, password} = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = useMutation(async(e) => {
    try {
      e.preventDefault()
      
      const body = JSON.stringify(form)
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      const response = await api.post("/login", config);

      console.log(response);

      // Checking process
      if (response.status === "success") {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });
        // Status check
        if (response.data.status === "admin") {
          navigate("/complain-admin");
        } else {
          navigate("/");
        }

        handleClose()
      } else {
        const alert = (
          <alert variant="danger" className="py-1">
            Failed success
          </alert>
        );
        setMessage(alert);
      }

    } catch (error) {
      const alert = (
        <alert variant="danger" className="py-1">
          Login failed
        </alert>
      );
      setMessage(alert);
      console.log(error);
    }
  })

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
            {message && message}
            <form 
            onSubmit={(e) => handleSubmit.mutate(e)}
            className="rounded pt-6 pb-8 w-80"
            >
              <input 
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleChange}
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 text-black" />
              <input 
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handleChange}
                className="shadow bg-amber-100 border-2 border-orange-900 rounded w-full py-2 px-1 my-6 text-black" />

            <button
              className="text-white w-full bg-amber-900 active:bg-orange-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              // type="button"
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
