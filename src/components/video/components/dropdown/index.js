import React, { useState, useRef, useEffect } from "react";
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
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("1:1");
  const [isResolutionDropdownVisible, setIsResolutionDropdownVisible] =
    useState(false);
  const [isAspectRatioDropdownVisible, setIsAspectRatioDropdownVisible] =
    useState(false);
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  const containerRef1 = useRef(null);
  const dropdownRef1 = useRef(null);

  function handleDropdownClickOutside() {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsResolutionDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  function handleDropdownClickOutside1() {
    const handleClickOutside = (event) => {
      if (
        containerRef1.current &&
        !containerRef1.current.contains(event.target) &&
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setIsAspectRatioDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }

  let toggleTimeout;
  const debounceToggle = (func, delay) => {
    return (...args) => {
      if (toggleTimeout) clearTimeout(toggleTimeout);
      toggleTimeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleToggle1 = debounceToggle(() => {
    setIsAspectRatioDropdownVisible((s) => !s);
  }, 10);

  const handleToggle = debounceToggle(() => {
    setIsResolutionDropdownVisible((s) => !s);
  }, 10);

  useEffect(() => {
    handleDropdownClickOutside();
    handleDropdownClickOutside1();
  }, []);

  return (
    <DropdownParentContainer>
      <DropdownContainerWrapper>
        <DropdownContainer
          ref={containerRef}
          onClick={() => setIsResolutionDropdownVisible((s) => !s)}
        >
          <DropdownText>Playback speed</DropdownText>
          <DropdownTextSpan>{selectedResolution}</DropdownTextSpan>
          {isResolutionDropdownVisible ? (
            <IoIosArrowUp size={13} color="#fff" />
          ) : (
            <IoIosArrowDown size={13} color="#fff" />
          )}
        </DropdownContainer>
        {isResolutionDropdownVisible && (
          <DropdownList ref={dropdownRef}>
            {RESOLUTIONS.map((item, _) => (
              <DropdownListItem
                selected={+(selectedResolution === item)}
                onClick={() => {
                  setSelectedResolution(item);
                  handleToggle();
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
          ref={containerRef1}
          onClick={() => setIsAspectRatioDropdownVisible((s) => !s)}
        >
          <DropdownText>Cropper Aspect Ratio</DropdownText>
          <DropdownTextSpan>{selectedAspectRatio}</DropdownTextSpan>
          {isAspectRatioDropdownVisible ? (
            <IoIosArrowUp size={13} color="#fff" />
          ) : (
            <IoIosArrowDown size={13} color="#fff" />
          )}{" "}
        </DropdownContainer>
        {isAspectRatioDropdownVisible && (
          <DropdownList ref={dropdownRef1}>
            {ASPECT_RATIO.map((item, _) => (
              <DropdownListItem
                selected={+(selectedAspectRatio === item)}
                onClick={() => {
                  setSelectedAspectRatio(item);
                  handleToggle1();
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
