import { cafe } from "../../../../../data";
import ScrollIcon from "../../../../elements/ScrollIcon/ScrollIcon";

import "./style.scss";

export default function CafeContent() {
  return (
    <>
      <div className="cafe-content">
        <ScrollIcon />

        <h2>Кафе</h2>

        <div className="menu">
          <ul>
            {cafe.menu.map((item, index) => {
              return (
                <li key={index}>
                  <span className="title">{item.title}</span>
                  <span className="price">{item.price}</span>

                  {item.note ? (
                    <ul className="note">
                      {item.note.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="kids-menu">
          <h4>Детское меню</h4>
          <ul>
            {cafe.kidsMenu.map((item, index) => {
              return (
                <li key={index}>
                  <span className="title">{item.title}</span>
                  <span className="price">{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="menu-extras">
          <p>Вне времени приема пищи гости могут купить выпечку, кофе / чай</p>

          <ul>
            {cafe.extras.map((item, index) => {
              return (
                <li key={index}>
                  <span className="title">{item.title}</span>
                  <span className="price">{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
