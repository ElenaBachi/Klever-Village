import "./style.scss";

export default function BookButton({top, href}) {
  const scrollToTop = (top) => {
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="book">
      <a className="book__btn" href={href} onClick={() => scrollToTop(top)}>
        Забронировать
      </a>
    </div>
  );
}
