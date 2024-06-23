import React from "react";
import "./style.scss";

export default function BurgerMenu({ onClick, isOpen }) {
  return (
    <button
      className={`header__menu-btn ${isOpen ? "opened" : ""}`}
      onClick={onClick}
    >
      <span className="bar-top"></span>
      <span className="bar-mid"></span>
      <span className="bar-bot"></span>
    </button>
  );
}
