import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54,
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 36,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: theme.size.FONT_SIZE_MEDIUM,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_DARK,
    marginTop: 24,
    lineHeight: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
    marginTop: 40,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    color: theme.colors.GRAY_MEDIUM,
    fontFamily: theme.fonts.REGULAR,
    fontSize: theme.size.FONT_SIZE_NORMAL,
  },
  footer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
