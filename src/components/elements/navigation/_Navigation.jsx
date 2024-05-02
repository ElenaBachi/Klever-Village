import React, { useState } from "react";
import NavigationItem from "../navigation-item/_Navigation-item";
import { navigationItems } from "../../../data";
import Subnav from "../subnav/_Subnav";
import "./style.scss";

function Navigation() {
  const [isVisibleSubmenu, setIsVisibleSubmenu] = useState(false);
  const toggleMenu = () => setIsVisibleSubmenu((isOpen) => !isOpen);

  const navItemsList = navigationItems.map((item) => {
    return <NavigationItem {...item} />;
  });

  return (
    <nav className="main-nav">
      <ul
        className="main-nav__list"
        onMouseEnter={toggleMenu}
        onMouseUp={toggleMenu}
      >
        {navItemsList}
      </ul>
      {isVisibleSubmenu && <Subnav />}
    </nav>
  );
}

export default Navigation;
