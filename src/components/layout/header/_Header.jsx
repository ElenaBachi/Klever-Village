import React, { useState } from "react";
import Logo from "../../elements/logo/_Logo";
import Navigation from "../../elements/navigation/_Navigation";
import Contacts from "../../elements/contacts/_Contacts";
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
    >
      <Logo />
      <Navigation isOpen={isOpen} />
      <Contacts />
      <BookButton />
    </header>
  );
}

export default Header;
