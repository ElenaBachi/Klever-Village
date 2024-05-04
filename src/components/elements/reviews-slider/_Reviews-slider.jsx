import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../../../data";
import "./style.scss";

export default function QuotsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div className="review-item">
              <p>{review.text}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
