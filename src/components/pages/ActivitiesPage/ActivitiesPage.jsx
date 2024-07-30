import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Activities from "../../sections/Activities/Activities";

export default function ActivitiesPage() {
  return (
    <>
      <Header />
      <Activities link={"/activities"} />
      <Footer />
    </>
  );
}
