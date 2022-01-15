import React, { useEffect } from "react";
import { PriceChart, VolumeChart } from "components";
import { ChartContainer } from "./MarketChart.styles";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "store/coins/actions";

const MarketChart = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  return (
    <ChartContainer>
      <div>
        {props.type === "price" && <PriceChart />}
        {props.type === "volume" && <VolumeChart />}
      </div>
    </ChartContainer>
  );
};

export default MarketChart;
