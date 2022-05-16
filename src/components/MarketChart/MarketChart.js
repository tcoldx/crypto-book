import React from "react";
import { PriceChart, VolumeChart, ChartLegend } from "../../components";
import {
  ChartContainer,
  ChartWrap,
  ChartLegendWrap,
  ChartContainerLoading,
} from "./MarketChart.styles";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const MarketChart = React.memo((props) => {
  const {
    priceData,
    volumeData,
    priceLabels,
    volumeLabels,
    currentPrice,
    currentVolume,
  } = useSelector((state) => state.market);

  const { currentCurrency } = useSelector((state) => state.global);

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
          <PriceChart
            dataLabel={priceLabels}
            dataPoint={priceData}
            style={{ position: "absolute", left: 0, top: 0 }}
          />
        )}
        {props.type === "volume" && (
          <VolumeChart dataLabel={volumeLabels} dataPoint={volumeData} />
        )}
      </ChartWrap>
    </ChartContainer>
  );
});

export default MarketChart;
