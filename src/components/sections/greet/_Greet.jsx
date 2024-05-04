import React from "react";
import Logo from "../../elements/logo/_Logo";
import Form from "../../elements/book-form/_Book-form";
import "./style.scss";

function Greet() {
  return (
    <section className="greet">
      <Logo className="logo greet__logo" />

      <h1 className="greet__title">Klever Village - </h1>
      <div className="greet__text">
        <p>место для тех, кто любит</p> &nbsp;
        <p className="text-typing"> быть ближе к природе</p>
      </div>

      <Form />
    </section>
  );
}

export default Greet;
