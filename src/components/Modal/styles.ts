import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
  },
  content: {
    padding: 32,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: '14%',
    marginVertical: '50%',
  },
  photoContainer: {
    width: 140,
    height: 134,

    borderRadius: 20,
    backgroundColor: theme.colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_DARK,
    lineHeight: 25,
    marginTop: 16,
  },
  plant: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_DARK,
    lineHeight: 25,
  },
  button: {
    width: 96,
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancel: {
    marginRight: 9,
  },
  buttonCancelText: {
    fontSize: theme.size.FONT_SIZE_SMALL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_DARK,
    lineHeight: 23,
  },
  buttonDeleteText: {
    fontSize: theme.size.FONT_SIZE_SMALL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.RED,
    lineHeight: 23,
  },
  buttonsContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
