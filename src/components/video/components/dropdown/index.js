import React from "react";
import {
  DropdownContainer,
  DropdownParentContainer,
  DropdownText,
} from "./styles";

const DropdownOptions = () => {
  return (
    <DropdownParentContainer>
      <DropdownContainer>
        <DropdownText>Playback speed</DropdownText>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownText>Cropper Aspect Ratio</DropdownText>
      </DropdownContainer>
    </DropdownParentContainer>
  );
};
export default DropdownOptions;
