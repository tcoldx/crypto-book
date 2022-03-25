import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.card.main};
  margin: auto;
  border: 10px solid ${(props) => props.theme.main};
`;
