import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Input,
  SelectCoinWrap,
  SelectCoin,
  InputContainer,
} from "./PortfolioCoinInput.styles";

const PortfolioCoinInput = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const maxDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    return setCurrentDate(today);
  };
  useEffect(() => {
    maxDate();
  }, []);
  return (
    <InputContainer>
      <Input
        onChange={(e) => props.handleChange(e)}
        autoComplete="off"
        type="search"
        value={props.coinData.name}
        nameError={props.nameError}
        placeholder="Select Coins"
      />
      <Input
        className={props.amountError ? "error" : ""}
        type="number"
        placeholder="Purchased Amount"
        min={0}
        amountError={props.amountError}
        value={props.coinData.amount}
        onChange={(e) => props.handleAmountChange(e)}
      />
      <Input
        type="date"
        max={currentDate}
        dateError={props.dateError}
        placeholder="Purchased Date"
        onChange={(e) => props.handleDateChange(e)}
      />
      {props.close ? null : (
        <SelectCoinWrap>
          {props.loading
            ? "loading..."
            : props.coinList?.map((el) => {
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
