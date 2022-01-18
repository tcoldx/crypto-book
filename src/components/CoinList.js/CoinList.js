import React from "react";
import { Row } from "./CoinList.styles";
const CoinList = ({
  rank,
  name,
  symbol,
  price,
  hourPercentage,
  daysPercentage,
  percentage,
  marketCap,
  volume,
  circulating,
  supply,
  image,
}) => {
  return (
    <Row>
      <td>{rank}</td>
      <div>
        <td>
          <img width={20} height={20} src={image} alt="img" />
        </td>
        <td>{name}</td>
        <td>{symbol}</td>
      </div>
      <td>{price}</td>
      <td>{percentage}</td>
      <td>{hourPercentage}</td>
      <td>{daysPercentage}</td>
      <div>
        <td>{volume}</td>
        <td>{marketCap}</td>
      </div>
      <div>
        <td>{circulating}</td>
        <td>{supply}</td>
      </div>
    </Row>
  );
};

export default CoinList;
