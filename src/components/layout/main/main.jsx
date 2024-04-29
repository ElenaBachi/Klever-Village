import React from "react";
import Greet from "../../sections/greet/Greet";
import About from "../../sections/about/About";
import Conditions from "../../sections/conditions/Conditions";
import Galery from "../../sections/galery/Galery";
import Services from "../../sections/services/Services";
import Map from "../../sections/map/Map";
import BackCall from "../../sections/back-call/Back-call";

import "./style.scss";

function Main() {
  return (
    <main>
      <Greet />
      <About />
      <Conditions />
      <Galery />
      <Services />
      <Map />
      <BackCall />
    </main>
  );
}

export default Main;
