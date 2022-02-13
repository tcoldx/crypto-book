import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AssetButton = styled.button`
  background: #06d554;
  width: 400px;
  height: 60px;
  font-weight: bold;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 16px;
`;

export const StatMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 35%;
  left: 70%;
  margin-right: 13px;
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

export const StatMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2c2f36;
  width: 687px;
  height: 38%;
  border-radius: 10px;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CoinTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #191b1f;
  border-radius: 10px;
  width: 155px;
  justify-content: center;
  align-items: center;
`;

export const InnerCoinCard = styled.div`
  background: #1f2128;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const CoinSelectors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 200px;
  height: 39px;
  font-weight: bold;
  color: #06d554;
  background: #ffffff;
`;

export const Span = styled.span`
  font-size: 15px;
`;
