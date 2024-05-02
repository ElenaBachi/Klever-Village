import BookButton from "../book-button/_Book-button";
import "./style.scss";

export default function AccommodationItem(props) {
  const { name, title, description, options, accommodationOptions } = props;
  const isSmall = name === "small house";
  const optionsList = options.map((option) => {
    return <li>{option}</li>;
  });

  const accommodationOptionsList =
    accommodationOptions.length > 0
      ? accommodationOptions.map((option) => {
          return (
            <li>
              {option.bed}
              <p className="accommodation__price">
                стоимость <span>{option.price} &#8381;</span> в сутки
              </p>
            </li>
          );
        })
      : "";

  return (
    <li className="accommodation__item">
      <div className="accommodation__galery">
        <img src="src/assets/images/conditions-galery-1.jpg" alt="" />
      </div>

      <div className="accommodation__content room">
        <h4>{title}</h4>
        <p className="room__description">{description}</p>

        {isSmall ? (
          <>
            <p>Во всех домиках есть {optionsList}</p>
            <ul className="description">
              Варианты размещения:
              {accommodationOptionsList}
            </ul>
          </>
        ) : (
          <>
            <ul className="description">В домике есть: {optionsList}</ul>
            <p className="accommodation__price">
              <span>Стоимость {accommodationOptions.price} &#8381;</span> в
              сутки
            </p>
          </>
        )}

        <BookButton />
      </div>
    </li>
  );
}
