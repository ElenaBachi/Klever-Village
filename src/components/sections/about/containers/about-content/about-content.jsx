import React from "react";

import "./style.scss";

function AboutContent() {
  return (
    <div className="about__content">
      <h2 className="about__title">Klever Village</h2>

      <h3>поселок Вистино, Ленинградская область</h3>

      <p className="about__text">
        - новое, но уже любимое место для отдыха и релаксации.
      </p>

      <p className="about__text">
        Открытая недавно, мы приглашаем гостей в уютное убежище, окруженное
        живописной природой. Мы стремимся создать неповторимую атмосферу
        комфорта и заботы, предоставляя широкий выбор услуг и развлечений для
        незабываемого времяпровождения.
      </p>

      <p className="about__text">
        «Клевер» — место, где каждый гость находит свою порцию отдыха, гармонии
        и удовольствия.
      </p>
    </div>
  );
}

export default AboutContent;
