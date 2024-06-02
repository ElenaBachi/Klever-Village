import React from "react";
import Header from "../../layout/header/_Header";
import Footer from "../../layout/footer/_Footer";
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
