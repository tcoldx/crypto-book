import React, { useEffect } from "react";
import { PriceChart, VolumeChart, ChartLegend } from "../../components";
import {
  ChartContainer,
  ChartWrap,
  ChartLegendWrap,
  ChartContainerLoading,
} from "./MarketChart.styles";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getMarketPrice } from "../../store/coins/actions";

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

  const { currentCurrency } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getMarketPrice());
    // eslint-disable-next-line
  }, []);

  if (props.isLoading)
    return (
      <ChartContainerLoading>
        <ClipLoader width="100" color="#00FC2A" />
      </ChartContainerLoading>
    );
  return (
    <ChartContainer>
      <ChartLegendWrap>
        {props.type === "price" && (
          <ChartLegend
            type="BTC"
            market={currentPrice}
            currency={currentCurrency}
          />
        )}

        {props.type === "volume" && (
          <ChartLegend
            type="Volume 24h"
            market={currentVolume}
            currency={currentCurrency}
          />
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
