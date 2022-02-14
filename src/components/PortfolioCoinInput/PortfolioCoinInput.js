import React from "react";
import {
  Input,
  SelectCoinWrap,
  SelectCoin,
  InputContainer,
} from "./PortfolioCoinInput.styles";

const PortfolioCoinInput = (props) => {
  return (
    <InputContainer>
      <Input
        onChange={(e) => props.handleChange(e)}
        autoComplete="off"
        type="search"
        value={props.coinData.name}
        placeholder="Search Coin..."
      />
      <Input
        type="number"
        placeholder="Amount Coin"
        onChange={(e) => props.handleAmountChange(e)}
      />
      <Input
        type="search"
        placeholder="DD-MM-YYYY"
        onChange={(e) => props.handleDateChange(e)}
      />
      {props.close ? null : (
        <SelectCoinWrap>
          {props.coinList?.map((el) => {
            return (
              <SelectCoin
                key={el.id}
                onClick={(e) => props.handleOption(e, el.id)}
              >
                {el.name}
              </SelectCoin>
            );
          })}
        </SelectCoinWrap>
      )}
    </InputContainer>
  );
};

export default PortfolioCoinInput;
