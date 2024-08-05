import React, { useRef, useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import { GridCell, Overlay, VideoContainer, VideoContent } from "./styles";
import { DropdownOptions, VideoControls } from "./components";
import {
  VIDEO_PLAYER_WIDTH,
  VIDEO_PLAYER_HEIGHT,
  RESOLVED_VIDEO_WIDTH,
} from "constants/index";

const VideoPlayer = React.forwardRef(
  (
    {
      setPreviewImage,
      playerWidth,
      setPlayerWidth,
      previewImage,
      videoBlobUrl,
      setVideoBlobUrl,
    },
    refs
  ) => {
    const ref = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [selectedAspectRatio, setSelectedAspectRatio] = useState("1:1");

    const captureFrame = () => {
      if (
        ref &&
        ref.current &&
        ref.current.getInternalPlayer() &&
        refs.current &&
        refs.current.canvasRef &&
        refs.current.previewRef
      ) {
        const canvasRef = refs.current.canvasRef;
        const previewRef = refs.current.previewRef;
        const video = ref.current.getInternalPlayer();
        const canvas = canvasRef;
        const context = canvas.getContext("2d");
        canvas.width = VIDEO_PLAYER_WIDTH;
        canvas.height = VIDEO_PLAYER_HEIGHT;

        context.drawImage(video, 0, 0, VIDEO_PLAYER_WIDTH, VIDEO_PLAYER_HEIGHT);
        let cropX = position.x;
        const imageData = context.getImageData(
          cropX,
          0,
          playerWidth,
          VIDEO_PLAYER_HEIGHT
        );
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = playerWidth;
        tempCanvas.height = VIDEO_PLAYER_HEIGHT;
        const tempContext = tempCanvas.getContext("2d");
        tempContext.putImageData(imageData, 0, 0);
        const dataUrl = tempCanvas.toDataURL();
        setPreviewImage(dataUrl);
        previewRef.src = dataUrl;
      }
    };

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
        if (newX + playerWidth > VIDEO_PLAYER_WIDTH)
          newX = VIDEO_PLAYER_WIDTH - playerWidth;

        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      document.body.style.cursor = "default";
      captureFrame();
    };

    useEffect(() => {
      const initialX = (VIDEO_PLAYER_WIDTH - playerWidth) / 2;
      const initialY = 0;
      setPosition({ x: initialX, y: initialY });
    }, [playerWidth, VIDEO_PLAYER_HEIGHT]);

    const handleAspectRatioChange = useCallback(() => {
      setPlayerWidth(RESOLVED_VIDEO_WIDTH(selectedAspectRatio));
      if (previewImage) {
        setPreviewImage("Empty");
      }
      if (videoBlobUrl) {
        setVideoBlobUrl("Empty");
      }
    }, [selectedAspectRatio]);

    useEffect(() => {
      handleAspectRatioChange();
    }, [selectedAspectRatio]);

    function handleProgress() {
      captureFrame();
    }

    return (
      <VideoContainer>
        <VideoContent>
          <ReactPlayer
            ref={ref}
            muted={!false}
            loop={true}
            onEnded={() => {}}
            onProgress={handleProgress}
            height={VIDEO_PLAYER_HEIGHT}
            width={"auto"}
            url={
              "https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4"
            }
            playing={true}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />
          <Overlay
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            left={`${position.x}px`}
            width={playerWidth}
          >
            {[...Array(9)].map((_, i) => (
              <GridCell key={i} width={playerWidth} />
            ))}
          </Overlay>
        </VideoContent>
        <VideoControls />
        <DropdownOptions
          selectedAspectRatio={selectedAspectRatio}
          setSelectedAspectRatio={setSelectedAspectRatio}
        />
      </VideoContainer>
    );
  }
);

export default VideoPlayer;
