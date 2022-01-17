import styled from "styled-components";

export const ThemeChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.secondary};
  cursor: pointer;
`;
