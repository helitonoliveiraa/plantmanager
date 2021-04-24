import { StyleSheet, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../styles/theme';

const bottonSpace = Platform.OS === 'ios' ? getBottomSpace() : 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: theme.colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controller: {
    backgroundColor: theme.colors.WHITE,
    paddingHorizontal: 20,
    paddingBottom: bottonSpace,
  },
  backButton: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    left: 24,
  },
  backButtonIcon: {
    fontSize: 16,
    color: theme.colors.GRAY_DARK,
  },
  plantName: {
    fontSize: theme.size.FONT_SIZE_MEDIUM,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.GRAY_MEDIUM,
    textAlign: 'center',
    lineHeight: 32,
    marginTop: 32,
  },
  plantAbout: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_MEDIUM,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 16,
  },

  tipContainer: {
    padding: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.BLUE_LIGHT,
    position: 'relative',
    bottom: 45,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 24,
    fontSize: theme.size.FONT_SIZE_SMALL,
    color: theme.colors.BLUE_MEDIUM,
    lineHeight: 23,
    textAlign: 'justify',
  },
  alertLabel: {
    fontSize: theme.size.FONT_SIZE_SUPER_SMALL,
    color: theme.colors.GRAY_MEDIUM,
    textAlign: 'center',
    marginBottom: 16,
  },
  andridButton: {
    marginTop: '5%',
    marginBottom: '15%',
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    backgroundColor: theme.colors.GRENN_LIGHT,
    borderRadius: 10,
  },
  andridButtonText: {
    color: theme.colors.GRAY_MEDIUM,
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    paddingRight: '5%',
  },
  andridButtonIcon: {
    fontSize: 20,
    color: theme.colors.GRAY_MEDIUM,
  },
});
