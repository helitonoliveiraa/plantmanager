import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import theme from '../../styles/theme';

const smartMarginTop = Platform.OS === 'ios' ? getStatusBarHeight() : 30;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: smartMarginTop,
  },
  title: {
    fontSize: theme.size.FONT_SIZE_LARGE,
    fontFamily: theme.fonts.LIGHT,
    color: theme.colors.GRAY_DARK,
    lineHeight: 36,
  },
  name: {
    fontSize: theme.size.FONT_SIZE_LARGE,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_DARK,
    lineHeight: 36,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    resizeMode: 'cover',
  },
});
