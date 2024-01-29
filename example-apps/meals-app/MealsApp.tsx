import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './navigation/Navigation';

export default function MealsApp(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
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
