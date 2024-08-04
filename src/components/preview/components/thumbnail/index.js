import React from "react";
import { Container, PreviewSubTitle, PreviewThumbnailImg, PreviewTitle } from "./styles";
import YoutubeImg from "assets/youtube.svg"

const PreviewThumbnailContainer = () => {
  return (
    <Container>
        <PreviewThumbnailImg alt="img" src={YoutubeImg} />
      <PreviewTitle>Preview not available</PreviewTitle>
      <PreviewSubTitle>
        Please click on “Start Cropper” <br />
        and then play video
      </PreviewSubTitle>
    </Container>
  );
};

export default PreviewThumbnailContainer;
