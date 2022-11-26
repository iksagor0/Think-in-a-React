import React, { useContext } from "react";
import { UserContext } from "../App";

export default function UserDetails() {
  const { userState, userDispatch } = useContext(UserContext);
  console.log(userState);
  return (
    <div>
      <h2>User Details</h2>
      <p>username : {userState.username}</p>
      <p>role : {userState.role}</p>
      <p>email : {userState.email}</p>
    </div>
  );
}
