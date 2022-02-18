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
  Span,
  ButtonWrap,
  Button,
  CoinTopContent,
  StatHeader,
  ImageWrap,
} from "./Portfolio.styles";
import { CoinStatistics, PortfolioCoinInput } from "components";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [coin, setCoin] = useState({});
  const [savedCoin, setSavedCoin] = useState([]);
  const [close, setClose] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [nameError, setNameError] = useState(false);

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
    const { value } = e.target;
    dispatch(getSearch(value));
    setCoinData({ ...coinData, name: value });
    if (value === "") {
      setClose(true);
    } else {
      setClose(false);
    }
    setNameError(false);
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    if (value < 0) return;
    setCoinData({ ...coinData, amount: value });
    setAmountError(false);
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setCoinData({ ...coinData, date: value });
    setDateError(false);
  };

  const handleSave = (data) => {
    if (data.name.length <= 0) {
      setNameError(true);
      return;
    }
    if (data.date.length <= 0) {
      setDateError(true);
      return;
    }
    if (data.amount <= 0) {
      setAmountError(true);
      return;
    }
    setNameError(data.name.length >= 1 ? false : true);
    setAmountError(data.amount <= 0 ? false : true);
    setDateError(data.date ? false : true);
    setSavedCoin([...savedCoin, coinData]);
    dispatch(getCoinInfo(coinData));
    setCoin({});
    setCoinData({
      name: "",
      amount: "",
      date: "",
    });
    setOpen(false);
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
            <H2>Select Coins</H2>
            <ImageWrap>
              <Img onClick={handleClick} src={ExitButton} alt="button" />
            </ImageWrap>
            <ContentWrap>
              <CoinTopContent>
                <CoinCard>
                  <InnerCoinCard>
                    {coin.thumb ? <img src={coin.thumb} alt="coin" /> : null}
                  </InnerCoinCard>
                  <Span>{coin.name}</Span>
                </CoinCard>
                <CoinSelectors>
                  <PortfolioCoinInput
                    handleOption={handleOption}
                    handleAmountChange={handleAmountChange}
                    handleDateChange={handleDateChange}
                    handleChange={handleChange}
                    nameError={nameError}
                    amountError={amountError}
                    dateError={dateError}
                    coinData={coinData}
                    coinList={coins}
                    close={close}
                  />
                </CoinSelectors>
              </CoinTopContent>
            </ContentWrap>
            <ButtonWrap>
              <Button onClick={handleClick}>Close</Button>
              <Button onClick={() => handleSave(coinData)}>
                Save and Continue
              </Button>
            </ButtonWrap>
          </StatMenuWrap>
        </StatMenuContainer>
      )}

      <AssetButton onClick={handleClick}>Add Asset</AssetButton>
      <StatHeader>
        <H2>Your Statistics</H2>
      </StatHeader>
      {coinsData.map((el) => {
        return (
          <CoinStatistics
            id={el.purchaseData.id}
            key={el.purchaseData.id}
            name={el.purchaseData.name}
            image={el.purchaseData.image.thumb}
            price={el?.purchaseData?.market_data?.current_price}
            amount={el.amountPurchased}
            purchaseDate={el.datePurchased}
          />
        );
      })}
    </Wrapper>
  );
};

export default Portfolio;
