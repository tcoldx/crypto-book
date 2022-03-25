import React, { useEffect } from "react";
import { PriceChart, VolumeChart, ChartLegend } from "../../components";
import {
  ChartContainer,
  ChartWrap,
  ChartLegendWrap,
} from "./MarketChart.styles";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getChartData, getMarketPrice } from "../../store/coins/actions";

const MarketChart = (props) => {
  const dispatch = useDispatch();
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
  }, []);

  if (!currentVolume)
    return (
      <ChartContainer>
        <ClipLoader color="#00FC2A" />
      </ChartContainer>
    );
  return (
    <ChartContainer>
      <ChartLegendWrap>
        {props.type === "price" && (
          <ChartLegend type="Price" market={currentPrice} />
        )}

        {props.type === "volume" && (
          <ChartLegend type="Volume 24h" market={currentVolume} />
        )}
      </ChartLegendWrap>
      <ChartWrap>
        {props.type === "price" && (
          <PriceChart dataLabel={priceLabels} dataPoint={priceData} />
        )}
        {props.type === "volume" && (
          <VolumeChart dataLabel={volumeLabels} dataPoint={volumeData} />
        )}
      </ChartWrap>
    </ChartContainer>
  );
};

export default MarketChart;
