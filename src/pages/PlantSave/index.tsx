import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Entypo as Icon } from '@expo/vector-icons';
import { SvgFromUri } from 'react-native-svg';
import { useRoute, useNavigation } from '@react-navigation/native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import { savePlant } from '../../libs/storage';
import { PlantProps, ConfirmationParams } from '../../types';

import waterdropImg from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';

import { styles } from './styles';

type Plant = {
  plant: PlantProps;
};

export function PlantSave(): JSX.Element {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Plant;

  function handleChangeTime(event: Event, dateTime: Date) {
    if (Platform.OS === 'android') {
      setShowDatePicker(prevState => !prevState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      Alert.alert('Ops! ⏰', 'Escolha uma data no futuro 👀');
      return;
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleShowDatePicker() {
    setShowDatePicker(true);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      } as ConfirmationParams);
    } catch {
      Alert.alert('Ohhh nooo!', 'Não foi possível salvar. 😔');
    }
  }

  const time = format(selectedDateTime, 'HH:mm');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.plantInfo}>
          <BorderlessButton
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-thin-left" style={styles.backButtonIcon} />
          </BorderlessButton>

          <SvgFromUri uri={plant.photo} width="50%" height="50%" />

          <Text style={styles.plantName}>{plant.name}</Text>

          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image source={waterdropImg} style={styles.tipImage} />
            <Text style={styles.tipText}>
              A rega deve ser feita com 400ml a cada dois dias
            </Text>
          </View>

          <Text style={styles.alertLabel}>
            Ecolha o melhor horário para ser lembrado:
          </Text>

          {Platform.OS === 'android' && (
            <RectButton
              onPress={handleShowDatePicker}
              style={styles.andridButton}
            >
              <Text style={styles.andridButtonText}>Mudar horário {time}</Text>
              <Icon name="back-in-time" style={styles.andridButtonIcon} />
            </RectButton>
          )}

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          <Button text="Cadastrar planta" onPress={handleSave} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
