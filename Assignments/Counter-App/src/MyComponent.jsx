import React, { useState } from "react";

function MyComponent() {
  const style = {
    cursor: "pointer",
  };
  const [value, setValue] = useState(0);

  const updateInc = () => {
    setValue(value + 1);
  };
  const updateDec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="countDiv">
      <div className="insideDiv">value : {value}</div>
      <div className="insideDiv insideFlex">
        <button style={style} onClick={updateInc}>
          ➕
        </button>
        <button style={style} onClick={updateDec}>
          ➖
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
