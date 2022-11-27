import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const StyledLink = styled(Link)`
text-decoration: underline;
color: ${props => props.theme.color};
`

export const ContWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const RowWrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
align-items: center;
padding: 10px;  

& .nameCon {
display: flex;
width: 10rem;
justify-content: flex-start;
align-items: center;
gap: 4px;
}

& .priceCon {
  display: flex;
}

&:hover {
    background: ${props => props.theme.card.secondary};
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
`

export const Header = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
align-items: center;
border-top: 1px solid white;
border-bottom: 1px solid white;
padding: 10px;
`

export const Span = styled.div.attrs((props) => ({
    style: {
      color: `${props.color}`,
    },
  }))``;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
background: ${props => props.theme.main};
box-shadow: 1px 1px 10px rgba(0,0,0,.5);
`