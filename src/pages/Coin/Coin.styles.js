import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color};
`;


export const H4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const DescriptionContainer = styled.div`
  padding: 24px;
  border-radius: 10px;
  font-size: 13px;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.color};

  @media (max-width: 799px) {
    width: 100%;
  }
`;

export const WebsiteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 799px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const SiteLink = styled.a`
  margin-top: 20px;
  background: ${(props) => props.theme.main};
  display: flex;
  width: 80%;
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  align-items: center;
  padding: 13px;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 799px) {
    width: 100%;
    background: #2c2d33;
  }
`;

export const SiteInner = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

export const ChartContain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
