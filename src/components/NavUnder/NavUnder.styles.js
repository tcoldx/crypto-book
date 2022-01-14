import styled from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  color: ${(props) => props.theme.color};
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 25px;
`;

export const NavUnderContainer = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.main};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
