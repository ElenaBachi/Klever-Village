import React from "react";
import SurroundingsList from "../../elements/surroundings-list/_Surroundings-list";
import { surroundings } from "../../../data";

import "./style.scss";

function Surroundings() {
  return (
    <section className="surroundings" id="surroundings">
      <div className="wrap">
        <h2 class="surroundings__title">Окрестности</h2>

        <SurroundingsList surroundings={surroundings} />
      </div>
    </section>
  );
}

export default Surroundings;
