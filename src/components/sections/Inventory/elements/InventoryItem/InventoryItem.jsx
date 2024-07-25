import InventoryItemGallery from "../InventoryItemGallery/InventoryItemGallery";
import BookButton from "../../../../elements/BookButton/BookButton";

import "./style.scss";

export default function InventoryItem(props) {
  const { name, title, description, options, accommodationOptions, prices } =
    props;
  const isSmall = name === "small-house";

  const optionsList = options.map((option, index) => {
    return <li key={index}>{option}</li>;
  });

  // const accommodationOptionsList =
  //   accommodationOptions.length > 0
  //     ? accommodationOptions.map((option, index) => {
  //         return (
  //           <li key={index}>
  //             {option.title}
  //             <p className="accommodation__price">
  //               стоимость <span>{option.price} &#8381;</span> в сутки
  //             </p>
  //           </li>
  //         );
  //       })
  //     : "";

  return (
    <li className="accommodation__item">
      <InventoryItemGallery {...props} />

      <div className="accommodation__content">
        <h4>{title}</h4>
        <p className="room__description">{description}</p>
        <ul className="description">В домике есть: {optionsList}</ul>

        {isSmall ? (
          <>
            <ul className="description">
              Варианты размещения:
              {accommodationOptions
                ? accommodationOptions.map((option, index) => {
                    return <li key={index}>{option}</li>;
                  })
                : ""}
            </ul>
          </>
        ) : (
          <>
            {/* <p className="accommodation__price">
              Стоимость <span>{accommodationOptions.price} &#8381;</span> в
              сутки
            </p> */}
          </>
        )}

        <div className="accommodation__price">
          {prices.map((price) => {
            return (
              <p>
                {price.title} <span>{price.price} &#8381; в сутки</span>
              </p>
            );
          })}
        </div>

        <p className="accommodation__note">Завтрак включен в стоимость проживания</p>

        <BookButton top={0} />
      </div>
    </li>
  );
}
