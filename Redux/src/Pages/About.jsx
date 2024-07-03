import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../slices/loginSlice";

function About() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLogedIn);

  const handleChange = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <div>
      <p>{isLoggedIn ? "welcome" : "please login"}</p>
      <button onClick={handleChange}>{isLoggedIn ? "logout" : "login"}</button>
    </div>
  );
}

export default About;
