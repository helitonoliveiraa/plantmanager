import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { AlertContextProvider } from './src/contexts/AlertContext';
import Routes from './src/routes';

import theme from './src/styles/theme';
import { PlantProps } from './src/types';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  useEffect(() => {
    /** Listening the next notification */
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      },
    );

    return () => subscription.remove();

    /** To listen all schedule notifications */
    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log(data);
    // }

    // notifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AlertContextProvider>
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
    </AlertContextProvider>
  );
}
