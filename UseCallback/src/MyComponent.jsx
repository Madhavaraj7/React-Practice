import React, { useCallback, useState } from "react";

import List from "./List";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [name, setName] = useState("Hello Madhav");

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addList = useCallback(() => {
    return setList((l) => [...l, "list added"]);
  }, [list]);

  const change = () => {
    if (name === "Hello Madhav") {
      setName("Hello hari");
    } else {
      setName("Hello Madhav");
    }
  };

  return (
    <div>
      <List list={list} addList={addList} />
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <p>{name}</p>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default MyComponent;
