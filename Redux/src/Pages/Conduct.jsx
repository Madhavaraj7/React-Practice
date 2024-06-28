import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slices/counterSlice";

function Conduct() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Conduct;
