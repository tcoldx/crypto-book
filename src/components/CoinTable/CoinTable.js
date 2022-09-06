import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CoinWrap,
  Table,
  OuterDiv,
  TH,
  SortSection,
  Option,
HeaderWrap
} from "./CoinTable.styles";
import { CoinList } from "../../components";
import { ClipLoader } from "react-spinners";
import { getCoins } from "store/coins/actions";

const SortOptions = [
  { name: "Cryptocurrencies", value: "cryptocurrency", id: 1 },
  { name: "DeFi", value: "decentralized-finance-defi", id: 2 },
  { name: "NFTs", value: "non-fungible-tokens-nft", id: 3 },
  { name: "Metaverse", value: "metaverse", id: 4 },
];

const CoinTable = (props) => {
  const [listType, setListType] = useState("");
  const [active, setActive] = useState("Cryptocurrencies");
  const dispatch = useDispatch();

  const handleClick = (currency, name) => {
    setListType(currency);
    setActive(name);
    dispatch(getCoins(listType));
  };

  useEffect(() => {
    dispatch(getCoins(listType)); // eslint-disable-next-line
  }, [listType]);

  return (
    <CoinWrap>
      <SortSection>
        {SortOptions.map((el) => {
          const isActive = el.name === active;
          return (
            <Option
              key={el.id}
              active={isActive}
              onClick={() => handleClick(el.value, el.name)}
            >
              {el.name}
            </Option>
          );
        })}
      </SortSection>
      <thead>
        <HeaderWrap>
              <TH>Favorite</TH>
                <TH>#</TH>
                <TH>Name</TH>
                <TH>Price</TH>
                <TH>1h%</TH>
                <TH>24h%</TH>
                <TH>7d%</TH>
                <TH>24h Volume/Market Cap</TH>
                <TH>Circulating/Total Supply</TH>
                <TH>Last 7d</TH>
             
              </HeaderWrap>
            </thead>
      <OuterDiv>
        {props.loading ? (
          <ClipLoader color="#00FC2A" />
        ) : (
          <Table>
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
        )}
      </OuterDiv>
    </CoinWrap>
  );
};

export default CoinTable;
