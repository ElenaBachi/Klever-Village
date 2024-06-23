import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../../../../../data";
import "./style.scss";

export default function ReviewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <div className="review-item" key={review.id}>
              <p>{review.text}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
