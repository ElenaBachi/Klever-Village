import React from "react";
import BigHouseSrc from "../../../../../assets/images/big-house.jpg";

import "./style.scss";

function AboutGalery() {
  return (
    <div className="about__galery">
      <img src={BigHouseSrc} alt="Размещение в малом доме" />
    </div>
  );
}

export default AboutGalery;
