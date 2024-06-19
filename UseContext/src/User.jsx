import React, { useContext } from "react";
import { themeContext } from "./App";

function User() {
  const {color}  = useContext(themeContext);
  // console.log("contextValue",contextValue);
  const style = {
    backgroundColor: color === "light" ? "white" : "black",
    color: color === "light" ? "black" : "white",
  };
  return (
    <div>
      <h1 style={style}>user</h1>
    </div>
  );
}

export default User;
