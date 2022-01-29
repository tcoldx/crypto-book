import React from "react";
import { InputContainer, Input, InputWrap } from "./CoinChartChange.styles";

const CoinChartChange = () => {
  return (
    <InputContainer>
      <InputWrap>
        <Input type="radio" />
        <span>1d</span>
      </InputWrap>
      <InputWrap>
        <Input type="radio" />
        <span>1w</span>
      </InputWrap>
      <InputWrap>
        <Input type="radio" />
        <span>1m</span>
      </InputWrap>
      <InputWrap>
        <Input type="radio" />
        <span>3m</span>
      </InputWrap>
      <InputWrap>
        <Input type="radio" />
        <span>6m</span>
      </InputWrap>
      <InputWrap>
        <Input type="radio" />
        <span>1y</span>
      </InputWrap>
    </InputContainer>
  );
};

export default CoinChartChange;
