import React, { useState, useEffect, useRef } from "react";

function Practice(props) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const inputRef = useRef("");
  const [address, setAddress] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const [name, setName] = useState("please login");
  const [login, setlogin] = useState("login");

  const [backgroundColor, setBackgroundcolor] = useState("#000000");
  const [color, setColor] = useState("#808080");

  function handleIncrementChange() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    if (count === 5) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => setData(data.name));
    } else {
      setData("");
    }
  }, [count]);

  function display() {
    inputRef.current.style.backgroundColor = "red";
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function displayAddress() {
    setSubmittedName(address);
  }

  function displayLogin() {
    if (login === "login") {
      setlogin("logout");
      setName("welcome");
    } else {
      setName("please login");
      setlogin("login");
    }
  }

  function ChangeColor() {
    if (backgroundColor === "#000000") {
      setBackgroundcolor("#808080");
      setColor("#000000");
    } else {
      setBackgroundcolor("#000000");
      setColor("#808080");
    }
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrementChange}>Increment</button>
        <h1>{data}</h1>

        <input ref={inputRef} type="text" placeholder="Enter name" />
        <button onClick={display}>Add</button>

        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={handleAddressChange}
        />

        <button onClick={displayAddress}>Submit</button>
        <h1>{submittedName}</h1>

        <p>{name}</p>
        <button onClick={displayLogin}>{login}</button>
      </div>

      <div style={{ backgroundColor: backgroundColor }}>
        <p style={{ color: color }}>hello</p>
      </div>
      <button onClick={ChangeColor}>Change</button>
    </>
  );
}

export default Practice;
