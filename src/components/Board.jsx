// import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        margin: 10,
        padding: 20,
      }}>
      <h2>Board</h2>
      <Square />
    </div>
  );
};

export { Board };
