import React from "react";
import { Container } from "./styles";

const Tab = ({ tag, onClick, selected }) => {
  return (
    <Container selected={+(tag.title === selected)} onClick={onClick}>
      {tag.title}
    </Container>
  );
};

export default Tab;
