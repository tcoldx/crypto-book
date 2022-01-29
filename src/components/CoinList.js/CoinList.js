import React from "react";
import {
  Row,
  TD,
  NameColumn,
  Span,
  PercentageBar,
  Market,
  Supply,
  Bullet,
  MarketWrap,
  ContentWrap,
  RankWrap,
  StyledLink,
} from "./CoinList.styles";
import { formatPercent } from "utils/formatPercent";
import { convertNumber } from "utils/convertNumber";
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
      <TD>
        <RankWrap>
          <span>{rank}</span>
        </RankWrap>
      </TD>
      <TD>
        <NameColumn>
          <img width={20} height={20} src={image} alt="img" />
          <StyledLink to={`/coin/${name.toLowerCase()}`}>{name}</StyledLink>
          <span>({symbol.toUpperCase()})</span>
        </NameColumn>
      </TD>
      <TD>${price.toLocaleString()}</TD>

      <TD>
        <Span color={percentage < 0 ? "#fe1040" : "#00fc2a"}>
          {formatPercent(percentage)}
        </Span>
      </TD>
      <TD>
        <Span color={hourPercentage < 0 ? "#fe1040" : "#00fc2a"}>
          {formatPercent(hourPercentage)}
        </Span>
      </TD>
      <TD>
        <Span color={daysPercentage < 0 ? "#fe1040" : "#00fc2a"}>
          {formatPercent(daysPercentage)}
        </Span>
      </TD>

      <TD>
        <ContentWrap>
          <MarketWrap>
            <Bullet>•</Bullet>${convertNumber(volume)}
            <Bullet>•</Bullet>${convertNumber(marketCap)}
          </MarketWrap>
          <PercentageBar>
            <Market marketCap={marketCap} volume={volume} />
          </PercentageBar>
        </ContentWrap>
      </TD>

      <TD>
        <ContentWrap>
          <MarketWrap>
            <Bullet>•</Bullet>
            {convertNumber(circulating)}
            <Bullet>•</Bullet>
            {supply === null ? "∞" : convertNumber(parseInt(supply))}
          </MarketWrap>
          <PercentageBar>
            <Supply circulating={circulating} supply={supply} />
          </PercentageBar>
        </ContentWrap>
      </TD>
    </Row>
  );
};

export default CoinList;
