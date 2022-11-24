import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p>username : {userData.username}</p>
      <p>role : {userData.role}</p>
      <p>email : {userData.email}</p>
    </div>
  );
}
