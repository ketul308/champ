import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375; // Base width for scaling
const guidelineBaseHeight = 812; // Base height for scaling

export const scaleWidth = (size) => (width / guidelineBaseWidth) * size;
export const scaleHeight = (size) => (height / guidelineBaseHeight) * size;
export const scaleFont = (size) => size * PixelRatio.getFontScale();
