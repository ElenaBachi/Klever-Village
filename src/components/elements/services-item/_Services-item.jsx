import "./style.scss";

function ServicesItem(props) {
  const { title, imgSrc } = props;

  return (
    <li className="services__item">
      <div className="services__img">
        <img src={imgSrc} alt={title} />
      </div>

      <h3>{title}</h3>
    </li>
  );
}

export default ServicesItem;
