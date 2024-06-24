import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/userSlice";

function Home() {
  const dispatch = useDispatch();
  const [formInput, setForminput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForminput((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    dispatch(setUsers(formInput))
  };

  return (
    <div>
      <form>
        <label> Name</label>
        <br />
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleChange}
        />
        <br />
        <label> age</label>
        <br />
        <input
          name="age"
          type="number"
          value={formInput.age}
          onChange={handleChange}
        />
        <br />
        <label> email</label>
        <br />
        <input
          name="email"
          type="text"
          value={formInput.email}
          onChange={handleChange}
        />
        <br />
        <label> Conduct</label>
        <br />
        <input
          name="contact"
          type="Number"
          value={formInput.contact}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={addUser}>Add</button>
      </form>
    </div>
  );
}

export default Home;
