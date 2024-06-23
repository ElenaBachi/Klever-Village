import React from "react";
import { rules } from "../../../../../data";
import RuleItem from "../RuleItem/RuleItem";

import "./style.scss";

export default function RulesList() {
  const rulesItems = rules.map((rule, index) => {
    return <RuleItem {...rule} key={index}/>;
  });

  return <ul className="rules__list">{rulesItems}</ul>;
}
