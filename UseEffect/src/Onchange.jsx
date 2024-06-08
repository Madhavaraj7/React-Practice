import React, { useState } from "react";

function Onchange() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handlepayment = (event) => {
    setPayment(event.target.value);
  };

  const handleShipping = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name:{name}</p>

      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>quantity:{quantity}</p>

      <textarea
        values={comment}
        onChange={handleComment}
        placeholder="Enter details"
      ></textarea>
      <p>comment:{comment}</p>

      <select value={payment} onChange={handlepayment}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="giftCard">Giftcard</option>
      </select>
      <p>{payment}</p>

      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShipping}
        ></input>{" "}
        pick-up
      </label><br></br>
      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShipping}
        ></input>{" "}
        delivery
      </label>

      <p>shipping : {shipping}</p>
    </div>
  );
}

export default Onchange;
