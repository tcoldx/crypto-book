import React from "react";
import { numberFormat } from "../../utils/numberFormat";
import { Header, Price, ChartDate, Container } from "./ChartLegend.styles";

const ChartLegend = (props) => {
  const date = new Date();
  const options = { day: "numeric", year: "numeric", month: "long" };
  return (
    <Container>
      <Header>{props.type}</Header>
      <Price>
        <span>{props?.currency?.toUpperCase()}</span>
        {numberFormat(props.market)}
      </Price>
      <ChartDate>{date.toLocaleDateString("en-US", options)}</ChartDate>
    </Container>
  );
};

export default ChartLegend;
