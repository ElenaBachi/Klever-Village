import React from "react";
import { rules } from "../../../../../data";
import RuleItem from "../../../../elements/rule-item/_Rule-item";

import "./style.scss";

function RulesList() {
  const rulesItems = rules.map((rule) => {
    return <RuleItem {...rule} />;
  });

  return <ul className="rules__list">{rulesItems}</ul>;
}

export default RulesList;
