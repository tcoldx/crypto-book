import React, { useEffect } from "react";
import { getCoin } from "store/coin/actions";
import { useDispatch, useSelector } from "react-redux";
import { CoinSummary } from "components";
import Chain from "assets/Images/chain.svg";
import {
  ContentWrap,
  H4,
  Container,
  DescriptionContainer,
  WebsiteContainer,
  SiteLink,
  SiteInner,
} from "./Coin.styles";

const Coin = (props) => {
  const dispatch = useDispatch();
  const { coin } = useSelector((state) => state.coin);
  const coinId = props.match.params.coinId;

  useEffect(() => {
    dispatch(getCoin(coinId));
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
      </ContentWrap>
    </Container>
  );
};

export default Coin;
