import "./style.scss";
import { Link } from "react-scroll";

export default function NavigationItem({ isSubnav, name, href }) {
  return (
    <li className={`main-nav__item ${isSubnav ? "subnav__item" : ""}`}>
      <Link to={href} spy={true} smooth={true} offset={-80} duration={200}>
        {name}
      </Link>
    </li>
  );
}
