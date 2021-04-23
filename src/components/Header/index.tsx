import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

export function Header(): JSX.Element {
  const [userName, setUserName] = useState<string>('');

  const routes = useRoute();

  console.log(routes.name);

  const [name] = userName.split(' ');

  let salutation = 'Olá,';
  let nameOrPlant = name;

  if (routes.name === 'MyPlants') {
    salutation = 'Minhas';
    nameOrPlant = 'Plantinhas';
  }
  useEffect(() => {
    async function loadUserData() {
      try {
        const username = await AsyncStorage.getItem('@plantmanager:username');

        setUserName(username || '');
      } catch {
        Alert.alert(
          'Falha!',
          'Desculpe, houve uma falha ao carregar seus dado!',
        );
      }
    }

    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{salutation}</Text>
        <Text style={styles.name}>{nameOrPlant}</Text>
      </View>

      <Image
        style={styles.avatar}
        source={{ uri: 'https://avatars.githubusercontent.com/u/45343619?v=4' }}
      />
    </View>
  );
}
