import React from 'react';
import { Modal, Text, View, Pressable } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';

type AlertNotificationProps = {
  title: string;
  message?: string;
  isOpen: boolean;
  closeAlert: () => void;
};

export function AlertNotification({
  title,
  message,
  isOpen,
  closeAlert,
}: AlertNotificationProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent visible={isOpen}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          {!!message && <Text style={styles.message}>{message}</Text>}

          <Pressable style={styles.button} onPress={closeAlert}>
            <Text style={styles.buttonText}>Ok</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: theme.colors.WHITE,
    marginHorizontal: '14%',
    marginVertical: '50%',
  },
  title: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.SEMIBOLD,
    lineHeight: 25,
    color: theme.colors.GRAY_DARK,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: theme.colors.GRENN_LIGHT,
  },
  message: {
    fontSize: theme.size.FONT_SIZE_NORMAL,
    fontFamily: theme.fonts.REGULAR,
    color: theme.colors.GRAY_DARK,
    lineHeight: 25,
    marginBottom: 16,
  },
  button: {
    width: 96,
    height: 48,
    marginLeft: 'auto',
    borderRadius: 12,
    backgroundColor: theme.colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.size.FONT_SIZE_SMALL,
    fontFamily: theme.fonts.SEMIBOLD,
    color: theme.colors.BLUE_MEDIUM,
    lineHeight: 23,
  },
});
