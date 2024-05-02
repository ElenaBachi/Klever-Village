import React, { useRef } from "react";
import "./style.scss";
import { ReactComponent as PlusIcon } from "../../../assets/images/plus-icon.svg";

export default function ExtraItem({ item, onClick, isOpen }) {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {item.title}
        <PlusIcon className={`plus-icon ${isOpen ? "active" : ""}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.clientHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {item.description}
        </div>
      </div>
    </li>
  );
}
