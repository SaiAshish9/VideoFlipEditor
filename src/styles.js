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
    overflow-y: scroll;
    margin-left: 1.5rem;
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
  padding-top: 0.5rem;
`;

export const SessionParentContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 60vw;
`;
