import React from 'react';
import { Text } from 'react-native';

import { type Route } from '../enums/Route';
import { type RouteType } from '../navigation/NativeStackParamList';

interface IMealDetailScreenProps {
  route: RouteType<Route.MealDetail>;
}

export default function MealDetailScreen({
  route,
}: IMealDetailScreenProps): JSX.Element {
  const mealId = route.params.mealId;
  return <Text>This is the Meal Detail screen ({mealId})</Text>;
}
