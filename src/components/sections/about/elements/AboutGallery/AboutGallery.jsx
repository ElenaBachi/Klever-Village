import React from "react";
import ImgSrc from "../../../../../../public/images/about-img.jpg";

import "./style.scss";

export default function AboutGalery() {
  return (
    <div className="about__galery">
      <img src={ImgSrc} alt="Размещение в малом доме" />
    </div>
  );
}
