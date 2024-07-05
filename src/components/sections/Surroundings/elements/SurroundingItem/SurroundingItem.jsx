import React, { useRef } from "react";
import { ReactComponent as PlusIcon } from "../../../../../../public/icons/plus-icon.svg";

import "./style.scss";

export default function SurroundingItem({ item, onClick, isOpen }) {
  const { title, note, paragraphs, imgUrl } = item;
  const itemRef = useRef(null);

  return (
    <li className="accordion-item surrounding-item">
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
          <div className="surrounding-item__content">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
