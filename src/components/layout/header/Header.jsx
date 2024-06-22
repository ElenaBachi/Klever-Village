import React from "react";
import Logo from "../../elements/Logo/Logo";
import Navigation from "../../elements/navigation/_Navigation";
import BookButton from "../../elements/BookButton/BookButton";

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <BookButton />
    </header>
  );
}

export default Header;
