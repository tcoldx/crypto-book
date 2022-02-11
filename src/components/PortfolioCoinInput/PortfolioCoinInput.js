import React from "react";
import {
  Input,
  SelectCoinWrap,
  SelectCoin,
  InputContainer,
} from "./PortfolioCoinInput.styles";

const PortfolioCoinInput = (props) => {
  const smartType = (key) => {
    if (key === "date") {
      return "date";
    }
    if (key === "name") {
      return "search";
    }
    if (key === "value") {
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
      return "dd/mm/yyyy";
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
            value={value}
            type={smartType(key)}
            placeholder={smartPlaceholder(key)}
          />
        );
      })}
      <SelectCoinWrap>
        {props.coinList?.map((el) => {
          if (props.close) {
            return null;
          } else {
            return (
              <SelectCoin
                key={el.id}
                onClick={(e) => props.handleOption(e, el.id)}
              >
                {el.name}
              </SelectCoin>
            );
          }
        })}
      </SelectCoinWrap>
    </InputContainer>
  );
};

export default PortfolioCoinInput;
