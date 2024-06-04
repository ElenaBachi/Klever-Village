import React, { useState } from "react";
import Logo from "../../elements/logo/_Logo";
import Navigation from "../../elements/navigation/_Navigation";
import BookButton from "../../elements/book-button/_Book-button";

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
