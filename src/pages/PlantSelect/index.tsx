import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Loading } from '../../components/Loading';

import api from '../../services/api';
import theme from '../../styles/theme';

import { styles } from './styles';

type EnvironmentProps = {
  key: string;
  title: string;
};

type PlantProps = {
  id: 1;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
};

export function PlantSelect(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  // const [loadedAll, setLoadedAll] = useState(false);

  async function loadPlants() {
    const response = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );

    if (!response.data) {
      setLoading(true);
      return;
    }

    if (page > 1) {
      setPlants(prevState => [...prevState, ...response.data]);
      setFilteredPlants(prevState => [...prevState, ...response.data]);
    } else {
      setPlants(response.data);
      setFilteredPlants(response.data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage(prevState => prevState + 1);
    loadPlants();
  }

  function handleSelectEnvironment(environmentKey: string) {
    setEnvironmentSelected(environmentKey);

    if (environmentKey === 'all') {
      setFilteredPlants(plants);
      return;
    }

    const filtered = plants.filter(plant =>
      plant.environments.includes(environmentKey));

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function loadPlantsEnvironments() {
      const response = await api.get<EnvironmentProps[]>(
        'plants_environments?_sort=title&_order=asc',
      );

      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...response.data,
      ]);
    }

    loadPlantsEnvironments();
  }, []);

  useEffect(() => {
    loadPlants();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual hambiente</Text>

        <Text style={styles.question}>você quer sua planta?</Text>
      </View>

      <View>
        <FlatList
          contentContainerStyle={styles.environmentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={environments}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <EnvironmentButton
              key={item.key}
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleSelectEnvironment(item.key)}
            />
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          contentContainerStyle={styles.plantsContent}
          data={filteredPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: plant }) => (
            <PlantCardPrimary key={plant.id} data={plant} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={theme.colors.GRENN} />
            ) : (
              <></>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
}
