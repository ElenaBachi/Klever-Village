import React from "react";
import Greet from "../../sections/greet/_Greet";
import About from "../../sections/about/_About";
import Conditions from "../../sections/conditions/_Conditions";
import Galery from "../../sections/galery/_Galery";
import Services from "../../sections/services/_Services";
import Map from "../../sections/map/_Map";
import BackCall from "../../sections/back-call/_Back-call";

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
