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
`;
