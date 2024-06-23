import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import { navigationItems } from "../../../../../data";
import "./style.scss";

export default function NavigationList({ onClick }) {
  const navItemsList = navigationItems.map((item) => {
    return <NavigationItem {...item} onClick={onClick} key={item.name}/>;
  });

  return <ul className="main-nav__list">{navItemsList}</ul>;
}
