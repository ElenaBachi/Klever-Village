import React from "react";
import Accomodation from "./containers/accommodation/accommodation";

import "./style.scss";

function Conditions() {
  return (
    <section className="conditions">
      <div className="wrap">
        <h2 class="conditions__title">Номерной фонд</h2>
        <h3>
          Мы постарались , чтобы у вас было все необходимое <br /> для
          комфортного проживания и отдыха
        </h3>

        <Accomodation />
      </div>
    </section>
  );
}

export default Conditions;
