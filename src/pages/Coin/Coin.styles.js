import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.color};
`;

export const H4 = styled.h4`
  margin-top: 20px;
  margin-left: 38px;
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
`;

export const WebsiteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SiteLink = styled.a`
  margin-top: 20px;
  background: ${(props) => props.theme.main};
  display: flex;
  width: 80%;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  align-items: center;
  padding: 13px;
  justify-content: center;
  border-radius: 10px;
`;

export const SiteInner = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color};
`;
