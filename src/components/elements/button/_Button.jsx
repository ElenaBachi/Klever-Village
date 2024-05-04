import { Link } from "react-router-dom";
import "./style.scss";

function Button() {
  return (
    <div className="details">
      <Link to="/activities">
        <button className="details__btn">Подробнее</button>
      </Link>
    </div>
  );
}

export default Button;
