import React from "react";
import { MarketChart, CoinTable } from "components";
import { ContentWrap, Overview, Content, ChartWrapper } from "./Home.styles";

const Home = (props) => {
  return (
    <ContentWrap>
      <Content>
        <Overview>Your Overview</Overview>
        <ChartWrapper>
          <MarketChart type="price" />
          <MarketChart type="volume" />
        </ChartWrapper>
        <Overview>Your Overview</Overview>
        <CoinTable />
      </Content>
    </ContentWrap>
  );
};

export default Home;
