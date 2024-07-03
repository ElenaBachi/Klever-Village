import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

export default function ActivityItemGallery({ imgSrc }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="galery">
      <div className="slider-container">
        <Slider {...settings}>
          {imgSrc.map((src, index) => {
            return (
              <div className="img-container" key={index}>
                <img src={src} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
