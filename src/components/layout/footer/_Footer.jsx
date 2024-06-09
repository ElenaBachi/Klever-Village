import React from "react";
import Contacts from "../../elements/contacts/_Contacts";
import Logo from "../../elements/logo/_Logo";

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
          поселок Вистино, Ленинградская область
        </a>
      </div>
    </footer>
  );
}

export default Footer;
