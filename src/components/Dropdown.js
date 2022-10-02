import React, { useContext, useState } from "react";
import { UserIcon, LogoutIcon, ChatAlt2Icon } from "@heroicons/react/outline";
import { UserContext } from "../context/userContext";

export default function Dropdown() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state);
  const [drop, setDrop] = useState(false);

  const clickDrop = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };

  const logout = () => {
    console.log("logout");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <button onClick={clickDrop} className="">
      <img src="./assets/photo.jpg" alt="" className="h-12 rounded-full" />
      {drop ? (
        <div className="z-10 absolute right-0 top-full w-max bg-white shadow-md mt-1 rounded">
          <ul className="border rounded text-center w-48">
            {/* <Link to={'/profile'}> */}
            <li className="flex items-center font-semibold pl-4 py-3 hover:bg-gray-100 border-b-2">
              <UserIcon className="h-6 text-sm mr-2 text-orange-900" />
              Profile
            </li>
            {/* </Link> */}
            {/* <Link to={'/complain'}> */}
            <li className="flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2">
              <ChatAlt2Icon className="h-6 text-sm mr-2" />
              Complaint
            </li>
            {/* </Link> */}
            <li onClick={logout} className="flex items-center font-semibold px-4 py-3 hover:bg-gray-100 border-b-2">
              <LogoutIcon className="h-6 text-sm mr-2 text-red-500" />
              Logout
            </li>
          </ul>
        </div>
      ) : null}
    </button>
  );
}
