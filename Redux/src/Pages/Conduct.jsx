// CounterComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const direction = useSelector((state) => state.counter.direction);

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === 'increment') {
        dispatch(increment());
      } else {
        dispatch(decrement());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, direction]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl mb-4">Counter: {counter}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
