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
  width: 50%;
  height: 60px;
  font-weight: bold;
  margin: auto;
  border-radius: 10px;
  color: ${(props) => props.theme.color};

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 799px) {
    width: 70%;
  }
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 899px) {
    margin-top: 10px;
  }

  @media (max-width: 899px) {
    display: none;
  }
`;

export const StatMenuContainer = styled.div`
  position: fixed;
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
  margin-right: 13px;
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 90%;
`;

export const StatMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2c2f36;
  width: 55%;
  border-radius: 10px;

  @media (max-width: 799px) {
    width: 90%;
    height: 76%;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CoinTopContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  width: 100%;

  @media (max-width: 899px) {
    margin: 0;
    gap: 10px;
    align-items: center;
    flex-direction: column;
  }
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #191b1f;
  border-radius: 10px;
  width: 155px;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
  width: 50%;

  @media (max-width: 799px) {
    width: 70%;
    padding: 20px 12px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
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
  font-weight: bold;
`;

export const StatHeader = styled.div`
  margin-bottom: 12px;
  width: 72.5%;
  margin-top: 7px;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 15px;

  @media (min-width: 1200px) {
    display: none;
  }
`;
