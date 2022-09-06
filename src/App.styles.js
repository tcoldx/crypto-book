import styled from "styled-components";
import {ToastContainer} from "react-toastify";

export const Container = styled.div`
  background: ${(props) => props.theme.card.main};
  margin: auto;
  border: 10px solid ${(props) => props.theme.main};
  font-family: Poppins, sans-serif;

`;

export const StyledNotify = styled(ToastContainer)`
.Toastify__toast {
  background: ${props => props.theme.card.main};
  color: ${props => props.theme.color}
}

.Toastify__progress-bar {
  background: #06d554;
}
`