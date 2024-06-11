import React, { useState } from "react";

function ChildComponent({
  setCount,
  setInputValue,
  inputValue,
  SetSubmitText,
}) {
  const [login, Setlogin] = useState("please login");
  const [button, setButton] = useState("Login");
  const [color, setColor] = useState("#808080");

  function increment() {
    setCount((count) => count + 1);
  }

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function submit() {
    SetSubmitText(inputValue);
    setInputValue("");
  }

  function changes() {
    if (login === "please login") {
      Setlogin("welcome");
      setButton("logout");
    } else {
      Setlogin("please login");
      setButton("login");
    }
  }

  function handlebackground() {
    const newColor = color === "#808080" ? "#FF0000" : "#808080"; 

    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  }

  return (
    <>
      <button onClick={increment}>increment</button> <br /> <br />
      <input
        type="text"
        placeholder="enter name"
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button onClick={submit}>submit</button>
      <div>
        <p>{login}</p>
        <button onClick={changes}>{button}</button>
      </div>
      <br />
      <button onClick={handlebackground} style={{ backgroundColor: color }}>change</button>
    </>
  );
}

export default ChildComponent;
