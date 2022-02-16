import React from "react";
import Slider from "react-slick";
import { SliderWrapper } from "./ChartSlider.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChartSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <h1>one</h1>
        </div>
        <div>
          <h1>two</h1>
        </div>
      </Slider>
    </SliderWrapper>
  );
};

export default ChartSlider;
