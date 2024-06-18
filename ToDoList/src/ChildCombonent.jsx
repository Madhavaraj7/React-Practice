import React, { useState, useEffect } from "react";

function ChildCombonent() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    if (count === 5) {
      //   console.log("hello");

      return setCount(0);
    }
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default ChildCombonent;
