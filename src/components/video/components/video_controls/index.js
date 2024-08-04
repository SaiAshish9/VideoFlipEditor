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
  SoundIcon,
} from "./styles";
import PlayImg from "assets/play.svg";
import SoundImg from "assets/sound.svg";

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
          <SoundIcon alt="img" src={SoundImg} />
          <MuteSlider tooltip={{ formatter: null }} />
        </SoundContainer>
      </ControlsContainer>
    </Container>
  );
};

export default VideoControls;
