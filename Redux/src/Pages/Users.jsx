import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteUser } from "../slices/userSlice";

function User() {
  const { username } = useParams();
  const users = useSelector((state)=> state.usersInfo.users)
  console.log(users);
  const dispatch = useDispatch();

  const deleteUserName = (index) =>{
    dispatch(deleteUser(index))
  }
  return <div>
    {users?.map((user,index)=>{
      return (
      <div key={index}>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.email}</h1>
        <h1>{user.contact}</h1>
        <button onClick={()=>deleteUserName(index)}>delete</button>

      </div>
      )
    })}
  </div>;
}

export default User;