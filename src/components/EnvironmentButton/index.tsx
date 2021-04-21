import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

type EnvironmentButtonProps = RectButtonProps & {
  title: string;
  active?: boolean;
};

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps): JSX.Element {
  return (
    <RectButton
      style={[styles.button, active && styles.buttonActive]}
      {...rest}
    >
      <Text style={[styles.buttonText, active && styles.buttonTextActive]}>
        {title}
      </Text>
    </RectButton>
  );
}
