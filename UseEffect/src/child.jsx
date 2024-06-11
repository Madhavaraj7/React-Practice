import React from "react";

function Child({setCount}) {
  const Increment = () => {
    setCount((count) => count + 1);
  };

  return <div>
    <button onClick={()=>Increment()}>Increment</button>
  </div>;
}

export default Child;
