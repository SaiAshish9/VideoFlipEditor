import React from "react";
import {
  Container,
  CurrentTimelineText,
  PlayIcon,
  Slider,
  SliderContainer,
  TimelineTextContainer,
  TotalTimeDuration,
  SoundContainer,
  ControlsContainer,
  MuteSlider,
} from "./styles";
import PlayImg from "assets/play.svg";

const VideoControls = () => {
  return (
    <Container>
      <SliderContainer>
        <PlayIcon src={PlayImg} alt="img" />
        <Slider tooltip={{ formatter: null }} />
      </SliderContainer>
      <ControlsContainer>
        <TimelineTextContainer>
          <CurrentTimelineText>00:10:09</CurrentTimelineText>
          <TotalTimeDuration>00:15:17</TotalTimeDuration>
        </TimelineTextContainer>
        <SoundContainer>
          <MuteSlider tooltip={{ formatter: null }} />
        </SoundContainer>
      </ControlsContainer>
    </Container>
  );
};

export default VideoControls;
