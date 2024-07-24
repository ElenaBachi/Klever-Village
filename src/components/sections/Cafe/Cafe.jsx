import React from "react";
import { cafe } from "../../../data";
import "./style.scss";

export default function Cafe() {
  return (
    <section className="cafe" id="cafe">
      <div className="cafe-content">
        <h2>Кафе</h2>

        <div className="menu">
          <ul>
            {cafe.menu.map((item) => {
              return (
                <li>
                  <span className="title">{item.title}</span>
                  <span className="price">{item.price}</span>

                  <ul className="note">
                    {item.note ? item.note.map((item) => <li>{item}</li>) : ""}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="kids-menu">
          <h4>Детское меню</h4>
          <ul>
            {cafe.kidsMenu.map((item) => {
              return (
                <li>
                  <span lassName="title">{item.title}</span>
                  <span className="price">{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="working-hours">
          <h4>Время работы</h4>

          <ul>
            {cafe.workingHours.map((item) => {
              return (
                <li>
                  <span className="title">{item.title}</span>

                  <ul className="note">
                    {item.description
                      ? item.description.map((item) => <li>{item}</li>)
                      : ""}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="menu-extras">
          <p>Вне времени приема пищи гости могут купить выпечку, кофе/ чай</p>
        </div>
      </div>
    </section>
  );
}
