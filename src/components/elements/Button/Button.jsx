import { Link } from "react-router-dom";
import "./style.scss";

export default function Button({ link }) {
  return (
    <div className="details">
      <Link className="details__btn" to={link}>
        Подробнее
      </Link>
    </div>
  );
}
