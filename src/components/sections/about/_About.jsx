import React from "react";

import AboutContent from "./containers/about-content/_About-content";
import AboutGalery from "./containers/about-gallery/_About-gallery";

import "./style.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <AboutContent />
        <AboutGalery />
      </div>
    </section>
  );
}

export default About;
