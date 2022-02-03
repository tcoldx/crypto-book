import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AssetButton = styled.button`
  background: #06d554;
  width: 400px;
  height: 60px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 16px;
`;

export const StatMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  position: relative;
  float: right;
  margin-right: 13px;
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

export const StatMenuWrap = styled.div`
  background: #2c2f36;
  width: 687px;
  height: 38%;
  border-radius: 10px;
`;
