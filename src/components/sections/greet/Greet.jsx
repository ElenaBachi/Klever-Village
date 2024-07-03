import React from "react";
import Logo from "../../elements/Logo/Logo";
import "./style.scss";

export default function Greet() {
  return (
    <section className="greet" id="greet">
      <div className="container">
        <Logo className="logo greet__logo" />

        <h1 className="greet__title">Klever Village </h1>
        <div className="text-typing">
          <p className="greet__text"> подальше от города - поближе к себе</p>
        </div>
      </div>
    </section>
  );
}
