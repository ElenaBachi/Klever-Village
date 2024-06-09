import React, { useState } from "react";
import "./style.scss";
import SurroundingItem from "../surrounding-item/_Surrounding-item";

export default function SurroundingsList({ surroundings }) {
  const [openId, setId] = useState(null);

  return (
    <section className="surroundings">
      <div className="wrap">
        <h2 className="surroundings__title">Окрестности</h2>
        <p className="surroundings__description">
          Исследуйте удивительные окрестности Klever Village. <br /> Здесь вы
          найдете информацию о достопримечательностях, маршрутах для прогулок и
          других интересных местах, которые стоит посетить во время вашего
          отдыха.
        </p>

        <ul className="accordion">
          {surroundings.map((item, id) => {
            return (
              <SurroundingItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                item={item}
                isOpen={id === openId}
                key={id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
