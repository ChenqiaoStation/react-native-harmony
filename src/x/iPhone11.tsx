import {Dimensions, Platform, StatusBar} from 'react-native';

const isiPhone11 = () => {
  const dimensions = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimensions.height === 780 ||
      dimensions.width === 780 ||
      dimensions.height === 812 ||
      dimensions.width === 812 ||
      dimensions.height === 844 ||
      dimensions.width === 844 ||
      dimensions.height === 896 ||
      dimensions.width === 896 ||
      dimensions.height === 926 ||
      dimensions.width === 926)
  );
};

const getStatusBarHeight = () => {
  return Platform.select({
    ios: isiPhone11() ? 44 : 20,
    android: StatusBar.currentHeight, // StatusBar.currentHeight
    default: 0,
  });
};

const getBottomSpace = () => {
  return isiPhone11() ? 34 : 0;
};

export default {isiPhone11, getStatusBarHeight, getBottomSpace};
