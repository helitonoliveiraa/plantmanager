import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 96,
  },
  title: {
    marginTop: 64,
    textAlign: 'center',
    lineHeight: 30,
    fontSize: theme.size.FONT_SIZE_MEDIUM,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_DARK,
  },
  subtitle: {
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 25,
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_MEDIUM,
  },
  footer: {
    width: '100%',
    paddingHorizontal: '20%',
    marginTop: 40,
  },
});
