import { Link } from "react-router-dom";
import LogoSrc from "../../../../public/images/logo-kv.svg?react";
import "./style.scss";

export default function Logo() {
  return (
    <Link to={"/"}>
      <img
        className="logo greet__logo"
        src={LogoSrc}
        alt="Аренда загородных домов Клевер"
        width="128"
        height="45"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      ></img>
    </Link>
  );
}
