import React from "react";
import AccomodationItem from "../../../../elements/accommodation-item/accommodation-item";

import "./style.scss";

function AccomodationList() {
  return (
    <ul className="accommodation__list">
      <AccomodationItem />
      <AccomodationItem />
      <AccomodationItem />
    </ul>
  );
}

export default AccomodationList;
