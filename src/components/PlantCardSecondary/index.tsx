import React, { useState } from 'react';
import { Text, ActivityIndicator, View, Animated } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Entypo as Icon } from '@expo/vector-icons';
import { SvgFromUri } from 'react-native-svg';

import theme from '../../styles/theme';

import { styles } from './styles';

type PlantProps = RectButtonProps & {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
};

export function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Icon name="trash" style={styles.buttonRemoveicon} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <View style={styles.plantContainer}>
          {loading ? (
            <ActivityIndicator style={styles.load} color={theme.colors.GRENN} />
          ) : (
            <SvgFromUri uri={data.photo} width={56} height={56} />
          )}
          <Text style={styles.name}>{data.name}</Text>
        </View>

        <View style={styles.wateringContainer}>
          <Text style={styles.wateringText}>Regar às</Text>
          <Text style={styles.wateringTime}>{data.hour}</Text>
        </View>
      </RectButton>
    </Swipeable>
  );
}
