import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    height: 150,
    borderRadius: 20,
    padding: 16,
    margin: 10,
    marginBottom: 16,
    backgroundColor: theme.colors.LIGHT_GRAY,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  load: {
    marginTop: '40%',
  },
  name: {
    fontSize: theme.size.FONT_SIZE_SUPER_SMALL,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_MEDIUM,
    marginTop: 'auto',
  },
});
