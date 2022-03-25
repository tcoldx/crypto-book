import React from "react";
import { CoinWrap, Table, OuterDiv, TH } from "./CoinTable.styles";
import { CoinList } from "../../components";

const CoinTable = React.memo((props) => {
  return (
    <CoinWrap>
      <OuterDiv>
        <Table>
          <thead>
            <tr>
              <TH>#</TH>
              <TH>Name</TH>
              <TH>Price</TH>
              <TH>1h%</TH>
              <TH>24h%</TH>
              <TH>7d%</TH>
              <TH>24h Volume/Market Cap</TH>
              <TH>Circulating/Total Supply</TH>
              <TH>Last 7d</TH>
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
        </Table>
      </OuterDiv>
    </CoinWrap>
  );
});

export default CoinTable;
