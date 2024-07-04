import React from "react";
import ActivityItemGallery from "../ActivityItemGallery/ActivityItemGallery";

import "./style.scss";

export default function ActivityItem(props) {
  const { id, title, text, imgSrc } = props;

  const isGallery = id == "bathhouse" || id == "grill";

  return (
    <li className="activity__item">
      {isGallery ? (
        <ActivityItemGallery {...props} />
      ) : (
        <div className="galery">
          <img src={imgSrc[0]} alt={title} />
        </div>
      )}

      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}
