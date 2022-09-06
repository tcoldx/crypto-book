import styled from "styled-components";

export const CoinWrap = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px -1px #414241;
`;

export const Table = styled.table`
  color: white;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.color};
  letter-spacing: 0.01071em;
  border-collapse: collapse;

  & thead {
  }
`;

export const SortSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    grid-gap: 10px;
  }
`;

export const Option = styled.div`
  background: ${({ active, theme }) =>
    active ? "rgb(0, 255, 95)" : theme.card.main}};
  padding: 10px;
  border-radius: 9px;
  cursor: pointer;

 
`;

export const HeaderWrap = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
justify-content: space-between;
align-items: center;
`

export const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TH = styled.th`
  font-size: 11px;
  font-weight: bold;
padding-block: 12px;
  &:nth-child(9) {
    @media (max-width: 1219px) {
      display: none;
    }
  }
  &:nth-child(8) {
    @media (max-width: 1099px) {
      display: none;
    }
  }
  &:nth-child(7) {
    @media (max-width: 899px) {
      display: none;
    }
  }
  &:nth-child(6) {
    @media (max-width: 767px) {
      display: none;
    }
  }
  &:nth-child(5) {
    @media (max-width: 320px) {
      display: none;
    }
  }
  &:nth-child(4) {
    @media (max-width: 309px) {
      display: none;
    }
  }
  &:nth-child(1) {
    @media (max-width: 369px) {
      display: none;
    }
  }
`;
