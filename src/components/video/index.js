import React from "react";
import { VideoContainer, VideoContent } from "./styles";
import { DropdownOptions, VideoControls } from "./components";

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <VideoContent />
      <VideoControls />
      <DropdownOptions />
    </VideoContainer>
  );
};

export default VideoPlayer;
