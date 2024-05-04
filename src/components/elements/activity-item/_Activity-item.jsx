import React from "react";
import "./style.scss";

export default function ActivityItem({ title, text, imgSrc }) {
  return (
    <li className="activity__item">
      <div className="galery">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}
