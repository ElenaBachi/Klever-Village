import React from "react";
import ActivityItemGallery from "../ActivityItemGallery/ActivityItemGallery";

import "./style.scss";

export default function ActivityItem(props) {
  const { id, title, text, imgSrc } = props;

  const isGallery = id == "bathhouse" || id == "grill" ? true : false;
  const isForKids = id == "forKids" ? true : false;

  return (
    <li className="activity__item">
      {isGallery ? (
        <ActivityItemGallery {...props} />
      ) : (
        <div className="galery">
          {isForKids ? (
            <picture>
              <source media="(min-width: 1200px)" srcSet={imgSrc[0]} />
              <source media="(min-width: 768px)" srcSet={imgSrc[1]} />
              <img src={imgSrc[2]} alt={title} />
            </picture>
          ) : (
            <img src={imgSrc[0]} alt={title} />
          )}
        </div>
      )}

      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </li>
  );
}
