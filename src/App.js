import React from "react";
import { Container, Content } from "./styles";
import { Header, Footer, VideoPlayer, Preview } from "components";
import "antd/dist/reset.css";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <VideoPlayer />
        <Preview />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
