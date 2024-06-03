import React, { useState } from "react";
import Logo from "../../elements/logo/_Logo";
import Navigation from "../../elements/navigation/_Navigation";
import BookButton from "../../elements/book-button/_Book-button";

import "./style.scss";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((isOpen) => !isOpen);

  return (
    <header
      className={`header ${isOpen ? "active" : ""}`}
      onMouseOver={toggleMenu}
      onMouseOut={toggleMenu}
      toggleMenu={toggleMenu}
    >
      <Logo />
      <Navigation isOpen={isOpen} />
      <BookButton />
    </header>
  );
}

export default Header;
