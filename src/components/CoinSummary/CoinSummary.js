import React from "react";
import { useSelector } from "react-redux";
import { formatPercent } from "utils/formatPercent";
import { formatDate } from "utils/formatDate";
import { numberFormat } from "utils/numberFormat";
import Caret from "assets/Images/greenCaret.svg";
import RedCaret from "assets/Images/redCaret.svg";
import Plus from "assets/Images/plus.svg";
import Stack from "assets/Images/stack.svg";
import LinkChain from "assets/Images/link.svg";

import {
  CoinNameContainer,
  TopContentContainer,
  CoinMarketContainer,
  CoinPriceContainer,
  ImageWrap,
  WebsiteLinkWrap,
  CoinNameWrap,
  PriceWrap,
  Span,
  AllTimeContainer,
  AllTimeWrapper,
  ATH,
  StyledLink,
  CoinMarketWrap,
  StatColumn,
  PlusImg,
  PercentContainer,
  PercentWrap,
  Percentage,
  ColSpan,
} from "./CoinSummary.styles";

const CoinSummary = (props) => {
  const { currentCurrency } = useSelector((state) => state.global);
  const athDate = props.coin?.market_data?.ath_date[currentCurrency];
  const atlDate = props.coin?.market_data?.atl_date[currentCurrency];
  const priceChange =
    props.coin?.market_data?.price_change_percentage_24h_in_currency[
      currentCurrency
    ];
  const ath = props.coin?.market_data?.ath[currentCurrency];
  const atl = props.coin?.market_data?.atl[currentCurrency];
  const marketCap = props.coin?.market_data?.market_cap[currentCurrency];
  const fdv = props.coin?.market_data?.fully_diluted_valuation[currentCurrency];
  const volume24hour = props.coin?.market_data?.market_cap_change_24h;
  const marketAndVolume =
    props.coin?.market_data?.total_volume[currentCurrency] /
    props.coin?.market_data?.market_cap[currentCurrency];
  const totalVolume = props.coin?.market_data?.total_volume[currentCurrency];
  const circulatingSupply = props.coin?.market_data?.circulating_supply;
  const maxSupply = props.coin?.market_data?.max_supply;
  const totalPrice = props.coin?.market_data?.current_price;
  return (
    <TopContentContainer>
      <CoinNameWrap>
        <CoinNameContainer>
          <ImageWrap>
            <img src={props.coin?.image?.small} alt="coin-img" />
          </ImageWrap>
          <span>
            {props.coin?.name} ({props.coin?.symbol?.toUpperCase()})
          </span>
        </CoinNameContainer>
        <WebsiteLinkWrap>
          <img src={LinkChain} alt="linkchain" />
          <StyledLink href={props.coin?.links?.homepage[0]}>
            {props.coin?.links?.homepage[0]}
          </StyledLink>
        </WebsiteLinkWrap>
      </CoinNameWrap>
      <CoinPriceContainer>
        <h1>
          $
          {props.coin?.market_data?.current_price[
            currentCurrency
          ]?.toLocaleString("en-US")}
        </h1>
        <PriceWrap>
          <img src={priceChange < 0 ? RedCaret : Caret} alt="caret" />
          <Span color={priceChange < 0 ? "#fe1040" : "#00fc2a"}>
            {formatPercent(priceChange)}
          </Span>
        </PriceWrap>
        <div>
          <img src={Stack} alt="stack" />
        </div>
        <AllTimeContainer>
          <AllTimeWrapper>
            <img src={Caret} alt="caret" />
            <div>
              <ATH>All Time High: </ATH> ${ath?.toLocaleString("en-US")}
            </div>
          </AllTimeWrapper>
          <div>{formatDate(athDate)}</div>
          <AllTimeWrapper>
            <img src={RedCaret} alt="red-caret" />
            <div>
              <ATH>All Time Low: </ATH> ${atl}
            </div>
          </AllTimeWrapper>
          <div>{formatDate(atlDate)}</div>
        </AllTimeContainer>
      </CoinPriceContainer>
      <CoinMarketContainer>
        <CoinMarketWrap>
          <div>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Market Cap: </ColSpan>
              <div>{numberFormat(marketCap)}</div>
            </StatColumn>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Fully Diluted Valuation:</ColSpan>
              <div>{!fdv ? "-" : `$${fdv?.toLocaleString("en-US")}`}</div>
            </StatColumn>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Volume 24h:</ColSpan>
              <div>${volume24hour?.toLocaleString("en-US")}</div>
            </StatColumn>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Volume/Market: </ColSpan>
              <div>{marketAndVolume}</div>
            </StatColumn>
          </div>

          <div>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Total Volume:</ColSpan>
              <div>{totalVolume?.toLocaleString("en-US")}</div>
            </StatColumn>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Circulating Supply: </ColSpan>
              <div>{circulatingSupply}</div>
            </StatColumn>
            <StatColumn>
              <PlusImg src={Plus} alt="plus" />
              <ColSpan>Max Supply:</ColSpan>
              <div>{!maxSupply ? "INFINITY" : maxSupply}</div>
            </StatColumn>
          </div>
          <PercentContainer>
            <PercentWrap>
              <Percentage price={totalPrice} volume={totalVolume} />
            </PercentWrap>
          </PercentContainer>
        </CoinMarketWrap>
      </CoinMarketContainer>
    </TopContentContainer>
  );
};

export default CoinSummary;
