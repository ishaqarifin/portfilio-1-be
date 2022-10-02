import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import Cart from "./pages/cart/Cart";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import ComplaintClient from "./pages/complain/ComplaintClient";
import Dashboard from "./adminPages/Dashboard";
import ComplainAdmin from "./adminPages/ComplainAdmin";
import AddProduct from "./adminPages/AddProduct";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  //redirect auth
  useEffect(() => {
    if (state.islogin === false) {
      navigate("/auth");
    } else {
      if (state.user.status === "admin") {
        navigate("/");
      } else if (state.user.status === "customer") {
        navigate("/complain-admin");
      }
      // {state.user.status === "admin" ? (
      //   navigate('/')
      //   ) : state.user===customer ? (
      //     navigate('complain-admin')
      //   )
      // }
    }
  }, [state]);

  //check user token
  const checkAuth = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("response", response);
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/complain" element={<ComplaintClient />} />
      <Route path="/detail/:id" element={<DetailProduct />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/complain-admin" element={<ComplainAdmin />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
