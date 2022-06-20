import React, { useEffect } from "react";
import {
  MarketChart,
  CoinTable,
  ChartSlider,
  MobileDayChange,
} from "../../components";
import { getCoins } from "../../store/coins/actions";
import { useDispatch, useSelector } from "react-redux";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  ContentWrap,
  Overview,
  Content,
  ChartWrapper,
  MobileChartWrap,
  FooterPortfolio,
  PortfolioWrap,
} from "./Home.styles";

const Home = React.memo(() => {
  const dispatch = useDispatch();
  const { coins, chartLoading, coinsLoading } = useSelector(
    (state) => state.market
  );
  const { currentCurrency } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getCoins());
    // eslint-disable-next-line
  }, [currentCurrency]);

  return (
    <ContentWrap>
      <Content>
        <MobileChartWrap>
          <ChartSlider isLoading={chartLoading} />
        </MobileChartWrap>
        <ChartWrapper>
          <MarketChart type="price" isLoading={chartLoading} />
          <MarketChart type="volume" isLoading={chartLoading} />
        </ChartWrapper>
        <MobileDayChange />
        <Overview>Market Overview</Overview>
        <CoinTable coins={coins} loading={coinsLoading} />
        <FooterPortfolio>
          <PortfolioWrap>
            <a href="https://www.linkedin.com/in/tredis-ingram-211809195/">
              <AiFillLinkedin />
            </a>
            <a href="mailto: t.tredis@gmail.com">
              <AiOutlineMail />
            </a>
            <a href="https://github.com/tcoldx/crypto-book">
              <AiFillGithub />
            </a>
          </PortfolioWrap>
        </FooterPortfolio>
      </Content>
    </ContentWrap>
  );
});

export default Home;
