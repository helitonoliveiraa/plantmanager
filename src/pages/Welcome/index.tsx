import React from 'react';
import { Text, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo as Icon } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';
import logoImg from '../../assets/watering.png';

import { styles } from './styles';

export function Welcome(): JSX.Element {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={logoImg} style={styles.logo} resizeMode="contain" />

      <Text style={styles.description}>
        Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar
        você{'\n'} sempre que precisar.
      </Text>

      <RectButton style={styles.button} onPress={handleNavigate}>
        <Icon name="chevron-thin-right" style={styles.buttonIcon} />
      </RectButton>
    </SafeAreaView>
  );
}
