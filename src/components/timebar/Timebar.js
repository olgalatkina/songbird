import React from "react";
import "./Timebar.css";

const Timebar = () => {
  return (
    <div className="timebar">
      <div className="timebar__line"></div>
      <div className="timebar__circle"></div>
      <div className="timebar__info">
        <p className="timebar__start">00:00</p>
        <p className="timebar__finish">24:00</p>
      </div>
    </div>
  );
};

export default Timebar;
