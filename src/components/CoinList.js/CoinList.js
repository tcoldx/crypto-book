import React, {useState} from "react";
import {
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
  ContWrap,
  FullList,
} from "./CoinList.styles";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GreenCaret from "assets/Images/greenCaret.svg";
import RedCaret from "assets/Images/redCaret.svg";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import { formatPercent } from "../../utils/formatPercent";
import { convertNumber } from "../../utils/convertNumber";
import { TableChart } from "../../components";
import { StarredCoins } from "store/watchlist/actions";
  import { useDispatch } from "react-redux";
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
  sparkline,
}) => {

  const [saved, setSaved] = useState(false); 
   const dispatch = useDispatch();
  const handleClick = () => {
    setSaved(!saved)
    if (!saved) {
    toast("Coin saved to watchlist!")
    dispatch(StarredCoins(name.toLowerCase()))
    } 
  } /* <TD>
        {saved && <AiFillStar className="star" size={20} fill={saved ? "yellow" : "white"}  onClick={handleClick}/>}
        {!saved && <AiOutlineStar className="star" size={20} fill={saved ? "yellow" : "white"}  onClick={handleClick}/>}
      </TD> */
  return (
    <FullList>
<TD>
        {saved && <AiFillStar className="star" size={20} fill={saved ? "yellow" : "white"}  onClick={handleClick}/>}
        {!saved && <AiOutlineStar className="star" size={20} fill={saved ? "yellow" : "white"}  onClick={handleClick}/>}
      </TD>
      <TD>
        <RankWrap>
          <span>{rank}</span>
        </RankWrap>
      </TD>
      <TD>
        <NameColumn>
          <img width={20} height={20} src={image} alt="img" />
          <div className="mobile-stack">
          <StyledLink to={`/coin/${name.toLowerCase()}`}>{name}</StyledLink>
          <span>({symbol.toUpperCase()})</span>
          </div>
        </NameColumn>
      </TD>
      <TD>${price.toLocaleString()}</TD>

      <TD>
        <ContWrap>
          {percentage ? (
            <img src={percentage < 0 ? RedCaret : GreenCaret} alt="img" />
          ) : null}
          <Span
            color={!percentage ? "" : percentage < 0 ? "#fe1040" : "#00fc2a"}
          >
            {formatPercent(percentage)}
          </Span>
        </ContWrap>
      </TD>
      <TD>
        <ContWrap>
          {hourPercentage ? (
            <img src={hourPercentage < 0 ? RedCaret : GreenCaret} alt="img" />
          ) : null}
          <Span
            color={
              !hourPercentage ? "" : hourPercentage < 0 ? "#fe1040" : "#00fc2a"
            }
          >
            {formatPercent(hourPercentage)}
          </Span>
        </ContWrap>
      </TD>
      <TD>
        <ContWrap>
          {daysPercentage ? (
            <img src={daysPercentage < 0 ? RedCaret : GreenCaret} alt="img" />
          ) : null}
          <Span
            color={
              !daysPercentage ? "" : daysPercentage < 0 ? "#fe1040" : "#00fc2a"
            }
          >
            {formatPercent(daysPercentage)}
          </Span>
        </ContWrap>
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
      <TD>
        <TableChart dataPoint={sparkline} />
      </TD>
    </FullList>
  );
};

export default CoinList;
