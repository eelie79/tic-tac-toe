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
    console.log("newSquares: " + newSquares); // newSquares: X,O,X,,X,O,X,O, 클릭한 문자배열

    // 게임종료 후 클릭방지 & 이미 클릭한 square 클릭방지
    const winnerDeclared = Boolean(calculateWinner(newSquares)); // calculateWinner
    const squareFilled = Boolean(newSquares[i]); // 클릭한 인덱스에 값이 있는지 확인

    console.log("calculateWinner: " + calculateWinner(newSquares), newSquares[i]); // null null or X null 둘중 하나만 true면 return
    // winner가 나왔거나 클릭한 인덱스 클릭시 리턴
    if (winnerDeclared || squareFilled) {
      return;
    }

    // 2. Mutate the copy, setting the i--th element to "X"
    newSquares[i] = xIsNext ? "X" : "O"; // true면 X, false면 O

    // 3. Call the setSquares function with the mutated copy
    setSquares(newSquares);

    setXIsNext(!xIsNext); // true -> false
  };
  console.log(squares);

  // 클릭할때 마다 인덱스 번호 돌려줌
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

  // squares 클릭한 사각형의 인덱스 배열 ['X', 'O', null, null, 'X', 'O', null, null, 'X'] -> 이기는 배열 lines [X, 1, 2]
  const calculateWinner = (squares) => {
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

    // lines 우증 조합 배열 만큼 반복하면서 해당 클릭 인텍스의 문자 a, b, c 가 우승조합 인덱스번호와 같은지 확인
    for (let line of lines) {
      const [a, b, c] = line; // [0, 1, 2] == [X, X, X] -> Win
      console.log(squares[a], squares[b], squares[c]);

      // 1. null 이 아니니? 2. X = X 두번째 문자가 같니? 3.3번째 문자가 같니?
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // "X" or "O"
      }
    }

    return null;
  };

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
