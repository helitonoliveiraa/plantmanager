import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.GRENN,
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
