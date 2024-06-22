import React from "react";

import AboutContent from "./elements/AboutContent/AboutContent";
import AboutGalery from "./elements/AboutGallery/AboutGallery";

import "./style.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <AboutContent />
        <AboutGalery />
      </div>
    </section>
  );
}
