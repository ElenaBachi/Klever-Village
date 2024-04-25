import React from "react";
import Greet from "../../sections/greet/greet";
import About from "../../sections/about/about";
import Conditions from "../../sections/conditions/conditions";
import Services from "../../sections/services/services";
import Map from "../../sections/map/map";
import BackCall from "../../sections/back-call/back-call";

import "./style.scss";

function Main() {
  return (
    <main>
      <Greet />
      <About />
      <Conditions />
      <Services />
      <Map />
      <BackCall />
    </main>
  );
}

export default Main;
