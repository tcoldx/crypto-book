import styled from "styled-components";

export const CoinWrap = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
`;

export const Table = styled.table`
  color: white;
  width: 100%;
  text-align: center;
  letter-spacing: 0.01071em;
  border-collapse: collapse;
`;

export const OuterDiv = styled.div`
  width: 100%;
`;

export const TH = styled.th`
  padding-block: 24px;
  font-size: 11px;
  border-bottom: 1px solid #707070;
`;
