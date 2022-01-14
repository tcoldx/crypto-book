import React from "react";
import { PriceChart, VolumeChart } from "components";
import { ChartContainer } from "./MarketChart.styles";

const MarketChart = (props) => {
  return (
    <ChartContainer>
      <div>{props.type === "price" && <PriceChart />}</div>
    </ChartContainer>
  );
};

export default MarketChart;
