import React from "react";
import "./Header.css";
import Score from "../score/Score";
import Pagination from "../pagination/Pagination";

const Header = () => {
  return (
    <header className="header">
      <h1 className="visually-hidden">Голоса птиц</h1>
      <div className="logo__line">
        <div className="logo"></div>
        <Score />
      </div>
      <Pagination />
    </header>
  );
};

export default Header;
