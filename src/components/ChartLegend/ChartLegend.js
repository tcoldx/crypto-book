import React from "react";
import { numberFormat } from "utils/numberFormat";
import { Header, Price, ChartDate } from "./ChartLegend.styles";

const ChartLegend = (props) => {
  const date = new Date();
  const options = { day: "numeric", year: "numeric", month: "long" };
  return (
    <div>
      <Header>{props.type}</Header>
      <Price>${numberFormat(props.market)}</Price>
      <ChartDate>{date.toLocaleDateString("en-US", options)}</ChartDate>
    </div>
  );
};

export default ChartLegend;
