import React from "react";
import NavigationItem from "../navigation-item/_Navigation-item";
import { navigationItems } from "../../../data";
import "./style.scss";

export default function NavigationList({ close }) {
  const navItemsList = navigationItems.map((item) => {
    return <NavigationItem {...item} onclick={close} />;
  });

  return <ul className="main-nav__list">{navItemsList}</ul>;
}
