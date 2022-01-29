import styled from "styled-components";
import { Link } from "react-router-dom";

export const Row = styled.tr`
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const TD = styled.td`
  font-size: 11px;
  padding-block: 24px;
  font-weight: bold;
`;

export const RankWrap = styled.div`
  margin: 0px 10px;
`;

export const NameColumn = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: flex-start;
  width: 90px;
`;

export const Span = styled.div`
  color: ${(props) => props.color};
`;

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
