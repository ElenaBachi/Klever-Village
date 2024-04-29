import React from "react";

import Logo from "../../elements/logo/logo";
import Navigation from "../../elements/navigation/navigation";
import Contacts from "../../elements/contacts/contacts";
import Button from "../../elements/book-button/book-button";

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Logo />
        <Navigation />
        <Contacts />
        <Button />
      </div>
    </header>
  );
}

export default Header;
