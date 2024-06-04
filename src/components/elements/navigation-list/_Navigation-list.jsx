import React from "react";
import NavigationItem from "../navigation-item/_Navigation-item";
import { navigationItems } from "../../../data";
import "./style.scss";

export default function NavigationList({ onClick }) {
  const navItemsList = navigationItems.map((item) => {
    return <NavigationItem {...item} onClick={onClick} />;
  });

  return <ul className="main-nav__list">{navItemsList}</ul>;
}
