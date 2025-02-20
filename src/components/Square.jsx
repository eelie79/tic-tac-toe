// import { useState } from "react";

const Square = (props) => {
  return (
    <button
      className="square"
      onClick={() => {
        console.log(`Square ${props.value} clicked!`);
      }}>
      {props.value}
    </button>
  );
};

export { Square };
