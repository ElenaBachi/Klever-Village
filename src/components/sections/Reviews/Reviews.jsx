import React from "react";
import ReviewsSlider from "./elements/ReviewsSlider/ReviewsSlider";

import "./style.scss";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <h2 className="reviews__title">Ваши впечатления</h2>

        <ReviewsSlider />
      </div>
    </section>
  );
}
