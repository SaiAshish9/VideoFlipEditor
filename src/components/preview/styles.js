import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  text-align: center;
  flex-grow: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const PreviewText = styled.p`
  justify-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`;

export const PreviewImg = styled.img`
  height: 307px;
  width: fit-content;
`;
