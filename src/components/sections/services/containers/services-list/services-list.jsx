import React from "react";
import ServicesItem from "../../../../elements/services-item/services-item";

import "./style.scss";

function ServicesList() {
  return (
    <ul className="services__list">
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
    </ul>
  );
}

export default ServicesList;
