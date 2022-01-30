import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCoinChartData } from "store/coin/actions";
import {
  InputContainer,
  DayButton,
  ButtonWrap,
} from "./CoinChartChange.styles";

const CoinChartChange = () => {
  const [duration, setDuration] = useState("30");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setDuration(e.target.value);
  };

  useEffect(() => {
    dispatch(getCoinChartData(duration));
    // eslint-disable-next-line
  }, [duration]);
  return (
    <InputContainer>
      <ButtonWrap>
        <DayButton type="radio" value="1" onClick={handleClick} />
        <span>1d</span>
      </ButtonWrap>
      <ButtonWrap>
        <DayButton type="radio" value="7" onClick={handleClick} />
        <span>7d</span>
      </ButtonWrap>
      <ButtonWrap>
        <DayButton type="radio" value="30" onClick={handleClick} />
        <span>30d</span>
      </ButtonWrap>
      <ButtonWrap>
        <DayButton type="radio" value="90" onClick={handleClick} />
        <span>90d</span>
      </ButtonWrap>
      <ButtonWrap>
        <DayButton type="radio" value="365" onClick={handleClick} />
        <span>1y</span>
      </ButtonWrap>
      <ButtonWrap>
        <DayButton type="radio" value="720" onClick={handleClick} />
        <span>max</span>
      </ButtonWrap>
    </InputContainer>
  );
};

export default CoinChartChange;
