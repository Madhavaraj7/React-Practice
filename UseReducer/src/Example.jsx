import React from "react";
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

function Example() {
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <p>{state.count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default Example;
