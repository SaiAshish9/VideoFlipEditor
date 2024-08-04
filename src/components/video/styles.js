import styled from "styled-components";

export const VideoContainer = styled.div`
  padding-left: 1.5rem;
  padding-top: 0.5rem;
`;

export const VideoContent = styled.div`
  background-color: rgba(0, 0, 0, 0.29);
  height: 307px;
  width: 450px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.29);
  height: 307px;
  max-height: 307px;
  min-height: 307px;
  width: 307px;
  max-width: 307px;
  min-width: 307px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ left }) => left ?? 0};
  border: 1px dotted #fff;
  cursor: grab;
  z-index: 1000;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const GridCell = styled.div`
  width: calc(305px / 3);
  height: calc(305px / 3);
  border: 0.5px dotted #fff;
  box-sizing: border-box;
`;
