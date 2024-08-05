import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { VideoContent } from "components/video/styles";
import ReactPlayer from "react-player";
import { Overlay } from "components/video/styles";
import { GridCell } from "components/video/styles";
import { VIDEO_PLAYER_HEIGHT, TABS } from "constants/index";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SessionContainer = ({
  setCurrentFrame,
  recordedData,
}) => {
  const ref = useRef();
  const [overlayLeftPosition, setOverlayLeftPosition] = useState(0);
  const [volume, setVolume] = useState(volume);
  const [playbackRate, setPlaybackRate] = useState(0);
  const [playerWidth, setPlayerWidth] = useState(VIDEO_PLAYER_HEIGHT);
  const [isPlaying, setIsPlaying] = useState(true);

  const onStart = async () => {
    setIsPlaying(true);
    for (let index = 0; index < recordedData.length; index++) {
      setCurrentFrame(index + 1);
      const item = recordedData[index];
      ref?.current?.seekTo(item.timeStamp);
      setOverlayLeftPosition(item.coordinates[0]);
      setPlayerWidth(item.coordinates[2]);
      setVolume(item.volume);
      setPlaybackRate(+item.playbackRate);
      setTimeout(() => {}, 1000);
      setIsPlaying(false);
      await sleep(1000);
    }
  };

  useEffect(() => {
    onStart();
  }, []);

  return (
    <Container>
      <VideoContent>
        <ReactPlayer
          ref={ref}
          volume={volume}
          loop={false}
          onEnded={() => {}}
          onProgress={() => {}}
          height={VIDEO_PLAYER_HEIGHT}
          playbackRate={+playbackRate}
          width={"auto"}
          url={
            "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4"
          }
          playing={isPlaying}
          config={{
            file: {
              attributes: {
                crossOrigin: "anonymous",
              },
            },
          }}
          onStart={() => {}}
        />
        <Overlay left={`${overlayLeftPosition}px`} width={playerWidth}>
          {[...Array(9)].map((_, i) => (
            <GridCell key={i} width={playerWidth} />
          ))}
        </Overlay>
      </VideoContent>
    </Container>
  );
};

export default SessionContainer;
