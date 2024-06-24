import React from "react";
import Logo from "../../elements/Logo/Logo";
import "./style.scss";

export default function Greet() {
  return (
    <section className="greet">
      <div className="container">
        <Logo className="logo greet__logo" />

        <h1 className="greet__title">Klever Village </h1>
        <p className="greet__text">место для тех, кто любит</p>
        <div className="text-typing">
          <p className="greet__text"> быть ближе к природе</p>
        </div>
      </div>
    </section>
  );
}
