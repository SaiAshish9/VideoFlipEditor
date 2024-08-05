import React, { useImperativeHandle, useRef } from "react";
import { Container, PreviewImg, PreviewText } from "./styles";
import { PreviewThumbnailContainer } from "./components";
import { VIDEO_PLAYER_HEIGHT, VIDEO_PLAYER_WIDTH } from "constants/index";

const PreviewContainer = React.forwardRef(
  ({ previewImage, playerWidth, isStartCropperClicked }, ref) => {
    const previewRef1 = useRef(null);
    const canvasRef1 = useRef(null);

    useImperativeHandle(ref, () => ({
      canvasRef: canvasRef1.current,
      previewRef: previewRef1.current,
    }));

    return (
      <Container>
        <PreviewText>Preview</PreviewText>
        <div style={{ height: "0.5rem" }} />
        {!(isStartCropperClicked) ? (
          <PreviewThumbnailContainer />
        ) : (
          <></>
        )}

        <PreviewImg
          alt="img"
          style={{
            display:
              !previewImage || previewImage === "Empty" ? "none" : "block",
          }}
          ref={previewRef1}
          width={playerWidth}
          src={previewImage}
        />
        {/* <video
          ref={previewRef1}
          autoPlay
          width={playerWidth}
          height={VIDEO_PLAYER_HEIGHT}
        >
          <source src="" type="video/mp4" />
        </video> */}
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
