import "./style.scss";

export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={() => setActive(false)}>
          Закрыть
        </button>
        {children}
      </div>
    </div>
  );
}
