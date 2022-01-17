import React from "react";
import { MarketChart, CoinTable } from "components";
import { ContentWrap, Overview, Content, ChartWrapper } from "./Home.styles";

const Home = (props) => {
  return (
    <ContentWrap>
      <Content>
        <Overview>Bitcoin Overview</Overview>
        <ChartWrapper>
          <MarketChart type="price" />
          <MarketChart type="volume" />
        </ChartWrapper>
        <Overview>Coin Overview</Overview>
        <CoinTable />
      </Content>
    </ContentWrap>
  );
};

export default Home;
