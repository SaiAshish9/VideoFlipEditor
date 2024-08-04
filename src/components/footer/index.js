import React from "react";
import { Container, Button, ButtonContainer } from "./styles";

const OPTIONS = ["Start Cropper", "Remove Cropper", "Generate Preview"];

const Footer = () => {
  return (
    <Container>
      <ButtonContainer>
        {OPTIONS.map((text, _) => (
          <Button key={text}>{text}</Button>
        ))}
      </ButtonContainer>
    </Container>
  );
};

export default Footer;
