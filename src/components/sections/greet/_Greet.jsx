import React from "react";
import Logo from "../../elements/logo/_Logo";
import Form from "../../elements/book-form/_Book-form";
import "./style.scss";

function Greet() {
  return (
    <section className="greet">
      <Logo className="logo greet__logo" />

      <h1 className="greet__title">Klever Village - </h1>
      <p className="greet__text">
        место для тех, кто любит быть ближе к природе
      </p>

      <Form />
    </section>
  );
}

export default Greet;