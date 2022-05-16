import styled from "styled-components";

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.color};
`;

export const Content = styled.div`
  width: 75%;
`;

export const Overview = styled.h1`
  margin-top: 30px;
  font-size: 1rem;
  font-weight: normal;
  @media (max-width: 899px) {
    display: none;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const MobileChartWrap = styled.div`
  display: none;
  width: 100%;
  border-radius: 10px;
  position: relative;
  @media (max-width: 899px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterPortfolio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  background: ${(props) => props.theme.main};

  & a {
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 2px;
    color: ${(props) => props.theme.card.main};
    background: ${(props) => props.theme.color};
  }
`;

export const PortfolioWrap = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-around;
`;
