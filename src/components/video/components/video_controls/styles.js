import styled from "styled-components";
import { Slider as VideoSlider } from "antd";

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-top: 1rem;
  width: 450px;
  border: none !important;
  transform: none !important;
  transition: none !important;

  .ant-slider {
    margin: 11px 0px;
    overflow: hidden;
  }

  .ant-slider-track {
    height: 6px !important;
    border-radius: 0px;
  }
  .ant-slider-track {
    background-color: #fff;
    height: 4px !important;
    border-radius: 6px;
  }
  .ant-slider-track {
    box-shadow: none !important;
  }
  .ant-slider-handle {
    box-shadow: none !important;
  }
  .ant-slider:hover .ant-slider-track {
    background-color: #fff;
  }
  .slick-list,
  .slick-track {
    touch-action: pan-y;
  }
  .ant-slider-handle {
    height: 10px !important;
    transform: none !important;
    width: 10px !important;
    background-color: #fff !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 50%;
  }
  .ant-slider-handle:focus::after,
  .ant-slider-handle::after {
    box-shadow: none !important;
  }
  .ant-slider-handle::after {
    inset-inline-start: 0px;
    inset-block-start: 0px;
    position: relative;
  }
  .ant-slider-handle::before {
    display: none !important;
  }

  .ant-slider-rail {
    background-color: rgba(255, 255, 255, 0.23) !important;
    width: calc(100% + 5px);
  }
  .ant-slider-step {
  }
  :where(.css-dev-only-do-not-override-d2lrxs).ant-slider
    .ant-slider-handle:hover::after,
  :where(.css-dev-only-do-not-override-d2lrxs).ant-slider
    .ant-slider-handle:active::after,
  :where(.css-dev-only-do-not-override-d2lrxs).ant-slider
    .ant-slider-handle:focus::after {
    outline: none !important;
    transform: none !important;
  }
`;

export const PlayIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

export const SoundIcon = styled.img`
  width: 14px;
  height: fit-content;
  margin-right: 0.5rem;
`;

export const Slider = styled(VideoSlider)`
  border-radius: 6px;
  width: 100%;
  cursor: pointer;
`;

export const TimelineTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const CurrentTimelineText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  padding: 0px;
  margin: 0px;
  padding-right: 0.25rem;
  font-weight: 200;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
`;

export const TotalTimeDuration = styled.p`
  font-size: 12px;
  padding: 0px;
  margin: 0px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 0.25rem;
`;

export const SoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MuteSlider = styled(VideoSlider)`
  border-radius: 6px;
  width: 45px;
  cursor: pointer;
  .ant-slider-track {
    height: 3px !important;
    border-radius: 0px;
  }
  .ant-slider-track {
    background-color: #fff;
    height: 3px !important;
    border-radius: 6px;
  }
  .ant-slider-handle {
    height: 6px !important;
    transform: none !important;
    width: 6px !important;
    background-color: #fff !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 50%;
    position: relative;
    top: -1.3px;
  }
  .ant-slider-rail {
    height: 3px;
    width: calc(100% + 0px);
  }
`;
