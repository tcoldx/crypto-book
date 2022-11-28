import styled from "styled-components";

export const Containment = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 73%;
  gap: 10px;
  margin-left: 10px;
`;

export const Mid = styled.div`
display: flex;
margin-top: 10px;
justify-content: center;
align-items: center;
width: 80%;
& .search {
  border-radius: 6px;
  border: none;
  outline: none;
  margin-left: 10px;
  color: white;
  background: ${(props) => props.theme.card.secondary};
}
`
export const SearchWrap = styled.div`
display: flex;
align-items: center;
background: ${(props) => props.theme.card.secondary};
border-radius: 6px;
height: 36px;
width: 90%;
& img {
  margin-left: 10px;
}
`

export const Bottom = styled.div`
  width: 73%;
  background: ${props => props.theme.main};
  height: fit-content;
  display: flex;
  flex-direction: column;
  & .coinlist {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin: 10px;
   &:hover {
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
   }
  }

  & .coinlist-link {
    text-decoration: none;
    color: white;
  }
`