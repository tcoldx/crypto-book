import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

export const ConvertWrap = styled.div`
  display: flex;
  gap: 28px;
`;

export const ConvertContainer = styled.div`
  display: flex;
`;

export const CoinName = styled.div`
  background: #06d554;
  font-weight: bold;
  font-size: 12px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px;
`;

export const InputWrap = styled.div`
  background: ${(props) => props.theme.card.secondary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.card.secondary};
  color: ${(props) => props.theme.color};
  height: 30px;
  border: 0;
  width: 90%;
`;
