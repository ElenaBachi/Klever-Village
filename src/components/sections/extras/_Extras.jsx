import React from "react";
import ExtrasList from "../../elements/extras-list/_Extras-list";
import { extras } from "../../../data";

import "./style.scss";

function Extras() {
  return (
    <section className="extras" id="extras">
      <div className="wrap">
        <h2 className="extras__title">Дополнительные услуги</h2>

        <ExtrasList extras={extras} />
      </div>
    </section>
  );
}

export default Extras;
