import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import ActivitiesList from "../../elements/activities-list/_Activities-list";

export default function Activities() {
  return (
    <>
      <Header />
      <ActivitiesList link={"/activities"} />
      <Footer />
    </>
  );
}
