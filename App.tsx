import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes';

import theme from './src/styles/theme';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.WHITE,
        flex: 1,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </SafeAreaView>
  );
}
