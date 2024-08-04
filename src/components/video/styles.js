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
  height: 305px;
  max-height: 305px;
  min-height: 305px;
  width: 305px;
  max-width: 305px;
  min-width: 305px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ left }) => left ?? 0};
  border: 1px solid #fff;
  cursor: grab;
  z-index: 1000;
`;
