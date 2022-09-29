import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import NavbarLogin from "../navbar/NavbarLogin";
import { io } from "socket.io-client";
let socket;

export default function ComplaintClient() {
  const img = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80";

  const [state] = useContext(UserContext);
  // console.log(state);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      // code here
      query: {
        id: state.user.id,
      },
    });

    return () => {
      socket.disconnect();
    };
  }); // code here

  return (
    <>
      <NavbarLogin />
      <div className="flex container-full mx-auto justify-center space-x-5">
        <div className="w-1/5">
          <div className="flex p-2 bg-slate-200 items-center">
            <img src={img} alt="user" className="rounded-full mr-2 h-14 w-14 items-center" />
            <div className="">
              <p>Yes, Is there anyting</p>
              <p>Yes, Is there anyting</p>
            </div>
          </div>
        </div>
        {/* <div className='w-1/2 max-h-screen bg-blue-600 ' style={{ height: "80vh" }}>
          chat
        </div> */}
        <div className="flex-col bg-slate-200 w-3/6 rounded-lg px-4">
          <div style={{ height: "70vh" }} className="overflow-auto py-2">
            <div className="flex justify-start items-center w-1/2 ">
              <img src={img} alt="user" className="rounded-full mr-2 h-10 w-10 items-center" />
              <div className="bg-white rounded-xl p-1">Yes, Is there anyting</div>
            </div>
          </div>
          <div className="flex mb-4">
            <input placeholder="Send Message" className="w-full input-message px-4" />
            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
