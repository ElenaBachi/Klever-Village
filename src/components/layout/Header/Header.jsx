import React from "react";
import Logo from "../../elements/Logo/Logo";
import Navigation from "../../sections/Navigation/Navigation";
import BookButton from "../../elements/BookButton/BookButton";

import "./style.scss";

function Header({href}) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <BookButton href={href} top={300} />
    </header>
  );
}

export default Header;
