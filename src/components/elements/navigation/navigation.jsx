import Subnav from "../subnav/subnav";
import "./style.scss";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item main-nav__item--about">
          <a href="">о нас</a>
          <Subnav />
        </li>
        <li className="main-nav__item">
          <a href="">как нас найти</a>
        </li>
        <li className="main-nav__item">
          <a href="">обратный звонок</a>
        </li>
        <li className="main-nav__item">
          <a href="">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
