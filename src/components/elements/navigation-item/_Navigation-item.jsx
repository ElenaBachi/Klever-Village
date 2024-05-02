import "./style.scss";

export default function NavigationItem({ name, href }) {
  return (
    <li className="main-nav__item">
      <a href={href}> {name} </a>
    </li>
  );
}
