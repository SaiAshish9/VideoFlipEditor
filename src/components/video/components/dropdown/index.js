import React from "react";
import {
  DropdownContainer,
  DropdownParentContainer,
  DropdownText,
  DropdownTextSpan,
} from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownOptions = () => {
  return (
    <DropdownParentContainer>
      <DropdownContainer>
        <DropdownText>Playback speed</DropdownText>
        <DropdownTextSpan>1x</DropdownTextSpan>
        <IoIosArrowDown size={13} color="#fff" />
      </DropdownContainer>
      <DropdownContainer>
        <DropdownText>Cropper Aspect Ratio</DropdownText>
        <DropdownTextSpan>9:16</DropdownTextSpan>
        <IoIosArrowDown size={13} color="#fff" />
      </DropdownContainer>
    </DropdownParentContainer>
  );
};
export default DropdownOptions;
