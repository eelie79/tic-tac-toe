import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  // const initialSquares = [null, null, null, null, null, null, null, null, null]; // 0~8 각 9개의 게임판 블럭 배열 초기값
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true); // 첫번째 크릭 X, 다음 클릭 O

  const handleClickEvent = (i) => {
    console.log(`Square ${i} clicked!`);
    // squares[i] = "X"; -> 바로 배열에 입력안됨 상태관리 setSquares() 함수 이용하여 값 변경

    // 1. Make a copy of squares state array
    const newSquares = [...squares];

    // 2. Mutate the copy, setting the i--th element to "X"
    newSquares[i] = xIsNext ? "X" : "O"; // true면 X, false면 O

    // 3. Call the setSquares function with the mutated copy
    setSquares(newSquares);

    setXIsNext(!xIsNext); // true -> false
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

  // squares 클릭한 사각형의 인덱스 배열 -> 이기는 배열
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;

      // 1. null 이 아니니? 2. X = X 두번째 문자가 같니? 3.3번째 문자가 같니?
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // "X" or "O"
      }
    }

    return null;
  }

  const winner = calculateWinner(squares); // "X" : "O"
  // const player = `Next Player: ${xIsNext ? "X" : "O"}`;
  const player = winner ? `winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board">
      <h3> {player} </h3>
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
