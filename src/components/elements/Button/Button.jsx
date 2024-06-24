import { Link } from "react-router-dom";
import "./style.scss";

export default function Button({ link }) {
  return (
    <div className="details">
      <Link to={link}>
        <button className="details__btn">Подробнее</button>
      </Link>
    </div>
  );
}
