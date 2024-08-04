import React from "react";
import { Container } from "./styles";
import { Header } from "components";
import VideoPlayer from "components/video";
import 'antd/dist/reset.css';

function App() {
  return (
    <Container>
      <Header />
      <VideoPlayer />
    </Container>
  );
}

export default App;
