import React from "react";

function List({ list, addList }) {
  return (
    <div>
      <h1>List</h1>
      {list.map((lists, index) => {
        return <p key={index}>{lists}</p>;
      })}
      <button onClick={addList}>Add Lists</button>
    </div>
  );
}

export default List;
