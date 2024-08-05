import React, { useImperativeHandle, useMemo } from "react";
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
import { IoIosPause } from "react-icons/io";
import moment from "moment";

const VideoControls = React.forwardRef(
  (
    {
      isPlaying,
      setIsPlaying,
      duration,
      progress,
      onSliderChange,
      setProgress,
    },
    ref
  ) => {
    function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      setIsPlaying((p) => !p);
    }

    const TOTAL_DURATION = useMemo(() => {
      return Math.round(duration, 10);
    }, [duration]);

    useImperativeHandle(ref, () => ({
      setProgressBarValue: (val) => {
        setProgress(val);
      },
    }));

    const formatDuration = (seconds) => {
      const duration = moment.duration(seconds, "seconds");
      const hours = Math.floor(duration.asHours());
      const minutes = Math.floor(duration.minutes());
      const sec = Math.floor(duration.seconds());

      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(sec).padStart(2, "0")}`;
    };

    useImperativeHandle(ref, () => ({
      setProgressBarValue: (val) => {
        setProgress(val);
      },
    }));

    return (
      <Container>
        <SliderContainer>
          {!isPlaying ? (
            <PlayIcon onClick={handleClick} src={PlayImg} alt="img" />
          ) : (
            <IoIosPause
              style={{ cursor: "pointer" }}
              onClick={handleClick}
              size={24}
              color="#fff"
            />
          )}
          <Slider
            max={TOTAL_DURATION}
            onChange={onSliderChange}
            value={progress * duration}
            tooltip={{ formatter: null }}
          />
        </SliderContainer>
        {
          <ControlsContainer>
            <TimelineTextContainer>
              <CurrentTimelineText>
                {formatDuration(duration * progress)}
              </CurrentTimelineText>
              <TotalTimeDuration>{formatDuration(duration)}</TotalTimeDuration>
            </TimelineTextContainer>
            <SoundContainer>
              <SoundIcon alt="img" src={SoundImg} />
              <MuteSlider tooltip={{ formatter: null }} />
            </SoundContainer>
          </ControlsContainer>
        }
      </Container>
    );
  }
);

export default VideoControls;
