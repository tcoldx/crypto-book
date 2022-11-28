import React from "react";
import { numberFormat } from "../../utils/numberFormat";
import { Header, Price, ChartDate, Container } from "./ChartLegend.styles";
import { useSelector } from "react-redux";

const ChartLegend = (props) => {
  const {currentCurrency} = useSelector(state => state.global);
  const date = new Date();
  const options = { day: "numeric", year: "numeric", month: "long" };
  return (
    <Container>
      <Header>{props.type}</Header>
      <Price>
        <div className="currency">{props.currency ? props.currency.toUpperCase() : currentCurrency.toUpperCase()}</div>
        {numberFormat(props.market)}
      </Price>
      <ChartDate>{date.toLocaleDateString("en-US", options)}</ChartDate>
    </Container>
  );
};

export default ChartLegend;
