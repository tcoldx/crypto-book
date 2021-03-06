import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarketPrice } from "store/coins/actions";
import Slider from "react-slick";
import { SliderWrapper, ChartWrap, SliderButton } from "./ChartSlider.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PriceChart, VolumeChart, ChartLegend } from "components";
import { ClipLoader } from "react-spinners";

const ChartSlider = React.memo((props) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const { currentCurrency } = useSelector((state) => state.global);
  const {
    priceData,
    volumeData,
    priceLabels,
    volumeLabels,
    currentPrice,
    currentVolume,
  } = useSelector((state) => state.market);
  useEffect(() => {
    dispatch(getMarketPrice());
    // eslint-disable-next-line
  }, [currentCurrency]);

  if (props.isLoading) {
    return (
      <SliderWrapper>
        <ChartWrap>
          <ClipLoader color="#00FC2A" />
        </ChartWrap>
      </SliderWrapper>
    );
  }

  return (
    <SliderWrapper>
      <SliderButton left="65%" onClick={() => slider?.current?.slickPrev()}>
        &#60;
      </SliderButton>
      <SliderButton right="20px" onClick={() => slider?.current?.slickNext()}>
        &#62;
      </SliderButton>

      <Slider ref={slider} {...settings}>
        <ChartWrap>
          <ChartLegend type="Price" market={currentPrice} />
          <PriceChart dataLabel={priceLabels} dataPoint={priceData} />
        </ChartWrap>
        <ChartWrap>
          <ChartLegend type="Volume 24h" market={currentVolume} />
          <VolumeChart dataLabel={volumeLabels} dataPoint={volumeData} />
        </ChartWrap>
      </Slider>
    </SliderWrapper>
  );
});

export default ChartSlider;
