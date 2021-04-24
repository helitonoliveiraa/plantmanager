import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { ConfirmationParams } from '../../types';

import { styles } from './styles';

const emojis = {
  hug: '🤗',
  smile: '😃',
};

export function Confirmation(): JSX.Element {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    icon,
    title,
    subtitle,
    buttonTitle,
    nextScreen,
  } = routes.params as ConfirmationParams;

  function handleNavigate() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.footer}>
          <Button text={buttonTitle} onPress={handleNavigate} />
        </View>
      </View>
    </SafeAreaView>
  );
}
