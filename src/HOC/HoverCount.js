import React from "react";
import withCounter from "./withCounter";

function HoverCount({ count, increment }) {
  return <h1 onMouseOver={increment}>Hover {count} times</h1>;
}

export default withCounter(HoverCount);
