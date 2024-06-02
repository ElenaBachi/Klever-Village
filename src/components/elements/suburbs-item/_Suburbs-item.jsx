import "./style.scss";

function SuburbsItem(props) {
  const { title, imgSrc } = props;

  return (
    <li className="suburbs__item">
      <div className="suburbs__img">
        <img src={imgSrc} alt={title} />
      </div>

      <h3>{title}</h3>
    </li>
  );
}

export default SuburbsItem;
