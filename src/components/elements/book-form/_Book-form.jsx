import "./style.scss";

function Form() {
  return (
    <form action="" class="book__form">
      <div class="date-from">
        <p class="date-from__label">Заезд</p>
        <input type="date" class="date-from__input" value="" />
      </div>

      <div class="date-to">
        <p class="date-to__label">Выезд</p>
        <input type="date" class="date-to__input" value="" />
      </div>

      <div class="guests-qty">
        <p class="guests-qty__label">Количество гостей</p>
        <input
          type="text"
          class="guests-qty__input"
          value="2 взрослых, 0 детей"
        />
      </div>

      <div>
        <button class="book__btn">Найти номер</button>
      </div>
    </form>
  );
}

export default Form;
