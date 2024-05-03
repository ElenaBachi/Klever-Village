import moment from "moment";
import "./style.scss";

function Form() {
  const currentDate = moment().format("YYYY-MM-DD");
  const futureDay = moment().add("days", 1).format("YYYY-MM-DD");

  return (
    <form action="" className="book__form">
      <div className="date-from">
        <p className="date-from__label">Заезд</p>
        <input type="date" className="date-from__input" value={currentDate} />
      </div>

      <div className="date-to">
        <p className="date-to__label">Выезд</p>
        <input type="date" className="date-to__input" value={futureDay} />
      </div>

      <div className="guests-qty">
        <p className="guests-qty__label">Количество гостей</p>
        <input
          type="text"
          className="guests-qty__input"
          value="2 взрослых, 0 детей"
        />
      </div>

      <div>
        <button className="book__btn">Найти номер</button>
      </div>
    </form>
  );
}

export default Form;
