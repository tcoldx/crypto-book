import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNavData } from "store/global/actions";
import { convertNumber } from "utils/convertNumber";
import BarLoader from "react-spinners/BarLoader";
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
  MarketCapWrap,
  CoinAndExchange,
  EthereumWrap,
  Percentages,
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
  if (!isNaN(navData))
    return (
      <NavWrap>
        <NavUnderContainer>
          <BarLoader width={400} color="#00FC2A" />
        </NavUnderContainer>
      </NavWrap>
    );
  return (
    <NavWrap>
      <NavUnderContainer>
        <NavUnderWrap>
          <CoinAndExchange>
            <div>Coins {currencies}</div>
            <div>Exchange {markets}</div>
            <img src={Point} width={6} height={6} alt="bullet-point" />
          </CoinAndExchange>
          <MarketCapWrap>
            <span>${convertNumber(Math.round(totalMarketCap))}</span>
            <img src={GreenCaret} alt="caret" width={8} height={8} />
            <img src={Point} width={6} height={6} alt="bullet-point" />
          </MarketCapWrap>

          <PercentContainer>
            <Percentages> {convertNumber(Math.round(totalVolume))}</Percentages>
            <BarContainer>
              <VolumePercentage market={navData?.data?.total_market_cap.btc} />
            </BarContainer>
          </PercentContainer>
          <PercentContainer>
            <img src={BTC} width={10} height={10} alt="bitcoin" />
            <Percentages>{Math.round(bitcoinPercentage)}%</Percentages>
            <BarContainer>
              <Percentage
                market={navData?.data?.total_market_cap.btc}
                volume={navData?.data?.total_volume.btc}
              />
            </BarContainer>
          </PercentContainer>
          <EthereumWrap>
            <PercentContainer>
              <img src={ETH} width={10} height={10} alt="ethereum" />
              <Percentages>{Math.round(ethereumPercentage)}%</Percentages>
              <BarContainer>
                <Percentage
                  market={navData?.data?.total_market_cap.btc}
                  volume={navData?.data?.total_volume.btc}
                />
              </BarContainer>
            </PercentContainer>
          </EthereumWrap>
        </NavUnderWrap>
      </NavUnderContainer>
    </NavWrap>
  );
};

export default NavUnder;
