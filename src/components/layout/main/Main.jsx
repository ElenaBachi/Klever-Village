import React from "react";
import Greet from "../../sections/Greet/Greet";
import About from "../..//sections/About/About";
import Inventory from "../../sections/Inventory/Inventory";
import Cafe from "../../sections/Cafe/Cafe";
import Services from "../../sections/Services/Services";
import Rules from "../../sections/Rules/Rules";
import Extras from "../../sections/Extras/Extras";
import Galery from "../../sections/Galery/Galery";
import Suburbs from "../../sections/Suburbs/Suburbs";
import Reviews from "../../sections/Reviews/Reviews";

import "./style.scss";

function Main() {
  return (
    <main className="main">
      <Greet />
      <About />
      <Inventory />
      <Cafe />
      <Services />
      <Rules />
      <Extras />
      <Galery />
      <Suburbs />
      <Reviews />
    </main>
  );
}

export default Main;
