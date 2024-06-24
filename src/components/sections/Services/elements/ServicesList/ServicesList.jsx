import React from "react";
import ServicesItem from "../ServicesItem/ServicesItem";
import { activitiesMainPage } from "../../../../../data";
import "./style.scss";

export default function ServicesList() {
  const services = activitiesMainPage.map((service, index) => {
    return <ServicesItem {...service} key={index} />;
  });
  return <ul className="services__list">{services}</ul>;
}
