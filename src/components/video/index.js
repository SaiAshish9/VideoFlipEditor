import React, { useRef, useState, useEffect, useCallback } from "react";
import ReactPlayer from "react-player";
import { GridCell, Overlay, VideoContainer, VideoContent } from "./styles";
import { DropdownOptions, VideoControls } from "./components";
import {
  VIDEO_PLAYER_WIDTH,
  VIDEO_PLAYER_HEIGHT,
  RESOLVED_VIDEO_WIDTH,
  VIDEO_URL,
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
      isStartCropperClicked,
      isPlaying,
      setIsPlaying,
      isStreamStarted,
      setIsStreamStarted,
      recordedData,
      setRecordedData,
      currentRecordedData,
      setCurrentRecordedData,
    },
    refs
  ) => {
    const ref = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [selectedAspectRatio, setSelectedAspectRatio] = useState("1:1");
    const [duration, setDuration] = useState(null);
    const [progress, setProgress] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [selectedResolution, setSelectedResolution] = useState("1x");
    const [volume, setVolume] = useState(0);
    const progressBarRef = useRef();

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
        if (isStartCropperClicked && currentRecordedData !== null) {
          setCurrentRecordedData({
            timeStamp: progress * duration,
            coordinates: [newX, 0, playerWidth, VIDEO_PLAYER_HEIGHT],
            volume,
            playbackRate: +playbackRate,
            isPlaying,
            playerWidth,
          });
        }
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

    function handleProgress(value) {
      if (isStreamStarted && isStartCropperClicked) {
        captureFrame();
        const data = recordedData.slice();
        if (isPlaying) {
          setRecordedData([
            ...data,
            {
              timeStamp: progress * duration,
              coordinates: [position.x, 0, playerWidth, VIDEO_PLAYER_HEIGHT],
              volume,
              playbackRate,
            },
          ]);
        }
        setCurrentRecordedData({
          timeStamp: progress * duration,
          coordinates: [position.x, 0, playerWidth, VIDEO_PLAYER_HEIGHT],
          volume,
          playbackRate: +playbackRate,
          playerWidth,
          isPlaying,
        });
      }
      progressBarRef?.current?.setProgressBarValue(
        value.playedSeconds / duration
      );
      setIsStreamStarted(true);
    }

    function handleStart() {
      setIsStreamStarted(true);
      setIsPlaying(true);
    }

    function onEnded() {
      setIsStreamStarted(false);
      setIsPlaying(false);
      setCurrentRecordedData({
        ...currentRecordedData,
        isPlaying: false,
      });
    }

    const handleDuration = (duration) => {
      setDuration(duration);
    };

    function onSliderChange(p) {
      ref.current?.seekTo(p);
      if (refs && refs.current.videoRef) {
        refs.current.videoRef.seekTo(p);
      }
      if (isStartCropperClicked && currentRecordedData !== null) {
        setCurrentRecordedData({
          timeStamp: progress * duration,
          coordinates: [position.x, 0, playerWidth, VIDEO_PLAYER_HEIGHT],
          volume,
          playbackRate: +playbackRate,
          isPlaying: isPlaying,
          playerWidth,
        });
      }
    }

    function onVolumeChange(p) {
      progressBarRef?.current?.setVolumeValue(p);
    }

    useEffect(() => {
      if (!isStartCropperClicked) {
        setPreviewImage("Empty");
        setIsPlaying(false);
        if (currentRecordedData) {
          setCurrentRecordedData({
            ...currentRecordedData,
            isPlaying: false,
          });
        } else {
          setCurrentRecordedData(null);
        }
      }
    }, [isStartCropperClicked]);

    const handleAspectRatioChange = useCallback(() => {
      if (previewImage) {
        setPreviewImage("Empty");
      }
      if (videoBlobUrl) {
        setVideoBlobUrl("Empty");
      }

      if (isStreamStarted) setIsPlaying(false);
      setPlayerWidth(RESOLVED_VIDEO_WIDTH(selectedAspectRatio));
      if (isStreamStarted && isStartCropperClicked && currentRecordedData) {
        setCurrentRecordedData({});
      }
    }, [selectedAspectRatio]);

    useEffect(() => {
      handleAspectRatioChange();
    }, [selectedAspectRatio]);

    useEffect(() => {
      if (isStreamStarted && isStartCropperClicked && currentRecordedData) {
        setCurrentRecordedData({
          ...currentRecordedData,
          playbackRate: parseFloat(selectedResolution.split("x")[0]).toFixed(1),
        });
      }
      setPlaybackRate(parseFloat(selectedResolution.split("x")[0]).toFixed(1));
    }, [selectedResolution]);

    return (
      <VideoContainer>
        <VideoContent>
          <ReactPlayer
            ref={ref}
            volume={volume}
            loop={false}
            onEnded={onEnded}
            onProgress={handleProgress}
            onDuration={handleDuration}
            height={VIDEO_PLAYER_HEIGHT}
            playbackRate={+playbackRate}
            width={"auto"}
            url={VIDEO_URL}
            playing={isPlaying}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
            onStart={handleStart}
          />
          {isStartCropperClicked && (
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
          )}
        </VideoContent>
        <VideoControls
          duration={duration}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setCurrentRecordedData={setCurrentRecordedData}
          currentRecordedData={currentRecordedData}
          progress={progress}
          onSliderChange={onSliderChange}
          ref={progressBarRef}
          setProgress={setProgress}
          volume={volume}
          setVolume={setVolume}
          playbackRate={playbackRate}
          position={position}
          playerWidth={playerWidth}
          onVolumeChange={onVolumeChange}
          isStartCropperClicked={isStartCropperClicked}
          isStreamStarted={isStreamStarted}
        />
        <DropdownOptions
          selectedAspectRatio={selectedAspectRatio}
          setSelectedAspectRatio={setSelectedAspectRatio}
          selectedResolution={selectedResolution}
          setSelectedResolution={setSelectedResolution}
        />
      </VideoContainer>
    );
  }
);

export default VideoPlayer;
