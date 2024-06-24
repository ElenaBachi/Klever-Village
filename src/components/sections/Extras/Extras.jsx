import React from "react";
import ExtrasList from "./elements/ExtrasList/ExtrasList";
import { extras } from "../../../data";

import "./style.scss";

export default function Extras() {
  return (
    <section className="extras" id="extras">
      <div className="wrap">
        <h2 className="extras__title">Дополнительные услуги</h2>

        <ExtrasList extras={extras} />
      </div>
    </section>
  );
}
