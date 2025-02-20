import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  // const initialSquares = [null, null, null, null, null, null, null, null, null]; // 0~8 각 9개의 게임판 블럭 배열 초기값
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);

  const handleClickEvent = (i) => {
    console.log(`Square ${i} clicked!`);
    // squares[i] = "X"; -> 바로 배열에 입력안됨 상태관리 setSquares() 함수 이용하여 값 변경

    // 1. Make a copy of squares state array
    const newSquares = [...squares];

    // 2. Mutate the copy, setting the i--th element to "X"
    newSquares[i] = "X";

    // 3. Call the setSquares function with the mutated copy
    setSquares(newSquares);
  };
  console.log(squares);

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => {
          handleClickEvent(i);
        }}
      />
    );
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
