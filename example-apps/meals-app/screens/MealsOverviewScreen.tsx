import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { type Route } from '../enums/Route';
import { type RouteType } from '../navigation/NativeStackParamList';

interface IMealsOverviewScreenProps {
  route: RouteType<Route.MealsOverview>;
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
