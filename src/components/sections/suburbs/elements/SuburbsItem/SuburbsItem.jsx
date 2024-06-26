import "./style.scss";

export default function SuburbsItem(props) {
  const { title, imgSrc } = props;

  return (
    <li className="suburbs__item">
      <div className="suburbs__img">
        <img src={imgSrc} alt={title} />
      </div>

      <p>{title}</p>
    </li>
  );
}
