import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import NavigationList from "./elements/NavigationList/NavigationList";
import Contacts from "../../elements/Contacts/Contacts";
import BurgerMenu from "../../elements/BurgerMenu/BurgerMenu";
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
      </nav>
      <BurgerMenu onClick={onClick} isOpen={isOpen} />
    </div>
  );
}
