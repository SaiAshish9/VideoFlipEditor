import React, { useRef, useState, useEffect } from "react";
import { GridCell, Overlay, VideoContainer, VideoContent } from "./styles";
import {
  DropdownOptions,
  VideoControls,
} from "./components";
import ReactPlayer from "react-player";
import { VIDEO_PLAYER_WIDTH, VIDEO_PLAYER_HEIGHT } from "constants/index";

const VideoPlayer = () => {
  const ref = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Ensure the overlay doesn't go beyond the horizontal boundaries
      if (newX < 0) newX = 0;
      if (newX + VIDEO_PLAYER_HEIGHT > VIDEO_PLAYER_WIDTH) newX = VIDEO_PLAYER_WIDTH - VIDEO_PLAYER_HEIGHT;

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const initialX = (VIDEO_PLAYER_WIDTH - VIDEO_PLAYER_HEIGHT) / 2;
    const initialY = 0;
    setPosition({ x: initialX, y: initialY });
  }, [VIDEO_PLAYER_WIDTH, VIDEO_PLAYER_HEIGHT]);

  // move to draggable

  return (
    <VideoContainer>
      <VideoContent>
        <ReactPlayer
          ref={ref}
          muted={true}
          loop={true}
          onEnded={() => {}}
          onProgress={() => {}}
          height={VIDEO_PLAYER_HEIGHT}
          width={"auto"}
          url={
            "https://cdn.loom.com/sessions/thumbnails/313bf71d20ca47b2a35b6634cefdb761-00001.mp4"
          }
          playing={false}
        />
        <Overlay
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          left={`${position.x}px`}
        >
          {[...Array(9)].map((_, i) => (
            <GridCell key={i} />
          ))}
        </Overlay>
      </VideoContent>
      <VideoControls />
      <DropdownOptions />
    </VideoContainer>
  );
};

export default VideoPlayer;
