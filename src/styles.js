import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SessionContainer = styled.div`
  pre {
    color: #fff;
    height: 80vh;
    overflow-y: scroll;
    margin-left: 5rem;
    margin-top: 0;
    text-align: start;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
    }
  }
  padding-left: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
