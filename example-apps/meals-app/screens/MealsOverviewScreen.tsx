import React from 'react';
import { type RouteProp } from '@react-navigation/native';

// import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';
import { type NativeStackParamList } from '../MealsApp';

interface IMealsOverviewScreenProps {
  route: RouteProp<NativeStackParamList, 'MealsOverview'>;
}

export default function MealsOverviewScreen({
  route,
}: IMealsOverviewScreenProps): JSX.Element {
  const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
