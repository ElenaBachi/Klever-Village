import React from "react";
import Greet from "../../sections/greet/_Greet";
import About from "../../sections/about/_About";
import Conditions from "../../sections/conditions/_Conditions";
import Services from "../../sections/services/_Services";
import Rules from "../../sections/rules/_Rules";
import Extras from "../../sections/extras/_Extras";
import Galery from "../../sections/galery/_Galery";
import Suburbs from "../../sections/suburbs/_Suburbs";
// import Map from "../../sections/map/_Map";
// import BackCall from "../../sections/back-call/_Back-call";
import Reviews from "../../sections/reviews/_Reviews";

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
      <Suburbs />
      {/* <Map />
      <BackCall /> */}
      <Reviews />
    </main>
  );
}

export default Main;
