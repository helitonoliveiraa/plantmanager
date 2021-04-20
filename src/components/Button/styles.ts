import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.GRENN,
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 20,
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.MEDIUM,
    lineHeight: 23,
    color: theme.colors.WHITE,
  },
});
