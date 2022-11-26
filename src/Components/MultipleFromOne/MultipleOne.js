import React, { useReducer } from "react";
import { initialState, reducer } from "../../useReducer/countReducer";

export default function MultipleOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count.count1);

  return (
    <div>
      <h5>{count.count1}</h5>
      <button onClick={() => dispatch("incrementFive")}>Increment</button>
      <button onClick={() => dispatch("decrementFive")}>Decrement</button>
    </div>
  );
}
