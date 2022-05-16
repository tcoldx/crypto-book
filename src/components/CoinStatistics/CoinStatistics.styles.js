import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  margin: 10px;

  @media (max-width: 899px) {
    width: 500px;
    flex-direction: column;
    align-items: center;
  }
`;

export const StatLeft = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  height: 200px;
  border-radius: 10px;
  width: 180px;
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
  margin-left: 12px;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 799px) {
    gap: 20px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  width: 100%;
  gap: 6px;
`;

export const MarketStatContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  align-items: center;

  @media (max-width: 799px) {
    height: fit-content;
    background: none;
  }
`;

export const MarketStatWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 12px;
  width: 100%;

  @media (max-width: 799px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MarketHeader = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const CoinHeader = styled.div`
  font-weight: bold;
`;

export const CoinOptions = styled.div`
  display: flex;
  gap: 10px;
`;

export const TrashDiv = styled.div`
  background: ${(props) => props.theme.card.secondary};
  height: 23px;
  width: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: red;
  border-radius: 7px;
`;

export const PencilDiv = styled.div`
  background: ${(props) => props.theme.card.secondary};
  height: 23px;
  width: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: gold;
  border-radius: 7px;
`;

export const StatContent = styled.div`
  @media (max-width: 899px) {
    display: flex;
    justify-content: flex-start;
    background: #2c2d33;
    font-size: 15px;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    height: 60px;
    width: 100%;
  }
`;

export const CoinStatContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  align-items: center;

  @media (max-width: 799px) {
    height: fit-content;
    background: none;
  }
`;

export const CoinStatWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  @media (max-width: 799px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Span = styled.span`
  color: #00fc2a;
  margin-left: 6px;
`;

export const Name = styled.div`
  font-size: 11px;
  margin-top: 5px;
`;

export const BarContainer = styled.div`
  background: #2172e5;
  border-radius: 10px;
  width: 60px;
  height: 8px;
`;
export const Percentage = styled.div`
  background: ${(props) => props.theme.color};
  border-radius: 10px;
  width: ${(props) => props.marketAndVolume}px;
  height: 8px;
`;

export const MarketColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BarWrap = styled.div`
  margin-left: 6px;
  max-width: 80px;
  border-radius: 10px;
`;
