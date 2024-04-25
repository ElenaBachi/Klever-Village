import "./style.scss";

function ServicesItem() {
  return (
    <li>
      <div className="services__list--img">
        <img
          src="/src/assets/images/house-icon-services.svg"
          alt="Размещение в домах"
        />
      </div>

      <ul className="services__offer">
        <li>Современные однокомнатные коттеджи с оборудованной кухней</li>
        <li>
          Имеется дополнительное спальное место «чердак» для детей до 12 лет
        </li>
        <li>Индивидуальная мангальная зона</li>
      </ul>
    </li>
  );
}

export default ServicesItem;
