import React, { useImperativeHandle, useRef, useState } from "react";
import {
  Container,
  CroppedVideoContent,
  HideContainer,
  PreviewImg,
  PreviewText,
  VideoOverlay,
  VideoOverlayParentContainer,
} from "./styles";
import { PreviewThumbnailContainer } from "./components";
import { VIDEO_PLAYER_HEIGHT, VIDEO_PLAYER_WIDTH } from "constants/index";
import { VIDEO_URL } from "constants";
import ReactPlayer from "react-player";

const PreviewContainer = React.forwardRef(
  (
    {
      previewImage,
      playerWidth,
      isStartCropperClicked,
      currentRecordedData,
      setCurrentRecordedData,
    },
    ref
  ) => {
    const previewRef1 = useRef(null);
    const canvasRef1 = useRef(null);
    const videoRef1 = useRef(null);

    useImperativeHandle(ref, () => ({
      canvasRef: canvasRef1.current,
      previewRef: previewRef1.current,
      videoRef: videoRef1.current,
    }));

    console.log({ currentRecordedData });

    return (
      <Container>
        <PreviewText>Preview</PreviewText>
        <div style={{ height: "0.5rem" }} />
        {currentRecordedData === null ? (
          <PreviewThumbnailContainer />
        ) : Object.keys(currentRecordedData).length > 0 ? (
          <CroppedVideoContent
            playerWidth={playerWidth + ""}
            left={currentRecordedData.coordinates[0] + ""}
          >
            <ReactPlayer
              ref={videoRef1}
              volume={currentRecordedData.volume}
              loop={false}
              height={VIDEO_PLAYER_HEIGHT}
              playbackRate={currentRecordedData.playbackRate}
              width={"auto"}
              url={VIDEO_URL}
              playing={currentRecordedData.isPlaying}
              config={{
                file: {
                  attributes: {
                    crossOrigin: "anonymous",
                  },
                },
              }}
              onEnded={() =>
                setCurrentRecordedData({
                  ...currentRecordedData,
                  isPlaying: false,
                })
              }
            />
            <VideoOverlayParentContainer>
              <HideContainer playerWidth={playerWidth + ""} />
              <VideoOverlay playerWidth={playerWidth + ""} />
              <HideContainer playerWidth={playerWidth + ""} />
            </VideoOverlayParentContainer>
          </CroppedVideoContent>
        ) : (
          <></>
        )}

        <canvas
          ref={canvasRef1}
          style={{ display: "none" }}
          width={VIDEO_PLAYER_WIDTH}
          height={VIDEO_PLAYER_HEIGHT}
        />
      </Container>
    );
  }
);

export default PreviewContainer;

{
  /* <PreviewImg
          alt="img"
          style={{
            display:
              !previewImage || previewImage === "Empty" ? "none" : "block",
          }}
          ref={previewRef1}
          width={playerWidth}
          src={previewImage}
        /> */
}
{
  /* <video
          ref={previewRef1}
          autoPlay
          width={playerWidth}
          height={VIDEO_PLAYER_HEIGHT}
        >
          <source src="" type="video/mp4" />
        </video> */
}
