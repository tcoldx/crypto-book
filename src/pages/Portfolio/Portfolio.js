import React, { useState, useEffect } from "react";
import { getCoinInfo, getCoinsData } from "store/portfolio/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "store/global/actions";
import ExitButton from "assets/Images/xbutton.svg";
import {
  Wrapper,
  AssetButton,
  H2,
  StatMenuContainer,
  Img,
  StatMenuWrap,
  InnerCoinCard,
  CoinCard,
  CoinSelectors,
  ContentWrap,
  ButtonWrap,
  Button,
  CoinTopContent,
} from "./Portfolio.styles";
import { CoinStatistics, PortfolioCoinInput } from "components";

const Portfolio = () => {
  const [open, setOpen] = useState(true);
  const [coin, setCoin] = useState({});
  const [savedCoin, setSavedCoin] = useState([]);
  const [close, setClose] = useState(false);
  const [coinData, setCoinData] = useState({
    name: "",
    amount: 0,
    date: "",
  });

  const dispatch = useDispatch();
  const { coins, currentCurrency } = useSelector((state) => state.global);
  const { coinsData } = useSelector((state) => state.portfolio);

  useEffect(() => {
    dispatch(getCoinsData(currentCurrency));
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
      dispatch(getSearch(value));
    }
    setCoinData({ ...coinData, [name]: value });
    setClose(false);
  };

  const handleSave = () => {
    setSavedCoin([...savedCoin, coinData]);
    dispatch(getCoinInfo(coinData));
  };

  const handleOption = (e, el) => {
    const foundCoin = coins.find((el) => el.name === e.target.innerText);
    setCoinData({ ...coinData, name: el });
    setCoin(foundCoin);
    setClose(true);
  };
  return (
    <Wrapper>
      {open && (
        <StatMenuContainer>
          <StatMenuWrap>
            <div>Select Coins</div>
            <Img onClick={handleClick} src={ExitButton} alt="button" />
            <ContentWrap>
              <CoinTopContent>
                <CoinCard>
                  <InnerCoinCard>
                    <img src={coin.thumb} alt="coin" />
                  </InnerCoinCard>
                  <span>{coin.name}</span>
                </CoinCard>
                <CoinSelectors>
                  <PortfolioCoinInput
                    handleOption={handleOption}
                    handleChange={handleChange}
                    coinData={coinData}
                    coinList={coins}
                    close={close}
                  />
                </CoinSelectors>
              </CoinTopContent>
              <ButtonWrap>
                <Button onClick={handleClick}>Close</Button>
                <Button onClick={handleSave}>Save and Continue</Button>
              </ButtonWrap>
            </ContentWrap>
          </StatMenuWrap>
        </StatMenuContainer>
      )}
      <H2>Your Statistics</H2>
      <AssetButton onClick={handleClick}>Add Asset</AssetButton>
      {coinsData.map((el) => {
        return (
          <CoinStatistics
            id={el.purchaseData.id}
            key={el.purchaseData.id}
            name={el.purchaseData.name}
            image={el.purchaseData.image.thumb}
            price={el.purchaseData.market_data.current_price}
            amount={el.amountPurchased}
            purchaseDate={el.datePurchased}
          />
        );
      })}
    </Wrapper>
  );
};

export default Portfolio;
