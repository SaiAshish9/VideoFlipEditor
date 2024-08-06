import React, { useRef, useState } from "react";
import {
  Container,
  Content,
  SessionContainer,
  SessionParentContainer,
} from "./styles";
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
import { PreviewText } from "components/preview/styles";

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
            <Content>
              <VideoContent>
                <SessionContent
                  selectedHeaderItem={selectedHeaderItem}
                  currentFrame={currentFrame}
                  setCurrentFrame={setCurrentFrame}
                  recordedData={recordedData}
                />
              </VideoContent>
              <SessionParentContainer>
                <PreviewText>
                  Frame {currentFrame} Out Of {recordedData.length} Recorded
                  Frames:{" "}
                </PreviewText>
                <pre>
                  <code>
                    {JSON.stringify(recordedData[currentFrame - 1], null, 2)}
                  </code>
                </pre>
              </SessionParentContainer>
            </Content>
          )}
        </SessionContainer>
      )}
    </Container>
  );
};

export default App;
