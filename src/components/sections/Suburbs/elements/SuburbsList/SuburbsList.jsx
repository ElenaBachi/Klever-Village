import React from "react";
import SuburbsItem from "../SuburbsItem/SuburbsItem";
import { surroundingsMainPage } from "../../../../../data";
import "./style.scss";

export default function SuburbsList() {
  const suburbs = surroundingsMainPage.map((surrounding, index) => {
    return <SuburbsItem {...surrounding} key={index}/>;
  });
  return <ul className="suburbs__list">{suburbs}</ul>;
}
