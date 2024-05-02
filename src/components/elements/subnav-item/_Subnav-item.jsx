import "./style.scss";

export default function SubnavItem({ name, href }) {
  return (
    <li className="main-nav__item subnav__item">
      <a href={href}>{name}</a>
    </li>
  );
}
