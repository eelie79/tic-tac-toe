// import { useState } from "react";
import "./style.css";
import { Board } from "./Board";

const Game = () => {
  return (
    <div className="game">
      <h1>Tic-Tec-Toe</h1>
      <Board />
    </div>
  );
};

export { Game };
