import React from 'react'
import {Container, RowWrap, Header, Wrap, Span, ContWrap, StyledLink} from "./WatchList.styles";
import {useSelector} from "react-redux";
import { formatPercent } from "../../utils/formatPercent";
import { convertNumber } from "../../utils/convertNumber";
import GreenCaret from "assets/Images/greenCaret.svg";
import RedCaret from "assets/Images/redCaret.svg";

function WatchList() {
  const {savedCoin} = useSelector(state => state.watchlist);

  return (
    <Wrap>
      <Header>
        <div>Name</div>
        <div>Price</div>
        <div>1h</div>
        <div>24h</div>
        <div>7d</div>
        <div>Market Cap</div>
      </Header>
      {savedCoin?.map(coin => {
        let dayPercentage = coin.market_data.price_change_percentage_24h;
        let daysPercentage = coin.market_data.price_change_percentage_7d_in_currency;
        let hourPercentage = coin.market_data.price_change_percentage_1h_in_currency;
      return (
        <Container key={coin.name}>
          <RowWrap>
            <div className="nameCon">
          <div><img alt="img" src={coin.image.thumb}/></div> 
          <div><StyledLink to={`/coin/${coin.id}`}>{coin.name}</StyledLink></div>
          </div>
          <div className="priceCon">
          <div>${coin.market_data.current_price["usd"].toLocaleString()}</div>
          </div>
          <ContWrap>
            <img src={hourPercentage < 0 ? RedCaret : GreenCaret} alt="abb"/>
          <Span color={hourPercentage < 0 ? "#fe1040" : "#00fc2a"}>{formatPercent(hourPercentage["usd"].toFixed(2))}</Span>
          </ContWrap>
          <ContWrap>
            <img src={dayPercentage < 0 ? RedCaret : GreenCaret} alt="img"/>
          <Span color={dayPercentage < 0 ? "#fe1040" : "#00fc2a"}>{formatPercent(dayPercentage.toFixed(2))}</Span>
          </ContWrap>
          <ContWrap>
            <img src={daysPercentage < 0 ? RedCaret : GreenCaret} alt="img"/>
           <Span color={daysPercentage < 0 ? "#fe1040" : "#00fc2a"}>{formatPercent(daysPercentage.usd.toFixed(2))}</Span>
          </ContWrap>
          <div>${convertNumber(coin.market_data.market_cap["usd"])}
          </div>
          </RowWrap>
          </Container>
      )
    })}
    </Wrap>
  )
}

export default WatchList;