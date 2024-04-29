import React from "react";

import Logo from "../../elements/logo/Logo";
import Navigation from "../../elements/navigation/Navigation";
import Contacts from "../../elements/contacts/Contacts";
import BookButton from "../../elements/book-button/Book-button";

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
