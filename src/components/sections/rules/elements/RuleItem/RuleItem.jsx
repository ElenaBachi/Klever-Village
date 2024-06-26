import "./style.scss";

export default function RuleItem(props) {
  const { title, description } = props;

  return (
    <li className="rules__item">
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}
