import React from "react";
import { VideoContainer, VideoContent } from "./styles";
import { VideoControls } from "./components";

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <VideoContent />
      <VideoControls />
    </VideoContainer>
  );
};

export default VideoPlayer;
