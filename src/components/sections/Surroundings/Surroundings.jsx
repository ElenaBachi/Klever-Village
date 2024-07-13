import React, { useState } from "react";
import SurroundingsList from "./elements/SurroundingsList/SurroundingsList";

import "./style.scss";

export default function Surroundings() {
  const [openId, setId] = useState(null);

  return (
    <section className="surroundings">
      <div className="wrap">
        <h2 className="surroundings__title">Окрестности</h2>
        <p className="surroundings__description">
          Здесь вы найдете информацию о достопримечательностях, маршрутах для
          прогулок и других интересных местах, которые стоит посетить во время
          вашего отдыха.
        </p>

        <SurroundingsList />
      </div>
    </section>
  );
}
