import React from "react";
import { Container } from "./styles";
import { Header } from "components";
import VideoPlayer from "components/video";
import 'antd/dist/reset.css';
import { Footer } from "components";

function App() {
  return (
    <Container>
      <Header />
      <VideoPlayer />
      <Footer />
    </Container>
  );
}

export default App;
