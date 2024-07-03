import "./style.scss";
import { NavHashLink } from "react-router-hash-link";

export default function BookButton() {
  return (
    <div className="book">
      <NavHashLink className="book__btn" to={"/#greet"} smooth>
        Забронировать
      </NavHashLink>
    </div>
  );
}
