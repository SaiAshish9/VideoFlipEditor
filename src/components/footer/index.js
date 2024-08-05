import React, { useState } from "react";
import { Container, Button, ButtonContainer, CancelButton } from "./styles";
import generateJSON from "utilities/jsonGenerator";

const OPTIONS = ["Start Cropper", "Remove Cropper", "Generate Preview"];

const Footer = ({
  isStartCropperClicked,
  setIsStartCropperClicked,
  isRemoveCropperClicked,
  isGeneratePreviewClicked,
  setIsRemoveCropperClicked,
  setIsGeneratePreviewClicked,
  recordedData,
}) => {
  const [selected, setSelected] = useState(null);

  function handleChange(e, text) {
    e.preventDefault();
    e.stopPropagation();
    setSelected(text);
    if (text === OPTIONS[0]) {
      setIsStartCropperClicked(true);
    } else if (text === OPTIONS[1]) {
      setIsStartCropperClicked(false);
      setIsRemoveCropperClicked(true);
    } else if (text === OPTIONS[2]) {
      generateJSON(recordedData);
      setIsStartCropperClicked(false);
      setIsGeneratePreviewClicked(true);
    }
  }

  function handleActivityChange(text) {
    if (selected === OPTIONS[0] && selected !== text) {
      return true;
    } else if (selected === OPTIONS[0] && text === OPTIONS[0]) {
      return false;
    } else if (selected === null && text === OPTIONS[0]) {
      return true;
    } else if (selected !== OPTIONS[0] && text === OPTIONS[0]) {
      return true;
    }
    return false;
  }

  return (
    <Container>
      <ButtonContainer>
        {OPTIONS.map((text, _) => (
          <Button
            onClick={(e) => handleChange(e, text)}
            key={text}
            active={+handleActivityChange(text)}
          >
            {text}
          </Button>
        ))}
      </ButtonContainer>
      <CancelButton onClick={() => setSelected(null)}>Cancel</CancelButton>
    </Container>
  );
};

export default Footer;
