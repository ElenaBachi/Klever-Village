import React from "react";
import Contacts from "../../elements/contacts/_Contacts";
import Logo from "../../elements/Logo/Logo";

import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Contacts />
        <Logo />
        <a
          href="https://yandex.ru/maps/-/CDrBNMoi"
          className="address"
          target="_blank"
        >
          Ижорская улица, 68 <br /> деревня Вистино, Ленинградская область
        </a>
      </div>
    </footer>
  );
}

export default Footer;
