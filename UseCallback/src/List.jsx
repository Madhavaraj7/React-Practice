import React from 'react'

function List({list,addList}) {
    console.log("render");
  return (
    <div>
        <h2>List</h2>
        {list.map((lists,index)=>{
            return <p key={index}>{lists}</p>
        })}

        <button onClick={addList}>Add</button>

    </div>
  )
}

export default React.memo(List)