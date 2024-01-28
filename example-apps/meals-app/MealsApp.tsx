import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  NavigationContainer,
  type ParamListBase,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export interface NativeStackParamList extends ParamListBase {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
}

const Stack = createNativeStackNavigator<NativeStackParamList>();

export default function MealsApp(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
