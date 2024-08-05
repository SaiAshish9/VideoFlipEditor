import { VIDEO_PLAYER_WIDTH } from "./videoDimensions";

const RESOLVED_VIDEO_WIDTH = (ratio) => {
  const fraction = +ratio.split(":")[0] / +ratio.split(":")[1];
  return fraction * VIDEO_PLAYER_WIDTH;
};

export default RESOLVED_VIDEO_WIDTH;
