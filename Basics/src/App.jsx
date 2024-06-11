import React, { useState } from "react";

import ChildComponent from "./ChildComponent";

function App() {
 const [count,setCount] = useState(0);

 const [inputValue,setInputValue] = useState("")

 const [submitText, SetSubmitText] = useState("");


  return (
    <>

    <p>{count}</p>

    {/* <p>{inputValue}</p> */}



    <ChildComponent setCount={setCount} setInputValue={setInputValue} inputValue={inputValue} submitText={submitText} SetSubmitText={SetSubmitText}/>
    <p>{submitText}</p>
    
    </>
   
  );
}

export default App;
