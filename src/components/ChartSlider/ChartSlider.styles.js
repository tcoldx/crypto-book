import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  background: #2c2d33;
  position: relative;
  margin-top: 15px;
  padding: 15px;
  border-radius: 10px;
`;

export const ChartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SliderButton = styled.div`
  position: absolute;
  top: 10%;
  margin-inline: 15px;
  left: ${(props) => (props.left ? props.left : "")};
  right: ${(props) => (props.right ? props.right : "")};
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  font-size: 35px;
  cursor: pointer;
  outline: inherit;
  z-index: 10;
`;
