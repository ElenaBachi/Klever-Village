import React from "react";
import ServicesList from "./containers/services-list/services-list";
import Button from "../../elements/book-button/book-button";

import "./style.scss";

function Services() {
  return (
    <section className="services">
      <div className="wrap">
        <h2 class="services__title">Мы предлагаем</h2>

        <p class="services__text">
          разнообразные возможности для комфортного проживания <br /> и
          активного времяпрепровождения
        </p>

        <ServicesList />

        <Button />
      </div>
    </section>
  );
}

export default Services;
