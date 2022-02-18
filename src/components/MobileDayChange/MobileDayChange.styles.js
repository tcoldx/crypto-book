import styled from "styled-components";

export const DayWrap = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  background: #2c2d33;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 899px) {
    margin-top: 30px;
  }
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Day = styled.span`
  cursor: pointer;
`;

export const DayItemWrap = styled.div`
  background: #00ff5f;
  width: 40px;
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
`;
