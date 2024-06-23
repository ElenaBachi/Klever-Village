import React from "react";
import SuburbsList from "./elements/SuburbsList/SuburbsList";
import Button from "../../elements/Button/Button";

import "./style.scss";

export default function Suburbs() {
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
