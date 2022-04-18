import React, { useEffect } from "react";
import { getCoin, getCoinChartData } from "../../store/coin/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCoin } from "../../store/global/actions";
import Chain from "../../assets/Images/chain.svg";
import {
  CoinChartChange,
  CoinPageChart,
  CoinSummary,
  CurrencyConverter,
} from "../../components";
import {
  ContentWrap,
  H4,
  Container,
  DescriptionContainer,
  WebsiteContainer,
  SiteLink,
  SiteInner,
  ChartContain,
} from "./Coin.styles";

const Coin = (props) => {
  const dispatch = useDispatch();
  const { coin, priceData, priceLabels, chartLoading } = useSelector(
    (state) => state.coin
  );
  const coinId = props.match.params.coinId;

  useEffect(() => {
    dispatch(getCoin(coinId));
    dispatch(getCurrentCoin(coinId));
    dispatch(getCoinChartData());
    // eslint-disable-next-line
  }, [coinId]);

  if (!coin) return <h1>loading...</h1>;
  return (
    <Container>
      <ContentWrap>
        <H4>Coin Summary</H4>
        <CoinSummary coin={coin} />
        <H4>Description:</H4>
        <DescriptionContainer
          dangerouslySetInnerHTML={{
            __html: coin.description.en,
          }}
        />
        <WebsiteContainer>
          <SiteLink href={coin.links.blockchain_site[0]}>
            <SiteInner>
              <img src={Chain} alt="chain" />
              {coin.links.blockchain_site[0]}
            </SiteInner>
          </SiteLink>
          <SiteLink href={coin.links.blockchain_site[1]}>
            <SiteInner>
              <img src={Chain} alt="chain" />
              {coin.links.blockchain_site[1]}
            </SiteInner>
          </SiteLink>
          <SiteLink href={coin.links.blockchain_site[2]}>
            <SiteInner>
              <img src={Chain} alt="chain" />
              {coin.links.blockchain_site[2]}
            </SiteInner>
          </SiteLink>
        </WebsiteContainer>
        <CurrencyConverter coinData={coin} coin={coin.symbol} />
        <CoinChartChange />
      </ContentWrap>
      <ChartContain>
        <CoinPageChart
          dataLabel={priceLabels}
          dataPoint={priceData}
          loading={chartLoading}
        />
      </ChartContain>
    </Container>
  );
};

export default Coin;
