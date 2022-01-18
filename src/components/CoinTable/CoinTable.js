import React from "react";
import { CoinWrap } from "./CoinTable.styles";
import ClipLoader from "react-spinners/ClipLoader";
import { CoinList } from "components";

const CoinTable = (props) => {
  return (
    <CoinWrap>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>24h Volume/Market Cap</th>
            <th>Circulating/Total Supply</th>
          </tr>
        </thead>
        <tbody>
          {props.coins.map((el) => {
            return (
              <CoinList
                key={el.id}
                name={el.name}
                symbol={el.symbol}
                image={el.image}
                price={el.current_price}
                hourPercentage={el.price_change_percentage_1h_in_currency}
                daysPercentage={el.price_change_percentage_7d_in_currency}
                percentage={el.price_change_percentage_24h}
                rank={el.market_cap_rank}
                marketCap={el.market_cap}
                volume={el.total_volume}
                circulating={el.circulating_supply}
                supply={el.total_supply}
                sparkline={el.sparkline_in_7d}
              />
            );
          })}
        </tbody>
      </table>
    </CoinWrap>
  );
};

export default CoinTable;
