import React from 'react';
import { Text, SafeAreaView, Image } from 'react-native';

import logoImg from '../../assets/watering.png';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Welcome(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={logoImg} style={styles.logo} />

      <Text style={styles.description}>
        Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar
        você{'\n'} sempre que precisar.
      </Text>

      <Button
        iconName="keyboard-arrow-right"
        iconSize={20}
        iconColor="#FFFFFF"
      />
    </SafeAreaView>
  );
}
