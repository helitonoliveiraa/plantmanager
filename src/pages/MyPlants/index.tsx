import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

import { PlantProps, StoragePlantProps } from '../../types';
import { loadPlant, removePlant } from '../../libs/storage';

import waterdropImg from '../../assets/waterdrop.png';
import { styles } from './styles';
import { Loading } from '../../components/Loading';

export function MyPlants(): JSX.Element {
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR },
      );

      console.log(nextTime);

      setNextWatered(`Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`);

      setPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setPlants(prevState => prevState.filter(p => p.id !== plant.id));

            // console.log(data);
          } catch (err) {
            Alert.alert('Ops!', 'Não foi possível remover essa plantinha.');
          }
        },
      },
    ]);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdropImg} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWaterd}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantTitle}>Próximas regadas</Text>

        <FlatList
          data={plants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: plant }) => (
            <PlantCardSecondary
              key={String(plant.id)}
              data={plant}
              handleRemove={() => handleRemove(plant)}
            />
          )}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
}
