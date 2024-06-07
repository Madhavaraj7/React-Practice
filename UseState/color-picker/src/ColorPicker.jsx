import React, { useState } from "react";

function ColorPicker() {
  const [color, SetColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    SetColor(event.target.value);
  };

  // const handleChangeBackground = () => {
  //   document.body.style.backgroundColor = "#FF0000";
  // };

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected color : {color}</p>
        </div>
        <label>Select a color :</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
      </div>

      
    </>
  );
}

export default ColorPicker;
