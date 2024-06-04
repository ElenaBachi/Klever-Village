import BookButton from "../book-button/_Book-button";
import "./style.scss";

export default function AccommodationItem(props) {
  const { name, title, description, options, accommodationOptions, imgSrc } =
    props;
  const isSmall = name === "small-house";
  const isMedium = name === "medium-house";
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
        {isSmall ? (
          <>
            <img src={imgSrc} alt="" />
          </>
        ) : isMedium ? (
          <>
            <img src={imgSrc} alt="" />
          </>
        ) : (
          <>
            <img src={imgSrc} alt="" />
          </>
        )}
      </div>

      <div className="accommodation__content room">
        <h4>{title}</h4>
        <p className="room__description">{description}</p>
        <ul className="description">В домике есть: {optionsList}</ul>

        {isSmall ? (
          <>
            <ul className="description">
              Варианты размещения:
              {accommodationOptionsList}
            </ul>
          </>
        ) : (
          <>
            <p className="accommodation__price">
              Стоимость <span>{accommodationOptions.price} &#8381;</span> в
              сутки
            </p>
          </>
        )}

        <BookButton />
      </div>
    </li>
  );
}
