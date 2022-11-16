import React from "react";

export default function Bracket({ textWithEmoji }) {
  const addFlag = (txt) => `{ ${txt} }`;

  return <div>{addFlag(textWithEmoji)}</div>;
}
