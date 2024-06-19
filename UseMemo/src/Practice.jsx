import React, { useState, useMemo } from 'react';

function ExpensiveComputationComponent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // This function simulates an expensive computation
  const expensiveComputation = (num) => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <p>Typed Text: {input}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Expensive Computation Result: {memoizedValue}</p>
    </div>
  );
}

export default ExpensiveComputationComponent;
