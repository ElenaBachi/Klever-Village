import React from "react";
import InventoryList from "./elements/InventoryList/InventoryList";

import "./style.scss";

export default function Inventory() {
  return (
    <section className="inventorys" id="inventorys">
      <div className="wrap">
        <h2 className="inventorys-title">Номерной фонд</h2>
        <h3>
          уютные коттеджи в современном скандинавском стиле <br /> вместимостью
          2-6 человек
        </h3>

        <InventoryList />
      </div>
    </section>
  );
}
