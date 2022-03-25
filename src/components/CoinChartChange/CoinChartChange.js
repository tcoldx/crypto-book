import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCoinChartData } from "../../store/coin/actions";
import {
  InputContainer,
  DayButton,
  ButtonWrap,
  Span,
} from "./CoinChartChange.styles";

const days = [
  { id: 1, value: 1, name: "1d" },
  { id: 5, value: 7, name: "7d" },
  { id: 12, value: 30, name: "30d" },
  { id: 4, value: 90, name: "90d" },
  { id: 77, value: 365, name: "1y" },
  { id: 23, value: 720, name: "max" },
];

const CoinChartChange = () => {
  const [duration, setDuration] = useState("30");
  const [active, setActive] = useState("7d");
  const dispatch = useDispatch();
  const handleClick = (item) => {
    setDuration(item.value);
    setActive(item.name);
  };

  useEffect(() => {
    dispatch(getCoinChartData(duration));
    // eslint-disable-next-line
  }, [duration]);
  return (
    <InputContainer>
      {days.map((el) => {
        const isActive = el.name === active;

        return (
          <ButtonWrap key={el.id}>
            <DayButton
              active={isActive}
              key={el.id}
              type="radio"
              value={el.value}
              onClick={() => handleClick(el)}
            />
            <Span>{el.name}</Span>
          </ButtonWrap>
        );
      })}
    </InputContainer>
  );
};

export default CoinChartChange;
