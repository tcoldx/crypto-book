import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 48.5%;
  border-radius: 10px;
  background: ${(props) => props.theme.main};
`;

export const ChartWrap = styled.div`
  padding: 24px;
`;

export const ChartLegendWrap = styled.div`
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
`;
