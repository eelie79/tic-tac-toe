import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  const initialSquares = [null, null, null, null, null, null, null, null, null];
  const [squares, setSquares] = useState(initialSquares);

  const renderSquare = (i) => {
    return <Square value={squares[i]} />;
  };

  return (
    <div className="board">
      <div className="class board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="class board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="class board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </div>
  );
};

export { Board };
