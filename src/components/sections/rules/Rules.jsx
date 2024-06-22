import React from "react";
import RulesList from "./elements/RulesList/RulesList";
import "./style.scss";

export default function Rules() {
  return (
    <section className="rules" id="rules">
      <div className="wrap">
        <h2 className="rules__title">Правила проживания</h2>

        <RulesList />
      </div>
    </section>
  );
}
