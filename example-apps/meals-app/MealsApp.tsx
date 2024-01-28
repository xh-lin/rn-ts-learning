import React from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MealsApp(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#24180f', // Replace with your desired background color
  },
});
