import React from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { Welcome } from './src/pages/Welcome';

import theme from './src/styles/theme.style';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loaging...</Text>;
  }

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.WHITE }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Welcome />
    </SafeAreaView>
  );
}
