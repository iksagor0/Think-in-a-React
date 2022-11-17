import React from "react";
import withCounter from "./withCounter";

const ClickButton = ({ count, increment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <button type="button" onClick={increment}>
        Clicked {count} Times
      </button>

      <button type="submit">Submit</button>
    </form>
  );
};

export default withCounter(ClickButton);
