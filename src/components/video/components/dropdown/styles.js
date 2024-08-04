import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const DropdownParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.25rem;
`;

export const DropdownContainer = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(69, 71, 78, 1);
  padding: 7px 10px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DropdownText = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: 200;
  padding: 0px;
  margin: 0px;
`;
