import React from "react";
import Greet from "../../sections/greet/_Greet";
import About from "../../sections/about/_About";
import Conditions from "../../sections/conditions/_Conditions";
import Services from "../../sections/services/_Services";
import Rules from "../../sections/rules/_Rules";
import Extras from "../../sections/extras/_Extras";
import Galery from "../../sections/galery/_Galery";
import Surroundings from "../../sections/surroundings/_Surroundings";
// import Map from "../../sections/map/_Map";
// import BackCall from "../../sections/back-call/_Back-call";

import "./style.scss";

function Main() {
  return (
    <main>
      <Greet />
      <About />
      <Conditions />
      <Services />
      <Rules />
      <Extras />
      <Galery />
      <Surroundings />
      {/* <Map />
      <BackCall /> */}
    </main>
  );
}

export default Main;
