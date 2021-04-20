import React from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

import theme from '../styles/theme';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animarion: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const Stack = createStackNavigator();

export default function AppRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.WHITE,
        },
        gestureEnabled: true,
        // gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="UserIdentification" component={UserIdentification} />

      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}
