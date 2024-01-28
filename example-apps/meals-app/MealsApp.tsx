import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';

export default function MealsApp(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="dark" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
