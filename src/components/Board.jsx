// import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  const renderSquare = () => {
    return <Square value="O" />;
  };

  return (
    <div className="board">
      <div className="class board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>
      <div className="class board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>
      <div className="class board-row">
        {renderSquare()} {renderSquare()} {renderSquare()}
      </div>
    </div>
  );
};

export { Board };
