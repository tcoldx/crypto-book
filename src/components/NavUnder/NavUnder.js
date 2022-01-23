import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNavData } from "store/global/actions";
import { convertNumber } from "utils/convertNumber";
import Point from "assets/Images/bulletPoint.svg";
import BTC from "assets/Images/bitcoin.svg";
import ETH from "assets/Images/ethereum.svg";
import GreenCaret from "assets/Images/greenCaret.svg";
import {
  NavWrap,
  NavUnderContainer,
  NavUnderWrap,
  PercentContainer,
  Percentage,
  BarContainer,
  VolumePercentage,
} from "./NavUnder.styles";

const NavUnder = () => {
  const dispatch = useDispatch();
  const { navData, currentCurrency } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(getNavData());
    // eslint-disable-next-line
  }, [currentCurrency]);
  const currencies = navData?.data?.active_cryptocurrencies;
  const markets = navData?.data?.markets;
  const totalMarketCap = navData?.data?.total_market_cap[currentCurrency];
  const totalVolume = navData?.data?.total_volume[currentCurrency];
  const bitcoinPercentage = navData?.data?.market_cap_percentage.btc;
  const ethereumPercentage = navData?.data?.market_cap_percentage.eth;
  return (
    <NavWrap>
      <NavUnderContainer>
        <NavUnderWrap>
          <span>Coins {currencies}</span>
          <span>Exchange {markets}</span>
          <img src={Point} width={6} height={6} alt="bullet-point" />
          <span>
            ${convertNumber(Math.round(totalMarketCap))}
            <img src={GreenCaret} alt="caret" width={8} height={8} />
          </span>
          <img src={Point} width={6} height={6} alt="bullet-point" />
          <PercentContainer>
            <span> {convertNumber(Math.round(totalVolume))}</span>
            <BarContainer>
              <VolumePercentage market={navData?.data?.total_market_cap.btc} />
            </BarContainer>
          </PercentContainer>
          <PercentContainer>
            <img src={BTC} width={10} height={10} alt="bitcoin" />
            <span>{Math.round(bitcoinPercentage)}%</span>
            <BarContainer>
              <Percentage
                market={navData?.data?.total_market_cap.btc}
                volume={navData?.data?.total_volume.btc}
              />
            </BarContainer>
          </PercentContainer>
          <PercentContainer>
            <img src={ETH} width={10} height={10} alt="ethereum" />
            <span>{Math.round(ethereumPercentage)}%</span>
            <BarContainer>
              <Percentage
                market={navData?.data?.total_market_cap.btc}
                volume={navData?.data?.total_volume.btc}
              />
            </BarContainer>
          </PercentContainer>
        </NavUnderWrap>
      </NavUnderContainer>
    </NavWrap>
  );
};

export default NavUnder;
