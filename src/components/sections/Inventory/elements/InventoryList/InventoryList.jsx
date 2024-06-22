import React from "react";
import { inventorys } from "../../../../../data";
import InventoryItem from "../InventoryItem/InventoryItem";

import "./style.scss";

export default function InventoryList() {
  const inventoryItems = inventorys.map((inventory) => {
    return <InventoryItem {...inventory} />;
  });

  return (
    <div className="inventorys__content accommodation">
      <ul className="accommodation-list">{inventoryItems}</ul>
    </div>
  );
}
