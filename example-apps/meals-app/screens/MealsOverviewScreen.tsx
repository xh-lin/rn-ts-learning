import React from 'react';

// import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

export default function MealsOverviewScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
