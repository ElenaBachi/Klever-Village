import React from "react";
import ReviewsSlider from "../../elements/reviews-slider/_Reviews-slider";

import "./style.scss";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <h2 className="reviews__title">Ваши впечатления</h2>

        <ReviewsSlider />
      </div>
    </section>
  );
}

export default Reviews;
