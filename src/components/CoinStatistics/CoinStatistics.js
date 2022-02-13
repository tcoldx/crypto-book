import React from "react";
import { useSelector } from "react-redux";
import { formatPercent } from "utils/formatPercent";
import {
  Container,
  StatWrap,
  StatLeft,
  CoinContainer,
  MarketStatWrap,
  StatRight,
  MarketStatContainer,
  CoinStatContainer,
  CoinStatWrap,
  Span,
  Name,
} from "./CoinStatistics.styles";

const CoinStatistics = (props) => {
  const { currentCurrency } = useSelector((state) => state.global);
  const { statsList } = useSelector((state) => state.portfolio);
  const { amount, name, purchaseDate, image, price } = props;
  const currentData = statsList?.filter((el) => el.id === props.id);
  const currentPrice = currentData[0]?.current_price * amount;
  const priceChange = currentData[0]?.price_change_24h;
  const marketVsVolume =
    currentData[0]?.market_cap / currentData[0]?.total_volume;
  const supplyVsMax =
    currentData[0]?.circulating_supply / currentData[0]?.total_supply;

  return (
    <Container>
      <StatWrap>
        <StatLeft>
          <CoinContainer>
            <img src={image} alt="coin" width={30} height={30} />
            <Name>{name.length > 12 ? name.slice(0, 12) + "..." : name}</Name>
          </CoinContainer>
        </StatLeft>
        <StatRight>
          <span>Market Price:</span>
          <MarketStatContainer>
            <MarketStatWrap>
              <span>
                Current Price:
                <Span>{!currentPrice ? "-" : "$" + currentPrice}</Span>
              </span>
              <span>
                Price Change 24h
                <Span>{priceChange?.toFixed(2)}</Span>
              </span>
              <span>
                Market Cap vs Volume
                <Span>
                  {!marketVsVolume ? "-" : formatPercent(marketVsVolume)}
                </Span>
              </span>
              <span>
                Circ supply vs Max supply
                <Span>
                  {!supplyVsMax ? "-" : "$" + supplyVsMax?.toFixed(2)}
                </Span>
              </span>
            </MarketStatWrap>
          </MarketStatContainer>
          <span>Coin Stats:</span>
          <CoinStatContainer>
            <CoinStatWrap>
              <span>
                Coin amount: <Span>{amount}</Span>
              </span>
              <span>
                Amount Value
                <Span>{price ? price[currentCurrency]?.toFixed(2) : null}</Span>
              </span>
              <span>
                Amount price change since purchase
                <Span>
                  {currentData[0]?.price_change_percentage_7d_in_currency?.toFixed(
                    2
                  )}
                  %
                </Span>
              </span>
              <span>
                Purchase date <Span>{purchaseDate}</Span>
              </span>
            </CoinStatWrap>
          </CoinStatContainer>
        </StatRight>
      </StatWrap>
    </Container>
  );
};

export default CoinStatistics;