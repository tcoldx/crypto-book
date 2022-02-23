import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  gap: 28px;

  @media (max-width: 799px) {
    gap: 8px;
    width: 100%;
  }
`;
export const DayButton = styled.button`
  height: 22px;
  width: 22px;
  border: 1px solid rgb(0, 255, 95);
  border-radius: 50%;
  box-shadow: ${({ active }) =>
    active ? "rgb(0 255 95 / 25%) 0px 0px 0px 5px" : "transparent"};
  background: ${({ active }) => (active ? "rgb(0, 255, 95)" : "transparent")};
`;

export const DayBorder = styled.div`
  height: 22px;
  width: 22px;
  border: 1px solid rgb(0, 255, 95);
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  margin-left: 10px;
`;
