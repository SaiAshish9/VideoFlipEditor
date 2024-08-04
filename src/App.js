import React from "react";
import { Container, VideoContainer, VideoContent } from "./styles";
import { Header } from "components";

function App() {
  return (
    <Container>
      <Header />
      <VideoContainer>
        <VideoContent></VideoContent>
      </VideoContainer>
    </Container>
  );
}

export default App;
