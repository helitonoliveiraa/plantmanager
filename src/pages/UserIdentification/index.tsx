import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  // Animated,
} from 'react-native';
import { Button } from '../../components/Button';

import theme from '../../styles/theme';
import { styles } from './styles';

export function UserIdentification(): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation();

  // const a = new Animated.Value(-1);
  // const b = Animated.divide(1, a);

  // Animated.spring(a, {
  //   toValue: 1,
  //   delay: 500,
  // }).start();

  async function handleSubmit() {
    if (!name) {
      setIsErrored(true);
      Alert.alert('Me diz como chamar você!');
      return;
    }

    if (name.length > 30) return;

    try {
      await AsyncStorage.setItem('@plantmanager:username', name);
      navigation.navigate('Confirmation');
      setName('');
    } catch {
      Alert.alert('Falha ao salvar os dados!', 'Tente novamente!');
    }
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
    setIsErrored(false);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? '😃' : '🤗'}</Text>

                <Text style={styles.title}>
                  Como podemos{'\n'}
                  chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: theme.colors.GRENN,
                  },
                  isErrored && { borderColor: theme.colors.RED },
                ]}
                placeholder="Digite um nome"
                placeholderTextColor={theme.colors.GRAY}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                value={name}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button text="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
