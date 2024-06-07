import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 2);
    // setCount((curr)=>{
    //   return curr+1
    // })
    // setCount((curr)=>{
    //   return curr+1
    // })
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-element">
      <p className="counter-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
