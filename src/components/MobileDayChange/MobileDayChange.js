import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChartData } from "../../store/coins/actions";
import {
  DayWrap,
  DayContainer,
  Day,
  DayItemWrap,
  Container,
} from "./MobileDayChange.styles";

const days = [
  { id: 1, name: "1d", value: 1 },
  { id: 2, name: "1w", value: 7 },
  { id: 13, name: "1mo", value: 30 },
  { id: 44, name: "3mo", value: 90 },
  { id: 6, name: "6mo", value: 180 },
  { id: 21, name: "1y", value: 365 },
];

const MobileDayChange = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState("30");
  const [active, setActive] = useState("1d");

  const handleClick = (item) => {
    setDay(item.value);
    setActive(item.name);
  };

  const { currentCurrency } = useSelector((state) => state.global);

  useEffect(() => {
    dispatch(getChartData(day, currentCurrency));
    // eslint-disable-next-line
  }, [day, currentCurrency]);

  return (
    <Container>
      <DayWrap>
        <DayContainer>
          {days.map((el) => {
            const isActive = el.name === active;
            return (
              <DayItemWrap
                active={isActive}
                key={el.id}
                onClick={() => handleClick(el)}
              >
                <Day>{el.name}</Day>
              </DayItemWrap>
            );
          })}
        </DayContainer>
      </DayWrap>
    </Container>
  );
};

export default MobileDayChange;
