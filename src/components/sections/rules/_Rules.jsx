import React from "react";
import RulesList from "./containers/rules-list/_Rules-list";
import "./style.scss";

function Rules() {
  return (
    <section className="rules" id="rules">
      <div className="wrap">
        <h2 class="rules__title">Правила проживания</h2>

        <RulesList />
      </div>
    </section>
  );
}

export default Rules;
