import React from "react";
import Accomodation from "./containers/accommodation/Accommodation";

import "./style.scss";

function Conditions() {
  return (
    <section className="conditions">
      <div className="wrap">
        <h2 class="conditions__title">Номерной фонд</h2>
        <h3>
          уютные коттеджи в современном скандинавском стиле <br /> вместимостью
          2-6 человек
        </h3>

        <Accomodation />
      </div>
    </section>
  );
}

export default Conditions;
