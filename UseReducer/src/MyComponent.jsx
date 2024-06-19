import React, { useState } from "react";
import { useReducer } from "react";

function reducerFn(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function MyComponent() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  const increment = () => {
    // setCount((c) => c + 1);
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    // setCount((c) => c - 1);
    dispatch({type:"decrement"})
  };
  console.log(state);

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <p>{state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
