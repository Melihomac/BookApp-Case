import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const SCALE_FACTOR_HORIZONTAL = screenWidth / 375;
const SCALE_FACTOR_VERTICAL = screenHeight / 812;

export const scaleWidth = (width) => {
  return width * SCALE_FACTOR_HORIZONTAL;
};

export const scaleHeight = (height) => {
  return height * SCALE_FACTOR_VERTICAL;
};
