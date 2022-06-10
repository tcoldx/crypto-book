import styled from "styled-components";
import { Link } from "react-router-dom";

export const Row = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const TD = styled.td`
  font-size: 12px;
  @media (max-width: 1200px) {
    padding-block: 24px;
  }

  &:nth-child(9) {
    width: 180px;

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

export const ContWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const RankWrap = styled.div`
  margin: 0px 10px;
`;

export const NameColumn = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: flex-start;
`;

export const Span = styled.div.attrs((props) => ({
  style: {
    color: `${props.color}`,
  },
}))``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PercentageBar = styled.div`
  background: #ffdcce;
  height: 0.35rem;
  width: 8rem;
  border-radius: 25rem;
  margin-top: 4px;
`;

export const Market = styled.div`
  max-width: ${(props) => props.marketCap / props.volume}px;
  background: red;
  height: 0.35rem;
  border-radius: 25rem;
`;

export const Supply = styled.div`
  max-width: ${(props) => props.supply / props.circulating}px;
  background: red;
  height: 0.35rem;
  border-radius: 25rem;
`;

export const Bullet = styled.span`
  margin-right: 6px;
`;

export const MarketWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;
