import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ConvertWrap,
  ConvertContainer,
  CoinName,
  Input,
  InputWrap,
} from "./CurrencyConverter.styles";
import Converter from "assets/Images/converter.svg";

const CurrencyConverter = (props) => {
  const { currentCurrency } = useSelector((state) => state.global);
  const { coin, coinData } = props;
  const [amountCurrency, setAmountCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");

  const currencyChange = (e) => {
    const { value } = e.target;
    const amount = value < 0 ? 0 : value;
    const exchangeRate = coinData?.market_data?.current_price[currentCurrency];
    setAmountCurrency(amount);
    setCryptoCurrency(amount / parseFloat(exchangeRate).toFixed(2));
  };

  const calcExchange = (e) => {
    const { value } = e.target;
    const amount = value < 0 ? 0 : value;
    const exchangeRate = coinData?.market_data?.current_price[currentCurrency];
    setAmountCurrency(amount);
    setCryptoCurrency(amount * parseFloat(exchangeRate).toFixed(2));
  };

  return (
    <Container>
      <ConvertWrap>
        <ConvertContainer>
          <CoinName>{coin.toUpperCase()}</CoinName>
          <InputWrap>
            <Input
              type="number"
              value={amountCurrency}
              onChange={calcExchange}
            />
          </InputWrap>
        </ConvertContainer>
        <img src={Converter} alt="convert" width={20} height={20} />
        <ConvertContainer>
          <CoinName>{currentCurrency.toUpperCase()}</CoinName>
          <InputWrap>
            $
            <Input
              type="number"
              value={cryptoCurrency}
              onChange={currencyChange}
            />
          </InputWrap>
        </ConvertContainer>
      </ConvertWrap>
    </Container>
  );
};

export default CurrencyConverter;
