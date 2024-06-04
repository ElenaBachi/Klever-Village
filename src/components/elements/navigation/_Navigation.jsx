import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import NavigationList from "../navigation-list/_Navigation-list";
import Contacts from "../contacts/_Contacts";
//import Subnav from "../subnav/_Subnav";
import BurgerMenu from "../burger-menu/_Burger-menu";
import "./style.scss";

export default function Navigation() {
  const [isOpen, setOpen] = useState();
  const onClick = () => setOpen(!isOpen);
  const navRef = useRef(null);
  useOnClickOutside(navRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  return (
    <div className="menu-container">
      <nav className={`main-nav ${isOpen ? "active" : ""}`} ref={navRef}>
        <NavigationList onClick={onClick} />
        <Contacts />
        {/* {isOpen && <Subnav />} */}
      </nav>
      <BurgerMenu onClick={onClick} isOpen={isOpen} />
    </div>
  );
}
