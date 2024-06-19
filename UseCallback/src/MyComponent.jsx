import React, { useState, useCallback } from 'react';

import List from './List';
function Counter() {
  const [count, setCount] = useState(0);
  const [list,setList] = useState([])

  const increment =()=>{
    console.log("increment");
    setCount((c)=>c+1)
  }
  const addList = useCallback(() =>{
    setList((l)=>[...l,"list added"])
  },[list])

  // const addList = () =>{
  //   setList((l)=>[...l,"list Added"])
  // }

  return (
    <div>
      <List list={list} addList={addList} />
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
