import React from "react";
import {
  DropdownContainer,
  DropdownParentContainer,
  DropdownText,
  DropdownTextSpan,
} from "./styles";

const DropdownOptions = () => {
  return (
    <DropdownParentContainer>
      <DropdownContainer>
        <DropdownText>Playback speed</DropdownText>
        <DropdownTextSpan>1x</DropdownTextSpan>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownText>Cropper Aspect Ratio</DropdownText>
        <DropdownTextSpan>9:16</DropdownTextSpan>
      </DropdownContainer>
    </DropdownParentContainer>
  );
};
export default DropdownOptions;
