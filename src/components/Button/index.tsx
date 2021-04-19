import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { styles } from './styles';

interface ButtonProps extends RectButtonProps {
  title?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}

export function Button({
  title,
  iconName,
  iconSize,
  iconColor,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <RectButton style={styles.button} {...rest}>
      {title && title}
      {iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
    </RectButton>
  );
}
