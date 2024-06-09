import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  let ab = "";
  function handleInputchange(event) {
    // console.log(inputRef.current.value);
    ab += inputRef.current.value;
  }

  console.log("rerendering");

  const display = () => {
    setInput(inputRef.current.value);
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h1>input</h1>
      <input ref={inputRef} type="text" onChange={handleInputchange} />
     
      <p>my name is {inputRef?.current?.value}</p>
      <button onClick={display}>Show input</button>
    </div>
  );
}

export default MyComponent;
