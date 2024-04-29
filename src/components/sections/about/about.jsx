import React from "react";

import AboutContent from "./containers/about-content/About-content";
import AboutGalery from "./containers/about-gallery/About-gallery";

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
