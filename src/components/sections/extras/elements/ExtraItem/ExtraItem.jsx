import React, { useRef } from "react";
import "./style.scss";
import { ReactComponent as PlusIcon } from "../../../../../../public/icons/plus-icon.svg";

export default function ExtraItem({ extra, onClick, isOpen }) {
  const { title, items } = extra;
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        {title}
        <PlusIcon className={`plus-icon ${isOpen ? "active" : ""}`} />
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.clientHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          <ul className="extras-list">
            {items.map((item, index) => {
              return (
                <li className="extras-item" key={index}>
                  <p>{item.name}</p>
                  <span>{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}
