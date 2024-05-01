import React from "react";

import Logo from "../../elements/logo/_Logo";
import Navigation from "../../elements/navigation/_Navigation";
import Contacts from "../../elements/contacts/_Contacts";
import BookButton from "../../elements/book-button/_Book-button";

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Logo />
        <Navigation />
        <Contacts />
        <BookButton />
      </div>
    </header>
  );
}

export default Header;
