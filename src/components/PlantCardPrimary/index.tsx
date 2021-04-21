import React, { useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import theme from '../../styles/theme';

import { styles } from './styles';

type PlantProps = RectButtonProps & {
  data: {
    name: string;
    photo: string;
  };
};

export function PlantCardPrimary({ data, ...rest }: PlantProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 200);

  return (
    <RectButton style={styles.container} {...rest}>
      {loading ? (
        <ActivityIndicator style={styles.load} color={theme.colors.GRENN} />
      ) : (
        <SvgFromUri uri={data.photo} width={90} height={90} />
      )}

      <Text style={styles.name}>{data.name}</Text>
    </RectButton>
  );
}
