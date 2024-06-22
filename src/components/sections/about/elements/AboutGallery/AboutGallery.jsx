import React from "react";
import ImgSrc from "../../../../../assets/images/about-img-2.jpg";

import "./style.scss";

export default function AboutGalery() {
  return (
    <div className="about__galery">
      <img src={ImgSrc} alt="Размещение в малом доме" />
    </div>
  );
}
