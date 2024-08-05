import React, { useRef, useState } from "react";
import { Container, Content } from "./styles";
import { Header, Footer, VideoPlayer, Preview } from "components";
import { VIDEO_PLAYER_HEIGHT } from "constants/index";
import "antd/dist/reset.css";

const App = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [playerWidth, setPlayerWidth] = useState(VIDEO_PLAYER_HEIGHT || 307);
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);
  const combinedRefs = useRef({});

  return (
    <Container>
      <Header />
      <Content>
        <VideoPlayer
          setPlayerWidth={setPlayerWidth}
          playerWidth={playerWidth}
          ref={combinedRefs}
          setPreviewImage={setPreviewImage}
          previewImage={previewImage}
          setVideoBlobUrl={setVideoBlobUrl}
          videoBlobUrl={videoBlobUrl}
        />
        <Preview
          playerWidth={playerWidth}
          ref={combinedRefs}
          previewImage={previewImage}
          videoBlobUrl={videoBlobUrl}
        />
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
