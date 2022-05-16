import styled from "styled-components";

export const ChartContainer = styled.div`
  text-align: center;
  width: 48.5%;
  border-radius: 6px;
  background: ${(props) => props.theme.main};
`;

export const ChartWrap = styled.div`
  padding: 10px 25px;
`;

export const ChartLegendWrap = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;

export const ChartContainerLoading = styled.div`
  text-align: center;
  display: flex;
  width: 48.5%;

  align-items: center;
  justify-content: center;
  height: 270px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
`;
