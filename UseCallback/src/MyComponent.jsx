import React, { useCallback, useState } from "react";

import List from "./List";

function MyComponent() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addList = useCallback(()=>{
    return setList((l)=>[...l,"list added"])
    
  },[list])

 

  return (
    <div>
      <List list={list} addList={addList} />
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
