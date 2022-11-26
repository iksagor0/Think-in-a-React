import React, { useReducer } from "react";

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

export default function BasicConsept() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h5>{count}</h5>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}
