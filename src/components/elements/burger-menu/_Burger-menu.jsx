import React, { useState } from "react";
import "./style.scss";

export default function BurgerMenu({ onClick }) {
  const [isActive, setActive] = useState();

  return (
    <button
      className={`header__menu-btn ${isActive ? "opened" : ""}`}
      onClick={() => {
        onClick();
        setActive(!isActive);
      }}
    >
      <span className="bar-top"></span>
      <span className="bar-mid"></span>
      <span className="bar-bot"></span>
    </button>
  );
}
