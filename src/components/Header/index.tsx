import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

export function Header(): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Olá,</Text>
        <Text style={styles.name}>Héliton</Text>
      </View>

      <Image
        style={styles.avatar}
        source={{ uri: 'https://avatars.githubusercontent.com/u/45343619?v=4' }}
      />
    </View>
  );
}
