import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  function handleCountChange() {
    setCount((c) => {
      if (c === 5) {
        setShouldFetch(true);
      } else {
        setData("");
      }
      return c + 1;
    });
  }

  useEffect(() => {
    if (shouldFetch) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => setData(data.name));

      return setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleCountChange}>Add</button>
      <div>{data}</div>
    </>
  );
}

export default Counter;
