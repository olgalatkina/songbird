import React from "react";
import "./Score.css";

const Score = () => {
  return (
    <p className="score">
      Очки:&nbsp;<span className="score__result">0</span>
    </p>
  );
};

export default Score;
