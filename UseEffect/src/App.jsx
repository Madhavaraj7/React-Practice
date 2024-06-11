import React, { useState } from "react";
import Child from "./child";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>

      <Child setCount={setCount} />
    </>
  );
}

export default App;
