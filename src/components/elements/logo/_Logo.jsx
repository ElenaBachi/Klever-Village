import { Link } from "react-router-dom";
import LogoSrc from "../../../assets/images/logo-kv.svg?react";
import "./style.scss";

function Logo() {
  return (
    <Link to={"/"}>
      <img
        className="logo greet__logo"
        src={LogoSrc}
        alt="Аренда загородных домов Клевер"
        width="128"
        height="45"
      ></img>
    </Link>
  );
}

export default Logo;
