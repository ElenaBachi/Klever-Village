import React from "react";

import "./style.scss";

function AboutContent() {
  return (
    <div className="about__content">
      <h2 className="about__title">Klever Village</h2>

      <h3>поселок Вистино, Ленинградская область</h3>

      <p className="about__text">
        - место для тех, кто ценит уединение и комфортный отдых на природе
      </p>

      <p className="about__text">
        Klever Village - комплекс уютных домиков, где каждый может насладиться
        тишиной, покоем и провести время на природе.
      </p>

      <p className="about__text">
        Дома предлагают гостям комфортное размещение 2-6 человек со всеми
        удобствами, интересные локации на территории, где каждый найдет занятие
        себе по душе. Klever Village расположен в уникальном месте с множеством
        красивых мест, таких как пляж Финского залива, заповедные эко-тропы и
        другие.
      </p>

      <p className="about__text">
        Мы всегда рады гостям, приезжающим к нам отдохнуть, а также тем, кто
        находится в командировке.
      </p>
    </div>
  );
}

export default AboutContent;
