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
