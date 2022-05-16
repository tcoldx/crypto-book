import styled from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  color: ${(props) => props.theme.color};
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 25px;
`;

export const NavUnderContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.main};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 760px) {
    width: 100%;
    background: #2c2d33;
  }
`;

export const NavUnderWrap = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: space-around;
  font-size: 12.4px;
  font-weight: bold;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const PercentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2px;
`;

export const Percentages = styled.div`
  font-size: 12px;
`;

export const BarContainer = styled.div`
  background: #2172e5;
  border-radius: 10px;
  width: 40px;
  height: 8px;
`;

export const Percentage = styled.div`
  background: ${(props) => props.theme.color};
  border-radius: 10px;
  width: ${(props) => props.market / props.volume}px;
  height: 8px;
`;

export const VolumePercentage = styled.div`
  background: ${(props) => props.theme.color};
  border-radius: 10px;
  width: ${(props) => props.market};
  height: 8px;
`;

export const MarketCapWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 999px) {
    display: none;
  }
`;

export const CoinAndExchange = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1299px) {
    display: none;
  }
`;

export const EthereumWrap = styled.div`
  @media (max-width: 469px) {
    display: none;
  }
`;
