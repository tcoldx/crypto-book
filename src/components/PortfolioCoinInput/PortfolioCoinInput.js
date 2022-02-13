import React from "react";
import {
  Input,
  SelectCoinWrap,
  SelectCoin,
  InputContainer,
} from "./PortfolioCoinInput.styles";

const PortfolioCoinInput = (props) => {
  const smartType = (key) => {
    if (key === "name") {
      return "search";
    }
    if (key === "amount") {
      return "number";
    }
  };
  const smartPlaceholder = (key) => {
    if (key === "name") {
      return "Search coin...";
    }
    if (key === "value") {
      return "amount";
    }
    if (key === "date") {
      return "dd-mm-yyyy";
    }
  };
  return (
    <InputContainer>
      {Object.entries(props.coinData).map(([key, value]) => {
        return (
          <Input
            key={key}
            onChange={props.handleChange}
            name={key}
            autoComplete="off"
            value={value}
            type={smartType(key)}
            placeholder={smartPlaceholder(key)}
          />
        );
      })}
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
