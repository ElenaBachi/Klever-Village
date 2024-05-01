import React from "react";
import { inventorys } from "../../../../../data";
import "./style.scss";
import AccommodationItem from "../../../../elements/accommodation-item/_Accommodation-item";

function AccomodationList() {
  const accommodationItems = inventorys.map((inventory) => {
    return <AccommodationItem {...inventory} />;
  });
  return <ul className="accommodation__list">{accommodationItems}</ul>;
}

export default AccomodationList;
