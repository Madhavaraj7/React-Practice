import React, { useState } from "react";

function Mycomponent() {
  const [cars, setCars] = useState([]);

  const [carYear, SetCarYear] = useState(new Date().getFullYear());
  const [carModel, SetCarModel] = useState("");
  const [carMake, setCarmake] = useState("");

  const handleCarsChange = () => {
    const newCars = { year: carYear, make: carMake, model: carModel };
    setCars([...cars, newCars]);
    SetCarYear(new Date().getFullYear());
    SetCarModel("");
    setCarmake("");
  };

  const handleYearChange = (event) => {
    SetCarYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setCarmake(event.target.value);
  };
  const handleModelChange = (event) => {
    SetCarModel(event.target.value);
  };

  const handleRemover = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemover(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <br />
      <input
        type="text"
        value={carMake}
        placeholder="enter car make"
        onChange={handleMakeChange}
      />{" "}
      <br /> <br />
      <input
        type="text"
        value={carModel}
        placeholder="enter car model"
        onChange={handleModelChange}
      />{" "}
      <br />
      <br />
      <button onClick={handleCarsChange}>Add Cars</button>
    </>
  );
}

export default Mycomponent;
