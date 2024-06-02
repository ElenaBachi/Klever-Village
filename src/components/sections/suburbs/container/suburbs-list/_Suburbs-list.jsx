import React from "react";
import SuburbsItem from "../../../../elements/suburbs-item/_Suburbs-item";
import { surroundingsMainPage } from "../../../../../data";
import "./style.scss";

function SuburbsList() {
  const suburbs = surroundingsMainPage.map((surrounding) => {
    return <SuburbsItem {...surrounding} />;
  });
  return <ul className="suburbs__list">{suburbs}</ul>;
}

export default SuburbsList;
