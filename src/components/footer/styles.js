import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid rgba(73, 76, 85, 1);
  padding: 0 1.5rem;
  padding-top: 1.4rem;
  padding-bottom: 1.8rem;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: cneter;
  justify-content: space-between;
  width: 100%;
  left: 0;
  right: 0;
  box-sizing: border-box;
`;

export const Button = styled.div`
  background-color: rgba(124, 54, 214, 1);
  border-radius: 10px;
  padding: 9px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 10px;
  opacity: ${({ active }) => (active ? "1" : "0.5")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: cneter;
  justify-content: space-between;
  width: fit-content;
`;

export const CancelButton = styled.div`
  background-color: rgba(69, 71, 78, 1);
  border-radius: 10px;
  padding: 9px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;
