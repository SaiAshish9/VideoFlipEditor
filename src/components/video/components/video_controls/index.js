import React from "react";
import { Container, PlayIcon } from "./styles";
import PlayImg from "assets/play.svg";

const VideoControls = () => {
  return (
    <Container>
      <PlayIcon src={PlayImg} alt="img" />
    </Container>
  );
};

export default VideoControls;
