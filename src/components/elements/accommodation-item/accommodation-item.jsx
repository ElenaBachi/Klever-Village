import Button from "../book-button/book-button";
import "./style.scss";

function AccommodationItem() {
  return (
    <li className="accommodation__item">
      <div className="accommodation__galery">
        <img src="/src/assets/images/conditions-galery-1.jpg" alt="" />
      </div>

      <div className="accommodation__content">
        <h4>Малый дом</h4>

        <ul className="description">
          <li>
            просторные и функциональные интерьеры, обеспечивающие уют во время
            Вашего пребывания
          </li>
          <li>современное оборудование и удобства для Вашего комфорта</li>
          <li>
            из окна открывается вид на живописные пейзажи, позволяя наслаждаться
            красотой окружающей природы
          </li>
        </ul>

        <p className="accommodation__price">
          Стоимость от <span>6 000 &#8381;</span> в сутки
        </p>

        <Button />
      </div>
    </li>
  );
}

export default AccommodationItem;
