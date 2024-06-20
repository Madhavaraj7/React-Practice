import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  function Maximum() {
    console.log("rendering");
    return Math.max(...arr);
  }

  const memo = useMemo(() => {
    return Maximum();
  }, [arr]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <p>{Maximum()}</p> */}
      <p>{memo}</p>
      <button onClick={() => setArr([...arr, Math.round(count * 2)])}>
        Add to array
      </button>
      <p>{JSON.stringify(arr)}</p>
    </div>
  );
}

export default Example;
