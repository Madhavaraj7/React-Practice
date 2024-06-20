import React, { useState, useMemo, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const memoizedValue = useMemo(() => {
    console.log('Calculating memoized value...');
    return count * 2;
  }, [count]);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>useMemo and useCallback Example</h1>
      <p>Count: {count}</p>
      <p>Memoized Value (Count * 2): {memoizedValue}</p>
      <button onClick={increment}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default Counter;
