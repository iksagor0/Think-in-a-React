import React, { useReducer } from "react";
import { initialState, reducer } from "../../useReducer/countReducer";

export default function MultipleOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count.count2);

  return (
    <div>
      <h5>{count.count2}</h5>
      <button onClick={() => dispatch("incrementOne")}>Increment</button>
      <button onClick={() => dispatch("decrementOne")}>Decrement</button>
    </div>
  );
}
