import styled, { css } from "styled-components";

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

export const DropdownContainerWrapper = styled.div`
  position: relative;
  margin-right: 5px;
  height: 26px;
`;

export const DropdownList = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  top: 36px;
  border: 1px solid rgba(69, 71, 78, 1);
  z-index: 100;
  background-color: rgba(55, 57, 63, 1);
  max-height: 7.3rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
`;

export const DropdownListItem = styled.p`
  max-width: 100%;
  padding: 7px 10px;
  font-size: 12px;
  color: #fff;
  font-weight: 200;
  margin: 0px;
  cursor: pointer;
  &:hover {
    background-color: rgba(69, 71, 78, 1);
  }
  ${({ selected }) =>
    selected
      ? css`
          background-color: rgba(69, 71, 78, 1);
        `
      : css``}
`;

export const DropdownContainer = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(69, 71, 78, 1);
  padding: 7px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownText = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: 200;
  padding: 0px;
  margin: 0px;
`;

export const DropdownTextSpan = styled.p`
  font-size: 12px;
  color: rgba(155, 166, 171, 1);
  font-weight: 200;
  padding: 0px;
  margin: 0px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
`;
