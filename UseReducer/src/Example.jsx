import React from "react";
import { useReducer } from "react";

function reducerFn(state) {
  return { count: state.count + 1 };
}

function Example() {
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  const increment = () => {
    dispatch();
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Example;
