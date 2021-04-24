import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, Image, FlatList, Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { CustomModal } from '../../components/Modal';

import { PlantProps } from '../../types';
import { loadPlant, removePlant } from '../../libs/storage';

import waterdropImg from '../../assets/waterdrop.png';
import { styles } from './styles';
import { Loading } from '../../components/Loading';

export function MyPlants(): JSX.Element {
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWatered] = useState<string>();

  const [show, setShow] = useState(false);
  const [willRemovePlant, setWillRemovePlant] = useState<PlantProps>(
    {} as PlantProps,
  );

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
    setShow(true);
    setWillRemovePlant(plant);
  }

  async function handleDelete() {
    try {
      await removePlant(willRemovePlant.id);

      setPlants(prevState =>
        // eslint-disable-next-line prettier/prettier
        prevState.filter(p => p.id !== willRemovePlant.id));

      setShow(false);
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possível remover essa plantinha.');
    }
  }

  function handleCloseModal() {
    setShow(false);
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
        />
      </View>

      {show && (
        <CustomModal
          isOpen={show}
          plant={willRemovePlant}
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
        />
      )}
    </View>
  );
}
