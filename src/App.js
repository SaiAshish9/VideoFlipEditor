import React from "react";
import { Container } from "./styles";
import { Header } from "components";
import VideoPlayer from "components/video";

function App() {
  return (
    <Container>
      <Header />
      <VideoPlayer />
    </Container>
  );
}

export default App;
