import styled from "styled-components";

export const CoinNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 34vh;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

export const CoinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const TopContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 799px) {
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CoinMarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background: ${(props) => props.theme.main};
  width: 35%;

  @media (max-width: 799px) {
    width: 100%;
    padding: 10px;
    background: #2c2d33;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.color};
`;

export const CoinPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.main};
  width: 30%;

  @media (max-width: 799px) {
    width: 100%;
    padding: 10px;
  }
`;

export const ATH = styled.span`
  font-weight: bold;
`;

export const ImageWrap = styled.div`
  background: ${(props) => props.theme.card.main};
  border-radius: 10px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`;

export const WebsiteLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.main};
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  width: 100%;

  @media (max-width: 799px) {
    background: #2c2d33;
    padding: 25px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const AllTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  margin-top: 10px;
`;

export const CoinMarketWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AllTimeWrapper = styled.div`
  display: flex;
`;
export const StatColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-block: 4px;
`;

export const PlusImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ColSpan = styled.span`
  font-weight: bold;
  margin-right: 3px;
`;

export const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PercentWrap = styled.div`
  width: 65%;
  height: 8px;
  background: #fe8c01;
  border-radius: 10px;
`;

export const Percentage = styled.div`
  background: #fee158;
  width: ${(props) => props.volume / props.price};
`;
