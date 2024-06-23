import "./style.scss";
import { NavHashLink } from "react-router-hash-link";

export default function NavigationItem({ name, href, onClick }) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset });
  };

  return (
    <li className="main-nav__item" onClick={onClick}>
      <NavHashLink
        to={href}
        smooth
        activeclassname="selected"
        scroll={(el) => scrollWithOffset(el)}
      >
        {name}
      </NavHashLink>
    </li>
  );
}
