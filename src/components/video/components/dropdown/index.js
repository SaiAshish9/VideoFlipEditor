import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownParentContainer,
  DropdownText,
  DropdownTextSpan,
  DropdownContainerWrapper,
  DropdownList,
  DropdownListItem,
} from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RESOLUTIONS = ["0.5x", "1x", "1.5x", "2x"];
const ASPECT_RATIO = ["9:18", "9:16", "4:3", "3:4", "1:1", "4:5"];

const DropdownOptions = () => {
  const [selectedResolution, setSelectedResolution] = useState("1x");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("9:16");
  const [isResolutionDropdownVisible, setIsResolutionDropdownVisible] =
    useState(false);
  const [isAspectRatioDropdownVisible, setIsAspectRatioDropdownVisible] =
    useState(false);

  return (
    <DropdownParentContainer>
      <DropdownContainerWrapper>
        <DropdownContainer onClick={() => setIsResolutionDropdownVisible(true)}>
          <DropdownText>Playback speed</DropdownText>
          <DropdownTextSpan>{selectedResolution}</DropdownTextSpan>
          <IoIosArrowDown size={13} color="#fff" />
        </DropdownContainer>
        {isResolutionDropdownVisible && (
          <DropdownList>
            {RESOLUTIONS.map((item, _) => (
              <DropdownListItem
                onClick={() => {
                  setSelectedResolution(item);
                  setIsResolutionDropdownVisible(false);
                }}
                key={item}
              >
                {item}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainerWrapper>
      <DropdownContainerWrapper>
        <DropdownContainer
          onClick={() => setIsAspectRatioDropdownVisible(true)}
        >
          <DropdownText>Cropper Aspect Ratio</DropdownText>
          <DropdownTextSpan>{selectedAspectRatio}</DropdownTextSpan>
          <IoIosArrowDown size={13} color="#fff" />
        </DropdownContainer>
        {isAspectRatioDropdownVisible && (
          <DropdownList>
            {ASPECT_RATIO.map((item, _) => (
              <DropdownListItem
                onClick={() => {
                  setSelectedAspectRatio(item);
                  setIsAspectRatioDropdownVisible(false);
                }}
                key={item}
              >
                {item}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainerWrapper>
    </DropdownParentContainer>
  );
};
export default DropdownOptions;
