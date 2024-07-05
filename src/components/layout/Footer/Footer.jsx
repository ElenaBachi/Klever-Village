import React from "react";
import Contacts from "../../elements/Contacts/Contacts";
import Logo from "../../elements/Logo/Logo";

import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Contacts />
        <Logo />
        <a href="tel:+79812710703" className="tel-num">
          Позвоните нам <br /> +7 981 271-07-03
        </a>

        <a
          href="https://yandex.ru/maps/-/CDrBNMoi"
          className="address"
          target="_blank"
        >
          Ижорская улица, 68
          <span className="enter"> деревня Вистино</span>
          <span className="enter"> Ленинградская область</span>
        </a>
      </div>
    </footer>
  );
}
