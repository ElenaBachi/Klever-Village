import "./style.scss";

export default function ServicesItem(props) {
  const { title, imgSrc } = props;

  return (
    <li className="services__item">
      <div className="services__img">
        <img src={imgSrc} alt={title} />
      </div>

      <p>{title}</p>
    </li>
  );
}
