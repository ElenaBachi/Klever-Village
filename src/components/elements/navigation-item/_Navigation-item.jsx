import "./style.scss";
import { Link } from "react-scroll";

export default function NavigationItem({ name, href, close }) {
  return (
    <li className="main-nav__item" onClick={close}>
      <Link to={href} spy={true} smooth={true} offset={-70} duration={300}>
        {name}
      </Link>
    </li>
  );
}
