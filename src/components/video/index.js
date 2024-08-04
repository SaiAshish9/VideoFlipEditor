import React, { useRef, useState, useEffect } from "react";
import { Overlay, VideoContainer, VideoContent } from "./styles";
import { DropdownOptions, VideoControls } from "./components";
import ReactPlayer from "react-player";

const parentHeight = 307;
const parentWidth = 450;

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
      if (newX + 307 > parentWidth) newX = parentWidth - 307;

      // Ensure the overlay doesn't go beyond the vertical boundaries
      if (newY < 0) newY = 0;
      if (newY + 307 > parentHeight) newY = parentHeight - 307;

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    const initialX = (parentWidth - 305) / 2;
    const initialY = (parentHeight - 305) / 2;
    setPosition({ x: initialX, y: initialY });
  }, [parentWidth, parentHeight]);

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
          height={307}
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
          <div style={{ height: "305px", width: "305px", display: "flex" }}>
            {Array.from({ length: 3 }, (_, i) => i + 1).forEach(
              (item, key) => (
                <div
                  key={item}
                  style={{
                    height: "100%",
                    width: `${305 / 2}px`,
                    borderRight: item < 2 ? "1px solid #fff" : "none",
                    position: "relative",
                  }}
                />
              )
            )}
          </div>
        </Overlay>
      </VideoContent>
      <VideoControls />
      <DropdownOptions />
    </VideoContainer>
  );
};

export default VideoPlayer;
