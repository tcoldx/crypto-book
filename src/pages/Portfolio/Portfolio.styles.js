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
  background: #2c2f36;
  color: ${(props) => props.theme.color};
  width: 400px;
`;
