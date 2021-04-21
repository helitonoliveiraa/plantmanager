import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.MEDIUM,
    color: theme.colors.GRAY_MEDIUM,
    lineHeight: 23,
    marginTop: 40,
  },
  question: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_MEDIUM,
    lineHeight: 23,
  },
  environmentList: {
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  plants: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  plantsContent: {},
});
