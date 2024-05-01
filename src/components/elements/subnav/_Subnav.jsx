import "./style.scss";

function Subnav() {
  return (
    <ul className="subnav">
      <li className="main-nav__item">
        <a href="">услуги</a>
      </li>
      <li className="main-nav__item">
        <a href="">условия и стоимость {"\n"} проживания</a>
      </li>
    </ul>
  );
}

export default Subnav;
