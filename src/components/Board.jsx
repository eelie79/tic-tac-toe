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
      <div className="class board-row">
        {/* prettier-ignore */}
        <Square /> <Square /> <Square />
      </div>
      <div className="class board-row">
        {/* prettier-ignore */}
        <Square /> <Square /> <Square />
      </div>
      <div className="class board-row">
        {/* prettier-ignore */}
        <Square /> <Square /> <Square />
      </div>
    </div>
  );
};

export { Board };
