import styled from "styled-components";

export const CoinWrap = styled.div`
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
`;

export const Table = styled.table`
  color: white;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color};
  letter-spacing: 0.01071em;
  border-collapse: collapse;
`;

export const OuterDiv = styled.div`
  width: 100%;
`;

export const TH = styled.th`
  padding-block: 24px;
  font-size: 11px;
  font-weight: bold;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;
