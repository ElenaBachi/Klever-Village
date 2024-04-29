import React from "react";

import AboutContent from "./containers/about-content/about-content";
import AboutGalery from "./containers/about-gallery/about-gallery";

import "./style.scss";

function About() {
  return (
    <section className="about">
      <div className="wrap">
        <AboutContent />
        <AboutGalery />
      </div>
    </section>
  );
}

export default About;
