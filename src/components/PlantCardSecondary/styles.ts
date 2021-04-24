import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 16,
    backgroundColor: theme.colors.LIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  load: {
    marginLeft: '10%',
  },
  name: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_MEDIUM,
    marginLeft: 8,
  },
  wateringContainer: {},
  wateringText: {
    fontFamily: theme.fonts.REGULAR,
    fontSize: theme.size.FONT_SIZE_SUPER_SMALL,
    color: theme.colors.GRAY,
    lineHeight: 20,
    textAlign: 'right',
  },
  wateringTime: {
    fontFamily: theme.fonts.MEDIUM,
    fontSize: theme.size.FONT_SIZE_SUPER_SMALL,
    color: theme.colors.GRAY_MEDIUM,
    lineHeight: 20,
    textAlign: 'right',
  },
  buttonRemove: {
    width: 100,
    height: 76,
    backgroundColor: theme.colors.RED,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    right: 20,
    paddingRight: 28,
  },
  buttonRemoveicon: {
    fontSize: 28,
    color: theme.colors.WHITE,
  },
});
