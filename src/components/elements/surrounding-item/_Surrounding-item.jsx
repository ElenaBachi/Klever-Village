import React, { useRef } from "react";
import "./style.scss";
import { ReactComponent as PlusIcon } from "../../../assets/images/plus-icon.svg";

export default function SurroundingItem({ item, onClick, isOpen }) {
  const { title, note, description, imgUrl } = item;
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {title}
        <br />
        <span>{note}</span>

        <PlusIcon className={`plus-icon ${isOpen ? "active" : ""}`} />
      </button>

      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.clientHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          <p>{description}</p>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </li>
  );
}
