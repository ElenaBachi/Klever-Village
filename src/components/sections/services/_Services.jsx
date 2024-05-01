import React from "react";
import ServicesList from "./containers/services-list/_Services-list";
import Button from "../../elements/button/_Button";

import "./style.scss";

function Services() {
  return (
    <section className="services">
      <div className="wrap">
        <h2 class="services__title">Чем заняться</h2>
        <ServicesList />
        <Button />
      </div>
    </section>
  );
}

export default Services;
