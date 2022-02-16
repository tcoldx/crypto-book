import styled from "styled-components";

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.color};
`;

export const Content = styled.div`
  width: 90%;
`;

export const Overview = styled.h1`
  margin-top: 30px;
  font-size: 1.3rem;
`;

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const MobileChartWrap = styled.div`
  display: none;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  background: ${(props) => props.theme.main};

  @media (max-width: 899px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
