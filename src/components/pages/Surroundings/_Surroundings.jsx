import React from "react";
import Header from "../../layout/header/_Header";
import Footer from "../../layout/footer/_Footer";
import SurroundingsList from "../../elements/surroundings-list/_Surroundings-list";
import { surroundings } from "../../../data";

function Surroundings() {
  return (
    <>
      <Header />
      <SurroundingsList surroundings={surroundings} />
      <Footer />
    </>
  );
}

export default Surroundings;
