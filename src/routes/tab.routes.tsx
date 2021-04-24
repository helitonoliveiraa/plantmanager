import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

import theme from '../styles/theme';

const Tab = createBottomTabNavigator();

export default function TabBottomRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.GRENN,
        inactiveTintColor: theme.colors.GRAY,
        labelStyle: {
          fontFamily: theme.fonts.MEDIUM,
          fontSize: theme.size.FONT_SIZE_SMALL,
        },
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: '8%',
          borderTopWidth: 0,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
