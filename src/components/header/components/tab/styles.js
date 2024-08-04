import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0.4rem 1rem;
  ${({ selected }) =>
    selected
      ? css`
          background-color: rgba(55, 57, 63, 1);
        `
      : css``}
  border-radius: 6px;
  cursor: pointer;
`;
