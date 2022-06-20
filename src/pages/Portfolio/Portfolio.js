import React, { useState, useEffect } from "react";
import {
  deleteItem,
  getCoinInfo,
  editItem,
  getCoinsData,
} from "store/portfolio/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsList } from "store/portfolio/actions";
import ExitButton from "assets/Images/xbutton.svg";
import {
  Wrapper,
  AssetButton,
  H2,
  H1,
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
  const { currentCurrency } = useSelector((state) => state.global);
  const { coinsData, arrayCoins, loading } = useSelector(
    (state) => state.portfolio
  );
  useEffect(() => {
    dispatch(getCoinsData(currentCurrency));
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setOpen(!open);
    setCoinData({});
    setCoin({});
  };

  const handleDelete = (coinId) => {
    dispatch(deleteItem(coinId));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(getCoinsList(value));
    setCoinData({ ...coinData, name: value });
    setNameError(false);
    if (value === "") {
      setClose(true);
    } else {
      setClose(false);
    }
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

  const handleEdit = (data) => {
    const { purchaseData, amountPurchased, datePurchased, key } = data;
    setCoinData({
      name: purchaseData.name,
      amount: amountPurchased,
      date: datePurchased,
      key: key,
    });
    setCoin({
      thumb: purchaseData.image.thumb,
      name: purchaseData.name,
    });
    setOpen(true);
  };
  const handleSave = (data) => {
    if (!data.key) {
      data.key = `${Math.random()}-${Math.random()}`;
      dispatch(getCoinInfo(coinData));
    }

    if (data.key) {
      dispatch(editItem(data));
    }

    let name = data.name;
    let date = data.date;
    let amount = data.amount;
    if (name.length <= 0 || date.length <= 0 || amount.length <= 0) {
      setNameError(true);
      setDateError(true);
      setAmountError(true);
      return;
    }

    setCoin({});
    setCoinData({
      name: "",
      amount: "",
      date: "",
    });
    setOpen(false);
  };

  const handleOption = (e, el) => {
    const foundCoin = arrayCoins.find((el) => el.name === e.target.innerText);
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
                <H1>Select Coins</H1>
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
                    coinList={arrayCoins}
                    loading={loading}
                    close={close}
                  />
                </CoinSelectors>
              </CoinTopContent>
              <ButtonWrap>
                <Button onClick={handleClick}>Close</Button>
                <Button onClick={() => handleSave(coinData)}>
                  Save and Continue
                </Button>
              </ButtonWrap>
            </ContentWrap>
          </StatMenuWrap>
        </StatMenuContainer>
      )}

      <AssetButton onClick={handleClick}>Add Asset</AssetButton>
      <StatHeader></StatHeader>
      {coinsData.map((el) => {
        return (
          <CoinStatistics
            handleDelete={() => handleDelete(el.purchaseData.id)}
            handleEdit={() => handleEdit(el)}
            id={el.purchaseData.id}
            key={el.key}
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
