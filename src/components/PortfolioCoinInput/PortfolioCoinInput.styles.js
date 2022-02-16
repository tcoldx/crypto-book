import styled from "styled-components";

export const SelectCoinWrap = styled.div`
  position: absolute;
  top: 45%;
  border-radius: 6px;
  height: 140px;
  overflow: hidden;
  background: #2c2f36;
`;

export const SelectCoin = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
`;

export const Loader = styled.span`
  display: ${(props) => props.display};
`;

export const Input = styled.input`
  background: #191b1f;
  color: ${(props) => props.theme.color};
  border: none;
  padding: 12px;
  border-radius: 10px;
  outline: none;
  font-weight: bold;
  ::placeholder {
    font-weight: 1;
    opacity: 0.7;
  }
  &:required {
    border: 1px solid red;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
