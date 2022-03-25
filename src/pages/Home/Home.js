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
  const { coins } = useSelector((state) => state.market);
  const { currentCurrency } = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(getCoins());
    // eslint-disable-next-line
  }, [currentCurrency]);
  return (
    <ContentWrap>
      <Content>
        <Overview>Bitcoin Overview</Overview>
        <MobileChartWrap>
          <ChartSlider />
        </MobileChartWrap>
        <ChartWrapper>
          <MarketChart type="price" />
          <MarketChart type="volume" />
        </ChartWrapper>
        <MobileDayChange />
        <Overview>Coin Overview</Overview>
        <CoinTable coins={coins} />
      </Content>
    </ContentWrap>
  );
});

export default Home;
