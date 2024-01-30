import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Route } from '../enums/Route';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import type NativeStackParamList from './NativeStackParamList';

const Stack = createNativeStackNavigator<NativeStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name={Route.MealsCategories}
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Favorites'}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Stack.Screen
          name={'Drawer'}
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Route.MealsOverview}
          component={MealsOverviewScreen}
        />
        <Stack.Screen name={Route.MealDetail} component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
