import React from "react";
import ReviewsSlider from "../../elements/reviews-slider/_Reviews-slider";

import "./style.scss";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <h2 class="reviews__title">Отзывы</h2>

        <ReviewsSlider />
      </div>
    </section>
  );
}

export default Reviews;
