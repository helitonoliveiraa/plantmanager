import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: theme.size.FONT_SIZE_LARGE,
    color: theme.colors.GRAY_DARK,
    textAlign: 'center',
    fontFamily: theme.fonts.SEMIBOLD,
  },
  logo: {
    height: Dimensions.get('window').width * 0.7,
  },
  description: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_MEDIUM,
    textAlign: 'center',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: theme.colors.GRENN,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    fontSize: 20,
    color: theme.colors.WHITE,
  },
});
