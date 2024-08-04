import React, { useState } from "react";
import { Container, PreviewImg, PreviewText } from "./styles";
import { PreviewThumbnailContainer } from "./components";

const PreviewContainer = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  return (
    <Container>
      <PreviewText>Preview</PreviewText>
      {!isPreviewVisible ? (
        <PreviewThumbnailContainer />
      ) : (
        <PreviewImg
          alt="img"
          src="https://cdn.pixabay.com/photo/2024/07/30/03/34/soccer-8931123_1280.jpg"
        />
      )}
    </Container>
  );
};

export default PreviewContainer;
