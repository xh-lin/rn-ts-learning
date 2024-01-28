import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Route } from '../enums/Route';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import type NativeStackParamList from './NativeStackParamList';

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Route.MealsCategories}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name={Route.MealsOverview}
          component={MealsOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
