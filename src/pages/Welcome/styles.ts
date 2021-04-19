import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: theme['font-size'].FONT_SIZE_LARGE,
    color: theme.colors.GRAY_DARK,
    textAlign: 'center',
    fontFamily: theme['font-family'].Jost_600SemiBold,
  },
  logo: {},
  description: {
    fontSize: theme['font-size'].FONT_SIZE_NORMAL,
    fontFamily: theme['font-family'].Jost_400Regular,
    color: theme.colors.GRAY_MEDIUM,
    textAlign: 'center',
  },
});
