import React, { useState } from "react";
import NavigationList from "../navigation-list/_Navigation-list";
import Contacts from "../contacts/_Contacts";
//import Subnav from "../subnav/_Subnav";
import BurgerMenu from "../burger-menu/_Burger-menu";
import "./style.scss";

export default function Navigation() {
  const [isOpen, setOpen] = useState();
  const onclick = () => setOpen(!isOpen);
  const close = () => setOpen(false);

  return (
    <div className="menu-container">
      <nav className={`main-nav ${isOpen ? "active" : ""}`}>
        <NavigationList onClick={close} />
        <Contacts />
        {/* {isOpen && <Subnav />} */}
      </nav>
      <BurgerMenu onClick={onclick} />
    </div>
  );
}
