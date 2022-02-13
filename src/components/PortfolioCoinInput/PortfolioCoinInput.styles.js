import styled from "styled-components";

export const SelectCoinWrap = styled.div`
  position: absolute;
  border-radius: 6px;
  top: 45%;
  background: #2c2f36;
`;

export const SelectCoin = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const Loader = styled.span`
  display: ${(props) => props.display};
`;

export const Input = styled.input`
  background: #191b1f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
