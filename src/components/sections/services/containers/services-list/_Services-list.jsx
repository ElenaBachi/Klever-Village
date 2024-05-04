import React from "react";
import ServicesItem from "../../../../elements/services-item/_Services-item";
import { activitiesMainPage } from "../../../../../data";
import "./style.scss";

function ServicesList() {
  const services = activitiesMainPage.map((service) => {
    return <ServicesItem {...service} />;
  });
  return <ul className="services__list">{services}</ul>;
}

export default ServicesList;
