import React, { useState, useEffect, useRef } from "react";

function Practice(props) {
  const [count, setCount] = useState(1);

  const [data, setData] = useState("");
  const [fetchdata, SetFetch] = useState(false);

  const [name, Setname] = useState("");
  const [input, setInput] = useState();

  const inputRef = useRef("")

  function handleCountChange() {
    setCount((c) => {
      if (c === 5) {
        SetFetch(true);
      } else {
        setData("");
      }
      return c + 1;
    });
  }

  function handleNameChange(event) {
    Setname(event.target.value);
  }
  function display() {
    setInput(name);
    Setname("");
    inputRef.current.style.backgroundColor = "red"
  }

  useEffect(() => {
    if (fetchdata) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => setData(data.name));
      return SetFetch(false);
    }
  }),
    [fetchdata];

  return (
    <div>
      <h1>
        {props.username}:{props.age}
      </h1>

      <h1>{count}</h1>

      <button onClick={handleCountChange}>Increment</button>
      <h1>{data}</h1>

      <input ref={inputRef}
        type="text"
        placeholder="enter the name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={display}>submit</button>

      <h1>{input}</h1>
    </div>
  );
}

export default Practice;
