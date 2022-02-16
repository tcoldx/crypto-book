import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarketPrice, getChartData } from "store/coins/actions";
import Slider from "react-slick";
import { SliderWrapper, ChartWrap } from "./ChartSlider.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PriceChart, VolumeChart, ChartLegend } from "components";

const ChartSlider = (props) => {
  const settings = {
    dots: true,
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
    dispatch(getChartData());
    dispatch(getMarketPrice());
    // eslint-disable-next-line
  }, [currentCurrency]);

  return (
    <SliderWrapper>
      <Slider {...settings}>
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
};

export default ChartSlider;
