import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  spotlight: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.BLUE_LIGHT,
    borderRadius: 20,
    marginTop: 40,
  },
  spotlightImage: {
    width: 56,
    height: 56,
  },
  spotlightText: {
    flex: 1,
    marginLeft: 24,
    fontFamily: theme.fonts.REGULAR,
    fontSize: theme.size.FONT_SIZE_SMALL,
    color: theme.colors.BLUE_MEDIUM,
  },
  plants: {
    flex: 1,
    marginTop: 40,
  },
  plantTitle: {
    fontSize: theme.size.FONT_SIZE_MEDIUM,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_DARK,
    marginBottom: 16,
  },
});
