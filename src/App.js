import React, { useRef, useState } from "react";
import { Container, Content, SessionContainer } from "./styles";
import {
  Header,
  Footer,
  VideoPlayer,
  Preview,
  SessionContainer as SessionContent,
} from "components";
import { VIDEO_PLAYER_HEIGHT, TABS } from "constants/index";
import "antd/dist/reset.css";
import { VideoContent } from "components/video/styles";

const App = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [playerWidth, setPlayerWidth] = useState(VIDEO_PLAYER_HEIGHT || 307);
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);
  const combinedRefs = useRef({});
  const [isStartCropperClicked, setIsStartCropperClicked] = useState(false);
  const [isRemoveCropperClicked, setIsRemoveCropperClicked] = useState(false);
  const [isGeneratePreviewClicked, setIsGeneratePreviewClicked] =
    useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isStreamStarted, setIsStreamStarted] = useState(false);
  const [selectedHeaderItem, setSelectedHeaderItem] = useState(TABS[0].title);
  const [recordedData, setRecordedData] = useState([]);
  // https://raw.githubusercontent.com/SaiAshish9/VideoFlipEditor-Assets/main/data.json
  const [currentFrame, setCurrentFrame] = useState(0);

  return (
    <Container>
      <Header
        selected={selectedHeaderItem}
        setSelected={setSelectedHeaderItem}
      />
      {selectedHeaderItem === TABS[0].title ? (
        <>
          <Content>
            <VideoPlayer
              setPlayerWidth={setPlayerWidth}
              playerWidth={playerWidth}
              ref={combinedRefs}
              setPreviewImage={setPreviewImage}
              previewImage={previewImage}
              setVideoBlobUrl={setVideoBlobUrl}
              videoBlobUrl={videoBlobUrl}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isStartCropperClicked={isStartCropperClicked}
              isStreamStarted={isStreamStarted}
              recordedData={recordedData}
              setRecordedData={setRecordedData}
              setIsStreamStarted={setIsStreamStarted}
            />
            <Preview
              playerWidth={playerWidth}
              ref={combinedRefs}
              isStartCropperClicked={isStartCropperClicked}
              previewImage={previewImage}
              isPlaying={isPlaying}
              videoBlobUrl={videoBlobUrl}
              isStreamStarted={isStreamStarted}
            />
          </Content>
          <Footer
            isStartCropperClicked={isStartCropperClicked}
            setIsStartCropperClicked={setIsStartCropperClicked}
            isRemoveCropperClicked={isRemoveCropperClicked}
            isGeneratePreviewClicked={isGeneratePreviewClicked}
            setIsRemoveCropperClicked={setIsRemoveCropperClicked}
            setIsGeneratePreviewClicked={setIsGeneratePreviewClicked}
            recordedData={recordedData}
            setRecordedData={setRecordedData}
          />
        </>
      ) : (
        <SessionContainer>
          {recordedData?.length > 0 && (
            <>
              <VideoContent>
                <SessionContent
                  selectedHeaderItem={selectedHeaderItem}
                  currentFrame={currentFrame}
                  setCurrentFrame={setCurrentFrame}
                  recordedData={recordedData}
                />
              </VideoContent>
              <pre>
                <p>Frames: </p> <br />
                <code>{JSON.stringify(recordedData, null, 2)}</code>
              </pre>
            </>
          )}
        </SessionContainer>
      )}
    </Container>
  );
};

export default App;
