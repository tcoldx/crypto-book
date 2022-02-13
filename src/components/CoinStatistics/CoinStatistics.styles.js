import styled from "styled-components";

export const Container = styled.div``;

export const StatWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  flex-grow: column;
`;

export const StatLeft = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 180px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const CoinContainer = styled.div`
  background: ${(props) => props.theme.card.main};
  width: 100px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const StatRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MarketStatContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 900px;
  height: 60px;
  align-items: center;
`;

export const MarketStatWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const CoinStatContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 900px;
  height: 60px;
  align-items: center;
`;

export const CoinStatWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Span = styled.span`
  color: #00fc2a;
  margin-left: 6px;
`;

export const Name = styled.div`
  font-size: 10px;
`;
