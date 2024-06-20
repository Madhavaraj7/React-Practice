import React, { useMemo, useState } from "react";

function MyComponent() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("");

  const doublenumber = useMemo(() => {
    return slow(number);
  }, [number]);

  const themestyles = useMemo(() => {
    return {
      backgroundColor: color ? "black" : "white",
      color: color ? "white" : "black",
    };
  }, [color]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setColor((curr) => !curr)}>Change</button>
      <div style={themestyles}>{doublenumber}</div>
    </div>
  );
}

export default MyComponent;

function slow(num) {
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}
