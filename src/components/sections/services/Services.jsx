import React from "react";
import ServicesList from "./elements/ServicesList/ServicesList";
import Button from "../../elements/button/_Button";

import "./style.scss";

export default function Services() {
  return (
    <section className="services" id="activities">
      <div className="wrap">
        <h2 className="services__title">Чем заняться</h2>
        <ServicesList />
        <Button link={"/activities"} />
      </div>
    </section>
  );
}

