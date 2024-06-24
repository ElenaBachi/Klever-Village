import "./style.scss";

export default function RuleItem(props) {
  const { title, description } = props;

  return (
    <li className="rules__item">
      <span>{title}</span>
      <p>{description}</p>
    </li>
  );
}
