import { VIDEO_PLAYER_HEIGHT } from "./videoDimensions";

const RESOLVED_VIDEO_WIDTH = (ratio) => {
  const fraction = +ratio.split(":")[0] / +ratio.split(":")[1];
  return fraction * VIDEO_PLAYER_HEIGHT;
};

export default RESOLVED_VIDEO_WIDTH;
