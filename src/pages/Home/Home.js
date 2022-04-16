import React, { useEffect } from "react";
import {
  MarketChart,
  CoinTable,
  ChartSlider,
  MobileDayChange,
} from "../../components";
import { getCoins } from "../../store/coins/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentWrap,
  Overview,
  Content,
  ChartWrapper,
  MobileChartWrap,
} from "./Home.styles";

const Home = React.memo(() => {
  const dispatch = useDispatch();
  const { coins, chartLoading } = useSelector((state) => state.market);
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
        <CoinTable coins={coins} />
      </Content>
    </ContentWrap>
  );
});

export default Home;
