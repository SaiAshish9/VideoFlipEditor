import React, { useState } from "react";
import { Container, Button, ButtonContainer, CancelButton } from "./styles";

const OPTIONS = ["Start Cropper", "Remove Cropper", "Generate Preview"];

const Footer = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);

  return (
    <Container>
      <ButtonContainer>
        {OPTIONS.map((text, _) => (
          <Button
            selected={+(selected === text)}
            onClick={() => setSelected(text)}
            key={text}
          >
            {text}
          </Button>
        ))}
      </ButtonContainer>
      <CancelButton>Cancel</CancelButton>
    </Container>
  );
};

export default Footer;
