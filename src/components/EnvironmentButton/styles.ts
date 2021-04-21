import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.LIGHT_GRAY,
    height: 40,
    borderRadius: 12,
    marginRight: 4,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: theme.colors.GRENN_LIGHT,
  },
  buttonText: {
    fontSize: theme.size.FONT_SIZE_SUPER_SMALL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_MEDIUM,
  },
  buttonTextActive: {
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRENN_DARK,
  },
});
