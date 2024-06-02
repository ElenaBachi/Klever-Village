import React from "react";
import SuburbsList from "./container/suburbs-list/_Suburbs-list";
import Button from "../../elements/button/_Button";

import "./style.scss";

function Suburbs() {
  return (
    <section className="suburbs" id="suburbs">
      <div className="wrap">
        <h2 className="suburbs__title">Окрестности</h2>
        <SuburbsList />
        <Button link={"/surroundings"} />
      </div>
    </section>
  );
}

export default Suburbs;
