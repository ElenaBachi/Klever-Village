import "./style.scss";
import LogoSrc from "../../../assets/images/logo-kv.svg?react";

function Logo() {
  return (
    <a href="#">
      <img
        className="logo greet__logo"
        src={LogoSrc}
        alt="Аренда загородных домов Клевер"
        width="128"
        height="45"
      ></img>
    </a>
  );
}

export default Logo;
