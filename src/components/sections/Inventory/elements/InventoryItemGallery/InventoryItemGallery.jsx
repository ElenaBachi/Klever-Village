import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.scss";

export default function InventoryItemGallery({ imgSrcs }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="accommodation__galery">
      <div className="slider-container">
        <Slider {...settings}>
          {imgSrcs.map((src) => {
            return (
              <div
                className="img-container"
                style={{
                  background: `url(${src})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  border: "1px solid red",
                }}
              >
                <img src={src} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
