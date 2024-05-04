import React, { useState } from "react";
import NavigationItem from "../navigation-item/_Navigation-item";
import { navigationItems } from "../../../data";
import Subnav from "../subnav/_Subnav";
import "./style.scss";

function Navigation({ isOpen, toggleMenu }) {
  const navItemsList = navigationItems.map((item) => {
    return !item.isSubnav ? (
      <NavigationItem {...item} onclick={toggleMenu} />
    ) : (
      ""
    );
  });

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">{navItemsList}</ul>
      {isOpen && <Subnav />}
    </nav>
  );
}

export default Navigation;
