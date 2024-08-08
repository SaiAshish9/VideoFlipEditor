import { VIDEO_PLAYER_HEIGHT, VIDEO_PLAYER_WIDTH } from "constants/index";
import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  text-align: center;
  flex-grow: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const PreviewText = styled.p`
  justify-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
`;

export const PreviewImg = styled.img`
  height: ${VIDEO_PLAYER_HEIGHT}px;
  width: ${({ width }) => width}px;
`;

export const CroppedVideoContent = styled.div`
  position: relative;
  height: ${VIDEO_PLAYER_HEIGHT}px;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  video {
    position: relative;
    left: ${({ left, playerWidth }) =>
      `calc(50% - ${+playerWidth}px / 2 - ${left > 0 ? left : 0}px)`};
  }
`;

export const VideoOverlayParentContainer = styled.div`
  width: 100%;
  height: ${VIDEO_PLAYER_HEIGHT}px;
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content space-between;
`;

export const HideContainer = styled.div`
  height: 100%;
  width: calc((100% - ${({ playerWidth }) => +playerWidth}px) / 2);
  background-color: rgba(55, 57, 63, 1);
`;

export const VideoOverlay = styled.div`
  height: ${VIDEO_PLAYER_HEIGHT}px;
  width: ${({ playerWidth }) => +playerWidth}px;
`;
